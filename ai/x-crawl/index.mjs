import {createCrawl  //返回爬虫示例
    ,createCrawlOpenAI //OpenAI配置项
} from 'x-crawl';
// 实例化爬虫应用
const cralwApp = createCrawl({
    maxRetry:3,
    intervalTime:{
        min:1000,
        max:2000
    },  
});

const cralwAppOpenAI = createCrawlOpenAI({
   clientOptions:{ apiKey:'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
    baseURL:'https://api.302.ai/v1/'
   },
   defaultModel:{
   chatModel:'gpt-4-turbo-preview'
   }
})

cralwApp.crawlPage('http://movie.douban.com/chart')
.then(async(res) =>{
    const{page,browser} = res.data;
    const targetSelector = '.indent';
    await page.waitForSelector(targetSelector);
    const highlyHTML = await page.$eval(
        targetSelector,
        (el) => el.innerHTML
    );


    const result = await cralwAppOpenAI.parseElements(
       highlyHTML,
       `获取图片链接，获取标题，获取评分电影简介
       输出格式为json数组
       如[
           {
               src:'',
               title:'',
               score:'',
               desc:''
           }
        ]
       `
    )
    browser.close();
    console.log(result);
    // cralwApp.crawlFile({
    //     targets:result.elements[0].src,
    //     storeDirs:'./download'
    // })
}

)