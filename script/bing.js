const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const KievRPSSecAuth = "FAC6BBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACPqeedKFe6/CeAThbCcTqvsWFQyaRl9/ZjDWDdCez7rtOQeCVsYALNn3Dwq5MohjaoDD/0rpFSlPqnLXbFtO/q402jNyWBISWqJhKsiD91kVI1TtpW06lpN7uytEYHz5BVF86DQL7s2oSLipFpIU/meaE76/uZs/g8zuERAx87+sBhi2kgtguPb64ryq5iaE0ME25KHSdj2ripCspQp49VOmgJOrTuSnGkJBJM6QBOmzqy5fL+6U9pyqdzQ5ecUijZRUKboxtU6QyfaswY8eWYRLEXLD9OOCbanLtJ9iEDjBvGqbO6pVvwFSUI5UspqaL1fM6ludz69kvIkggmtVS/ZUs5QuFyKBEoUVGtSG3VxfNXpYvgpQisFF5WuHeI46GoWQtts49peCpZgQNr36vNQYo9vw3xwgsA8mHMe7OFeU/VEnmtBL+OMus5aTqF0QtRCjyR1MTLN2oBIPAwg83loR+BbycftHmzX/V5AN8fUTb0ePA9sMygoyao1/o94FMnbfFevK/2PFpqPadpQ9e7Nf4ZKLTJXDTVdjiW5Q+yPyNqNYGHBW1C+BE1dC+hU+xKTeXh6q4Gl/fE0dPUy+4A8bxmabBTf4gJqnny5/c385RSbwyWTcuiS9qh7Fz5lKUqNJXsMEjgIzoecw4BOmy0cLTW3JoeIyjOY+j/ok2c8MSOwngJJLLG/saECxiZjkzLsOmshItDGiwLukOaAWYbfvQaD3sI9tW9biLMk/yoZFJ8xsSkkEK8evycPR4QFAwFuP2c6Go8H/9pIOUmv41CdsVVJzQL1ZY5q/Jt/mhn/soIIG8KMyywd0mzd3vXGmcZzXO4Q3ZBVDTTWlxS/XcEkj8yDfQJC5JzX3VV90hz1C9fBPvq1b07llmlFwajZrDd6R4w9HyZCzKnPm0nMbb10z7n8L/23gRw05oVaptTWO4q4N5RkXljrwlP/BcqD/LUTphsuyYAgUv7ohAMXpR1Cbd9PMO4ZUJgLjR8WMv/GHZohIs3Q/0hBEc4BNzNY0WyMJ+y38tAcx8InSVyOgufbokNViCzo9e/DBIsalKYTzR2f8kUb/NsRIiz2vu6x5WUxbdsKkSorFoZfBkO+3ibPEmGIysvFj+rkOdcONPYn0Xi95JPcUCuTmtSoMXLXopnp0lD1phBJ3EuJLinESSetI1VByEb0guZQixHL4sr20YcYZogd3i6kxe99Cc8ePxTHe2Yvbv4NWHFCLRAzckatmiytxwy9nXraMCJ51zFz73jsvBk7fT3fpKOCF0YVTIJa1n3c+xV6mIkUkuFm3GPxt9j/rWBiG82fVIK6IhqtBamzJb9Eguiqu9jYKSgrFIJrPj7yDQn0OQKmb+Gc5N7WSVPVrKmbxglEPspzeifziJXig0qdWzLzgRYn6X29/Qw3bgQSYpFnNDLcRL/WvPL4IambfIpmFSDEV4o8W3e75haCmQQDU2MrSsINRtEcj3ucJLo0TVI5AwrpVexBXEfZhD3pmRXOf/GWCNJa4Dv8Ir7XBPcjFc+iAYBjD+XoyyMatFAASx+mM8sJUwc8/GbrSDCjXZ16Tug==";
const _U = "1uZFkHeMYUc8wkjwDtcAobsI_2HKnAr80tEv2rR8X0pe7WVXREVcXLXrhIDebColJRSZ2hPwX1LA-xJRsrlc8fUtG2cPWjJenISpd95r3HpNFe6qkZ4C1p4Moo5yvowl5_5bzl3N4WO5nMraLG98cWiLdEu9OH_uwz075dGYsuk7mSxql0G-C8lgmhIi5MUobqwmWj05jF7mPRH2IjA2M3R8UjoAjiKDaWEMmeeTl6tI";
module.exports.config = {
	name: 'bing',
  version: '2.0.0',
  credits: 'cliff', //api by samir
  aliases: ['genpro'],
  description: '𝗗𝗔𝗟𝗟𝗘 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗆𝖺𝖽𝖾 𝖻𝗒 𝖢𝗅𝗂𝖿𝖿 𝖵𝗂𝗇𝖼𝖾𝗇𝗍 𝖳𝗈𝗋𝗋𝖾𝗏𝗂𝗅𝗅𝖺𝗌 𝗂𝗌 𝗎𝗌𝖾 𝗍𝗈 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝖾 𝖺𝗂 𝗉𝗂𝖼𝗍𝗎𝗋𝖾𝗌 𝗎𝗌𝗂𝗇𝗀 𝗍𝖾𝗑𝗍',
  role: 0
};

module.exports.run = async function ({ api, event, args }) {
	const keySearch = args.join(" ");
	const indexOfHyphen = keySearch.indexOf('-');
	const keySearchs = indexOfHyphen !== -1 ? keySearch.substr(0, indexOfHyphen).trim() : keySearch.trim();
	const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 4;

	try {
		const res = await axios.get(`https://api-dalle-gen.onrender.com/dalle3?auth_cookie_U=${_U}&auth_cookie_KievRPSSecAuth=${KievRPSSecAuth}&prompt=${encodeURIComponent(keySearchs)}`);
		const data = res.data.results.images;

		if (!data || data.length === 0) {
			api.sendMessage("No images found for the provided query.", event.threadID, event.messageID);
			return;
		}

		const imgData = [];
		for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
			const imgResponse = await axios.get(data[i].url, { responseType: 'arraybuffer' });
			const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
			await fs.outputFile(imgPath, imgResponse.data);
			imgData.push(fs.createReadStream(imgPath));
		}

		await api.sendMessage({
			attachment: imgData,
			body: `Here's your generated image`
		}, event.threadID, event.messageID);

	} catch (error) {
		console.error(error);
		api.sendMessage("cookie of the command. Is expired", event.threadID, event.messageID);
	} finally {
		await fs.remove(path.join(__dirname, 'cache'));
	}
};
