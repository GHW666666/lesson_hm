const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');

// 歌曲ID
const songId = 27955142;
const songUrl = `https://music.163.com/#/song?id=${songId}`;

(async () => {
    // 启动浏览器
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // 导航到歌曲页面
    await page.goto(songUrl, { waitUntil: 'networkidle2' });

    // 等待音频元素加载
    await page.waitForSelector('audio');

    // 获取音频元素的 src 属性
    const audioSrc = await page.evaluate(() => {
        const audioElement = document.querySelector('audio');
        return audioElement ? audioElement.src : null;
    });

    if (!audioSrc) {
        console.error('无法获取音频源地址');
        await browser.close();
        return;
    }

    console.log('音频源地址:', audioSrc);

    // 下载音频文件
    const file = fs.createWriteStream(`song_${songId}.mp3`);
    https.get(audioSrc, response => {
        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log('歌曲下载完成');
            browser.close();
        });

        file.on('error', err => {
            fs.unlink(file);
            console.error('下载错误:', err.message);
            browser.close();
        });
    }).on('error', err => {
        console.error('请求错误:', err.message);
        browser.close();
    });
})();