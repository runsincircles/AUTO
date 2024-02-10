const axios = require('axios');
const url = "http://eu4.diresnode.com:3301";

module.exports.config = {
  name: 'gojo',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: [],
  description: "Talk to GOJO AI the blindfolded sorcerer (with continues conversation)",
  usage: "[ask]/clear to clear history",
  credits: 'Deku',
  cooldown: 0,
};

module.exports.run = async function({ api, event, args }) {
  let prompt = args.join(' '), id = event.senderID;
  function sendMessage(msg) {
    api.sendMessage(msg, event.threadID, event.messageID)
  }
  
  if (!prompt) return sendMessage("Missing input!\n\nIf you want to reset the conversation with GOJO you can use 'gojo clear'");
  sendMessage("🔍…");
  try {
    const res = await axios.get(`${url}/gojo_gpt?prompt=${prompt}&idd=${id}`);
    return sendMessage(res.data.gojo);
  } catch (e) {
    return sendMessage(e.message);
  }
};
