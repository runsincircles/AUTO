const axios = require('axios');
module.exports.config = {
  name: 'ai3',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpty', 'kouly'],
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
  const id = event.senderID;
  if (!input) {
    api.sendMessage(`veullez me poser une question de la manière suivante : 'ai'. example: 'ai quelle est la capitale de la France '`, event.threadID, event.messageID);
    return;
  }
  try {
    const {
      data
    } = await axios.get(`https://ai-tools.replit.app/gpt?prompt=${encodeURIComponent(input)}&uid=69`);
    const response = data.gpt4;
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request/n/contact admin :Tazy bot.', event.threadID, event.messageID);
  }
};
