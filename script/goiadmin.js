module.exports.config = {
	name: "goiadminn",
	version: "1.0.0",
	role: 0,
	credits: "John Arida",
	description: "Bot will rep ng tag admin or rep ng tagbot",
	usages: "",
	hasPrefix: true,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, admin }) {
	if (event.senderID !== admin && event.mentions) {
		var aid = [admin];
		for (const id of aid) {
			if (event.mentions[id]) {
				var msg = [
					"Efa matory ny olona antsoinao, miandrasa kely na apetrao ny hafatra aorina ny bip☺️",
					"Stop mentioning my creator, he's busy 😗",
					"My Creator is currently offline 😢",
					"𝖠𝗇𝗈𝗍𝗁𝖾𝗋 𝗍𝖺𝗀 𝗂𝗇 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇, 𝗂 𝗐𝗂𝗅𝗅 𝗉𝗎𝗇𝖼𝗁 𝗒𝗈𝗎 🙂",
					"busy pa ata yun kaya mag-antay ",
					"Sorry, don't disturb him 🙄",
					"Do you like my creator thats why your tagging him? Why dont you add him https://www.facebook.com/profile.php?id=100006808637969😏",
					" Another tag in my Creator, i will kick your fucking ass"
				];
				api.setMessageReaction("😍", event.messageID, (err) => {}, true);
				return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
			}
		}
	}
};

module.exports.run = async function({ admin }) {
};
