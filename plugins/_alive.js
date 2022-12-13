const events = require("../lib/event");
const {
  command,
  isPrivate,
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
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
test = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`,
			...(message.jid ? {
				remoteJid: `status@broadcast`
			} : {})
		},
		"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": '99999',
						"amount1000": '99999',
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Bro"
							}
						},
						"expiryTimestamp": global.fsx,
						"amount": {
							"value": '99999',
							"offset": '99999',
							"currencyCode": '99999'
						}
					}
				}
			}

test2 = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`,
			...(message.jid ? {
				remoteJid: `status@broadcast`
			} : {})
		},
		message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999999999999",
                 "ptt": "true"
			}
		}
	}

test3 = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`,
			...(message.jid ? {
				remoteJid: `status@broadcast`
			} : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./media/20221002_222728.jpg')
					},
					"title": 'Kakashi-Md',
					"description": 'Made By Turbo Mods', 
					"currencyCode": "USD",
					"priceAmount1000": "20000000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}


      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu = `Hi 🤚 ${message.pushName}
How Are You? 😊
╭─⬣「 INFO BOT 」⬣
│
│ Rᴜɴᴛɪᴍᴇ : 
│ Bᴏᴛ Nᴀᴍᴇ : Kakashi Md
│ Oᴡɴᴇʀ Nᴀᴍᴇ : TurboMods
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : 2347086086722
│ Hᴏꜱᴛ Nᴀᴍᴇ : Koyeb
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
			}, { quoted: test3 }
		)	
	}
);
