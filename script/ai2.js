const axios = require('axios');
module.exports.config = {
  name: 'chatgpt',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['kouly', 'dino',],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Please provide a question or statement after 'dino'. For example: 'ai What is the capital of France?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔍 "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(input)}`);
    const response = data.reply;
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
