const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// 目标 URL
const url = 'https://huaban.com/pins/4301306520';

// 发送 HTTP GET 请求
axios.get(url)
    .then(response => {
        // 使用 cheerio 加载响应的 HTML
        const $ = cheerio.load(response.data);

        // 选择所有图片元素
        const images = $('img').toArray();

        console.log(`找到了 ${images.length} 张图片`);

        // 遍历每个图片元素
        images.forEach((img, index) => {
            const imgSrc = $(img).attr('src'); // 获取图片的 src 属性
            if (imgSrc) {
                // 构建完整的图片 URL
                const fullImgUrl = new URL(imgSrc, url).href;

                // 提取图片文件名
                const fileName = path.basename(fullImgUrl);

                // 定义保存路径（当前项目目录）
                const savePath = path.join(__dirname, fileName);

                // 下载图片并保存到本地
                axios({
                    method: 'get',
                    url: fullImgUrl,
                    responseType: 'stream'
                }).then(response => {
                    response.data.pipe(fs.createWriteStream(savePath))
                        .on('finish', () => {
                            console.log(`图片 ${fileName} 已保存`);
                        })
                        .on('error', err => {
                            console.error(`保存图片 ${fileName} 时出错:`, err);
                        });
                }).catch(error => {
                    console.error(`下载图片 ${fullImgUrl} 时出错:`, error);
                });
            } else {
                console.warn(`图片 ${index} 没有 src 属性`);
            }
        });
    })
    .catch(error => {
        console.error('请求失败:', error);
    });