// import { Configuration, OpenAIApi } from "openai-edge"
// import { OpenAIStream, StreamingTextResponse } from "ai"
//
// export const runtime = 'edge';
//
// const configuration = new Configuration({
//     apiKey: "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"
// });
//
// const openai = new OpenAIApi(configuration);
//
// const handleClick = () => {
//     async function generateGpt3Response(prompt) {
//         try {
//             const response = await openaiapi.createChatCompletion({
//                 model: "gpt-3.5-turbo",
//                 messages: prompt,
//             });
//             console.log(response.data.choices[0].message.content);
//         } catch (error) {
//             console.error('Ошибка:', error);
//         }
//     }
//     generateGpt3Response('Какой сейчас год ?');
// }
