import dotenv from 'dotenv';
import OpenAI from 'openai';// 为什么放头部，可读性好
//.env导入本项目   环境变量配置文件
dotenv.config();
const {
 OPENAI_API_KEY,
 OPENAI_BASE_URL,
}=process.env

const client=new OpenAI({
    apiKey:OPENAI_API_KEY,
    baseURL:OPENAI_BASE_URL,
})
//完成get_completions函数封装
//async es7 异步函数
const get_completions = async(prompt, model = 'gpt-3.5-turbo') => {
    // 构建请求消息对象
    const massage = [{
        role: 'user',
        content: prompt
    }]

    // 发送请求并等待响应
    const response = await client.chat.completions.create({
        model,
        // 使用构建好的消息对象
        messages: massage, // 添加行注释：使用构建好的消息对象
        temperature: 0
    })

    // 返回响应中的第一条消息内容
    return response.choices[0].message.content
}
const main=async()=>{
    //nlp情感分型
    // const sentiment="negative"//消极
    // const review = `
    // 因此，他们仍然以 70-10 左右的价格在季节性销售，价格也比之前的 29 美元低。
    // 所以它看起来还不错，但如果你看看底座，刀片锁定到位的部分看起来不如几年前的版本那么好，但我打算非常温柔地使用它（例如，我先在搅拌机中粉碎非常硬的物品，如豆子、冰、米饭等。然后在搅拌机中将它们粉碎成我想要的份量，然后切换到搅拌刀片以获得更细的面粉，并在制作冰沙时先使用十字切割刀片，然后如果我需要它们更细/更少的浆状，则使用平刀片）。制作冰沙的特别提示：将水果和蔬菜切碎并冷冻（如果使用菠菜，请稍微炖一下，然后冷冻直至可以使用；如果制作冰糕，请使用小型或中型食品加工机），这样就可以避免在制作冰沙时添加太多冰块。
    // 大约一年后，电机发出奇怪的声音。
    // 我打电话给客服，但保修期已过，所以我不得不再买一个。仅供参考：这类产品的整体质量已经下降，因此他们有点指望品牌认知度和消费者忠诚度来维持销售。大约两天后就收到了。
    // `
    // const prompt=`
    // 你是客服ai助理
    // 你的任务是向尊贵的顾客发送电子邮件回复，
    // 给定以'''分隔的客户电子邮件
    // 生成回复感谢用户的评论
    // 确保评论使用具体的细节，一定要针对用户的具体问题道歉
    // 如果情绪是正面或中性的，感谢他们的评价，
    // 如果情绪是负面的，道歉并建议他们可以联系客户
    // 让回复尽可能简短，但仍然包含重要的信息
    // 在电子邮件中签名为ai助理
    // 客户评论：'''${review}'''
    // 情绪评论：${sentiment}
    // `
    // const res=await get_completions(prompt)
    // console.log(res)
    const lamp_review = `
  需要一盏漂亮的灯放在我的卧室，这盏灯有额外的存储空间，而且价格也不太高。 
  很快就收到了。我们灯的灯串在运输过程中断了，公司很乐意给我们寄来一根新的。
  几天之内就到了。组装起来很容易。
  我缺少一个零件，所以我联系了他们的支持人员，他们很快就给我找到了缺失的零件！ 
  在我看来，Lumina 是一家关心客户和产品的好公司！！`
  //吴恩达promote
  const prompt = `
  从评论文本中识别以下项目：
  - 情绪（正面或负面）
  - 评论者是否表达愤怒？（真或假）
  - 评论者购买的商品
  - 制造商品的公司

  评论以三个反引号分隔。
  将您的回复格式化为 JSON 对象，其中
  “情绪”、“愤怒”、“商品”和“品牌”作为键。
  如果信息不存在，请使用“未知”
  作为值。
  让您的回复尽可能简短。
  将愤怒值格式化为布尔值。

  评论文本: '''${lamp_review}'''
  `
  const res=await get_completions(prompt)
  console.log(res)
}
main()