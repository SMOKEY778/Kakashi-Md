const { command, isPrivate } = require("../lib");
const fs = require("fs");
const yts  = require("yt-search");
const ytdl = require('ytdl-core');
const config = require('../config.js');
const { FancyRandom, jslbuffer } = require('abu-bot');

const image = "https://i.imgur.com/oJnmrH5.jpeg";
const image_1 = "https://i.imgur.com/oJnmrH5.jpeg";
const audios = "https://i.imgur.com/oJnmrH5.jpeg";

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
const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
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
    //fn
    const dMp3 = async (Link ) => {
    	try{
    		await ytdl.getInfo(Link);
    		let mp3File = getRandom('.mp3') 
    		ytdl(Link, {filter: 'audioonly'})
    		.pipe(fs.createWriteStream(mp3File))
    		.on("finish", async () => {  
    			await message.sendMessage(
          fs.readFileSync(mp3File),
          { mimetype: "audio/mpeg", quoted: hehe },
          "audio"
        );
        fs.unlinkSync(mp3File)
        })       
        } catch (err){
//console.log(err)
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
