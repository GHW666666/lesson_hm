const request = require('request-promise');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const HOT_URL = "https://tophub.today/n/KqndgxeLl9";


// network http 请求
request(HOT_URL).then(
   html=>{ 
    console.log(html);
    //内存里模拟浏览器 cheerio
    const $ = cheerio.load(html);
    const hotList = [];
    $('tbody tr').each((index, element) => {
        // console.log(index,element);
        const rank=$(element).find('td:nth-child(1)').text().trim();
        const title=$(element).find('td:nth-child(2)').text().trim();
        const head=$(element).find('td:nth-child(3)').text().trim();
        const link=$(element).find('td:nth-child(2) a').attr('href').trim();
        hotList.push({
            rank,
            title,
            head,
            link
        });
        const csvWriter = createCsvWriter({
            path: " hot_list2.csv",
            header: [
                {id: 'rank', title: '排序'},
                {id: 'title', title: '标题'},
                {id: 'head', title: '热度'},
                {id: 'link', title: '链接'}
            ]
        });
        csvWriter.writeRecords(hotList).then(() => {
            console.log('csv has been written');
        });

    })
   }
)
   

