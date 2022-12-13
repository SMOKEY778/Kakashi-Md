const events = require("../lib/event");
const {
  command,
  isPublic,
  tiny,
  clockString,
  handler 
} = require("../lib");
const { FancyRandom, jslbuffer } = require('abu-bot');
const { OWNER_NAME, BOT_NAME,SUDO } = require("../config");


const image = "https://i.imgur.com/oJnmrH5.jpeg";
const image_1 = "https://i.imgur.com/oJnmrH5.jpeg";
const audios = "https://i.imgur.com/oJnmrH5.jpeg";

command
	(
		{
			pattern: "alive?(.*)",
                        react: "🇮🇳",
			fromMe: isPublic,
			type: "menu",
		},
		async (message, match) => {
  var ut_sec = require("os").uptime(); 
  var ut_min = ut_sec/60; 
  var ut_hour = ut_min/60; 
  ut_sec = Math.floor(ut_sec); 
  ut_min = Math.floor(ut_min); 
  ut_hour = Math.floor(ut_hour); 
  ut_hour = ut_hour%60; 
  ut_min = ut_min%60; 
  ut_sec = ut_sec%60; 
  var uptime_os = (`_System (OS) : ${ut_hour} Hour(s), ${ut_min} minute(s) and ${ut_sec} second(s)_`)  
  var sec_num = parseInt(process.uptime(), 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  var uptime_process = (`${hours} Hour(s), ${minutes} minute(s) and ${seconds} second(s)_`)
  const image1 = await Turbobuffer(image)
  const image2 = await Turbobuffer(image_1)
  const audio = await Turbobuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu = `Hi 🤚 ${message.pushName}
How Are You? 😊
╭─⬣「 INFO BOT 」⬣
│
│ Rᴜɴᴛɪᴍᴇ : ${uptime_process}
│ Bᴏᴛ Nᴀᴍᴇ : ${BOT_NAME}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${OWNER_NAME}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${SUDO}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${hostname().split("-")[0]}
╰─⬣
Please Select Button Below`;
    return await message.client.sendMessage(message.jid, {
      image: { url: 'https://i.imgur.com/oJnmrH5.jpeg' },
      caption: menu,
      footer: "*Kakashi Md*",
      buttons: [
        {buttonId: '.list', buttonText: {displayText: 'MENU'}},
      {buttonId: '.ping', buttonText: {displayText: 'PING'}},{buttonId: '.git', buttonText: {displayText: 'GIT'}}
    ],
			contextInfo: {
				externalAdReply: {
					title: "Kakashi-Md",
					body: "Made By TurboMods",
					mediaType: 2,
					thumbnail: image2,
					mediaUrl: 'https://www.instagram.com/',
					sourceUrl: 'https://github.com/TURBOHYPER/Kakashi-Md',
					showAdAttribution:true
					}
				}
			}, { quoted: message }
		)	
	}
);
