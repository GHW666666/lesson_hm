//引入OpenAi模块
//AI 模块 es6推出的模块化能力
import OpenAI from 'openai';

//实例化OpenAi模块
const openai = new OpenAI({
    //付费
    apiKey:'sk-5PUDrQhFqCVr0KluhSbYcCgIx6S21dNcxGJOxhpo3BEtIhRw',
    //国内转发
    baseURL:'https://api.302.ai/v1'
});
const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    max_tokens:256,
    prompt: `假如是林夕这样的爱情歌手作词大家，请你以写一首主
    题为爱上森林北的摇滚歌曲。森林北是一位美丽撒泼有活力的女孩`,
});
console.log(response);

