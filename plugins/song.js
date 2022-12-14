const { command, isPrivate } = require("../lib");
const fs = require("fs");
const yts  = require("yt-search");
const ytdl = require('ytdl-core');
const config = require('../config.js');

const getRandom = (text) => {
    return `${Math.floor(Math.random() * 10000)}${text}`
}
const mYtId = (query) => {
const ytIdRegex =
	/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let yturlm = query.match(ytIdRegex)
  return yturlm
}


command(
  {
    pattern: "song",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
  
  hehe = {
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
						"jpegThumbnail": image2
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

    await message.reply("Please Wait");
    match = match || message.reply_message.text;
    if (!match) return await message.reply("_Enter A Song Name_");
    const dMp3 = async (Link ) => {
    	try{
    		await ytdl.getInfo(Link);
    		let mp3File = getRandom('.mp3') 
    		ytdl(Link, {filter: 'audioonly'})
    		.pipe(fs.createWriteStream(mp3File))
    		.on("finish", async () => {  
    			await message.sendMessage(message.jid, {
          fs.readFileSync(mp3File),
          { mimetype: "audio/mpeg" },
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
			}, { quoted: hehe }
		)	
	}
);
        fs.unlinkSync(mp3File)
        })       
        } catch (err){
}
}
var songId = await mYtId(match)
if (songId !== null){
	let Link = 'https://youtu.be/' + songId[1]
	dMp3(Link)
	} else {
		let search = await yts(match)  
		dMp3(search.all[0].url)
	}
}
);
