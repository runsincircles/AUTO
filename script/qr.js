const fs = require("fs");
const axios = require("axios");

module.exports = {
  config: {
    name: "qrcode",
    aliases: ['qr'],
    author: "YourName",
    version: "1.0",
    cooldowns: 3,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "Generate a QR code from the given data."
    },
    category: "utility",
    guide: {
      en: "[data]"
    }
  },
  run: async function ({ api, event, args }) {
    let path = __dirname + "/cache/qrcode.png";
    let data;

    if (args.length === 0) {
      return api.sendMessage("Usage: qrcode [data]", event.threadID, event.messageID);
    }

    data = args.join(" ");

    let tid = event.threadID;
    let mid = event.messageID;

    try {
      api.sendMessage("Generating QR code... ⏰", tid, mid);

      let url = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(data)}`;

      let response = await axios.get(url, { responseType: "stream" });

      response.data.pipe(fs.createWriteStream(path));

      response.data.on("end", () => {
        api.sendMessage({ attachment: fs.createReadStream(path) }, tid, () => fs.unlinkSync(path), mid);
      });
    } catch (e) {
      return api.sendMessage(e.message, tid, mid);
    }
  }
};
