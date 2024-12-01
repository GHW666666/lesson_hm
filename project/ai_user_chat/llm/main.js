// node内置的模块
const http = require('http');
const OpenAi = require('openai');
const url = require('url'); // url内置 查询字符串的模块

const client = new OpenAi({
    apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
    baseURL: "https://api.302.ai/v1"
});

const getCompletion = async (prompt, model = "gpt-3.5-turbo") => {
    // 用户提的问题
    const messages = [{
        role: 'user',
        content: prompt
    }];
    // AIGC chat 接口
    const response = await client.chat.completions.create({
        model: model,
        messages: messages,
        // LLM 生成内容的随机性
        temperature: 0.1
    });
    return response.choices[0].message.content;
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query);
    const queryObj = parsedUrl.query;

    if (queryObj.question && queryObj.data) {
        const prompt = `
            ${queryObj.data}
            请根据上面的JSON数据，回答${queryObj.question}这个问题
        `;
        try {
            const result = await getCompletion(prompt); // 使用 await 等待 getCompletion 完成
            const info = {
                result
            };
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(info));
        } catch (error) {
            console.error("Error in getCompletion:", error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Internal Server Error" }));
        }
    } else {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Missing required parameters" }));
    }
});

server.listen(1314, () => {
    console.log('Server is running on http://localhost:1314');
});