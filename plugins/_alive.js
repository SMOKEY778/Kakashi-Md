const events = require("../lib/utils");
const {
  command,
  isPublic,
  tiny,
  clockString,
  handler 
} = require("../lib");
const { FancyRandom, jslbuffer } = require('abu-bot');


const image = "https://i.imgur.com/oJnmrH5.jpeg";
const image_1 = "https://i.imgur.com/oJnmrH5.jpeg";
const audios = "https://i.imgur.com/oJnmrH5.jpeg";

command
	(
		{
			pattern: "alive?(.*)",
			fromMe: isPublic,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu = `
╭────⬡ 𝐀𝐋𝐈𝐕𝐄 𝐔𝐒𝐄𝐑 ────⬡
│   
│𒆜 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :- Kakashi-Md   
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 :- TurboMods
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 :- 916380260672
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ⬡───⬡──⬡
│𒆜 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌 : Koyeb
╰─⬡───⬡────────⬡───⬡──⬡`;
    return await message.client.sendMessage(message.jid, {
      image: { url: 'https://i.imgur.com/oJnmrH5.jpeg' },
      caption: ' *Kakashi Md* ',
      footer: menu,
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