const axios = require('axios');

module.exports.config = {
  name: "share",
  version: "1.0",
  hasPermssion: 0,
  credits: "Tite",
  usePrefix: true,
  description: "Share a post on Facebook",
  commandCategory: "Social",
  cooldowns: 0
};

// Start Execution
module.exports.run = async ({ api, event, args }) => {
try {
    const url = args[0];
    const amount = args[1]
  if(!url || !amount) {
api.sendMessage(`🔴 | {pref}[nameofcmd] [token] [url] [amount]`, event.threadID, event.messageID);
return;
  }
const res = await axios.get(`https://share-api.onrender.com/share?accessToken=[
    {
        "key": "dbln",
        "value": "%7B%2261554477484911%22%3A%22YVL5lncA%22%2C%2261554763900614%22%3A%22tbOobKyK%22%7D",
        "domain": "facebook.com",
        "path": "/login/device-based/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "sb",
        "value": "YsN4ZYB_hWUHgERp2xZNQZ_z",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "ps_n",
        "value": "0",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "ps_l",
        "value": "0",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "datr",
        "value": "z-S1ZUHsLXHkMNJD_TCDljBU",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "vpd",
        "value": "v1%3B640x360x3",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "dpr",
        "value": "3.2983407974243164",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "locale",
        "value": "fr_FR",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "zsh",
        "value": "ASQZRChjydjPDSz-4hMeaoV81plSZaw0p-FExrj3czdRsTpD9fPsUr0C4hBPwtkXRIlTMLddY_o_AtysIYiQCAwklVj2sVR_u-4_52Rh3pSILheLqPoNWHyzQy26HifHq2UkhkbyqjD77FjGQJfxzONR6ceTwONN3A8ELu_dNwpeSuXvoEH0WwPD8JoUqJHehSNPasYEYlRb9vwlBoIKwkU9ZbzT18ph7cAlzBIlQHRIgHLvLeu31MNMHXngsjVHWEmvHW4t20SmZNnSU14KREfF8Ohg-iAyL7zVOFJKE-A-47OhLK0jqiO5fWJs0U9xhzVAwbFp_yHpDhei28nb",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "m_pixel_ratio",
        "value": "3",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "wd",
        "value": "360x640",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "fr",
        "value": "1XueDCStKpuufjLsy.AWWytEenkEz-CyCCWqnZZOkc2xI.Bl2ts8..AAA.0.0.Bl4hZA.AWXu5D3wfq0",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "c_user",
        "value": "61554477484911",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "xs",
        "value": "31%3AEM3H0F-O4zcPzQ%3A2%3A1709315648%3A-1%3A9665",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    },
    {
        "key": "wl_cbv",
        "value": "v2%3Bclient_version%3A2423%3Btimestamp%3A1709315651",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-03-01T17:54:28.142Z",
        "lastAccessed": "2024-03-01T17:54:28.142Z"
    }
]&shareUrl=${url}&shareAmount=${amount}`);
api.sendMessage(`Waiting for response!`, event.threadID, event.messageID);
    api.sendMessage(`${res.data.message}`, event.threadID);
  } catch (error) {
    api.sendMessage("Unable to boost because ${res.data.error}", event.threadID);
  }
}; 
