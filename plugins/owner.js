const {command, isPrivate} = require('../lib');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const { FancyRandom, jslbuffer } = require('abu-bot');

const image = "https://i.imgur.com/oJnmrH5.jpeg";
const image_1 = "https://i.imgur.com/oJnmrH5.jpeg";
const audios = "https://i.imgur.com/oJnmrH5.jpeg";

command(  {
    pattern: "owner ?(.*)",
    fromMe: isPrivate,
    desc: "owner number",
    type: "creator",
  },
  async (message, match, msg) => {

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

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:TurboMods\n' // full name
            + 'ORG:TurboMods;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=916380260672:+91 6380 260 672\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(
    message.jid,
    { 
        hehe, contacts: { 
            displayName: 'TurboMods', 
            contacts: [{ vcard }],
    }
  }
);
}
)
