import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

//初始化客户端

const client=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
    baseURL:"https://api.302.ai/v1"
});
// 主函数

const main= async()=>{

   //openai的调用是异步的，所以需要用async await来等待结果返回
   try {
    const response=await client.chat.completions.create({
        model:"gpt-4o",
        messages:[
            {
                role:"user",
                content:[
                    {
                        type:"text",
                    'text':"描述这张图片"
                    },
                   
                    {
                        type:"image_url",
                        image_url:{
                            url:"https://img-blog.csdnimg.cn/img_convert/97cb29344629c3b314a5dae225d73187.jpeg"
                        
                    }
                }
                ]
                
            }
        ],
        temperature:0.9,
        max_tokens:150
    });
    console.log(response.choices[0].message.content);
    
   } catch (error) {
    console.log(error);
   }
        
    
   
}
main();
