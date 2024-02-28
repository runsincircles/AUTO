const axios = require('axios');

module.exports.config = {
  name: 'ai4',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpty3', 'tst'],
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
    api.sendMessage(`veuillez me poser une question de la manière suivante : 'ai'. example: 'ai quelle est la capitale de la France '`, event.threadID, event.messageID);
    return;
  }

  api.sendMessage(`🔍 "${input}"`, event.threadID, event.messageID);

  try {
    const {
      data
    } = await axios.get(`https://ai-tools.replit.app/gpt?prompt=${encodeURIComponent(input)}&uid=${id}`);
    const response = data.gpt4;

    api.sendMessage(response, event.threadID, async (error, messageInfo) => {
      if (!error) {
        // Définir un tag pour la réponse de l'IA
        const tag = `@${messageInfo.senderID}`;

        // Attendre la réponse de l'utilisateur avec le tag approprié
        const userResponse = await api.listenMqtt({
          threadID: event.threadID,
          tags: [tag],
          messageIDs: [messageInfo.messageID],
          mentions: [api.getCurrentUserID()]
        });

        // Envoyer la réponse de l'utilisateur à l'IA
        const input = userResponse.body;
        const {
          data
        } = await axios.get(`https://ai-tools.replit.app/gpt?prompt=${encodeURIComponent(input)}&uid=${id}`);
        const response = data.gpt4;
        api.sendMessage(response, event.threadID);
      }
    });
  } catch (error) {
    api.sendMessage('An error occurred while processing your request/n/contact admin :Tazy bot.', event.threadID, event.messageID);
  }
};
