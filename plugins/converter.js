const {
    command, isPrivate
} = require('../lib/');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
command({
    pattern: 'mp3 ?(.*)',
    fromMe: isPrivate,
    type: 'edit',
    desc: 'Convert Video/Vn To Audio'
}, (async (message, match) => {
    if (message.reply_message === false) return await message.reply(`Reply To Video Or Voice Note`)
    var {seconds} = message.quoted.message[Object.keys(message.quoted.message)[0]];
    if (seconds>120) await message.reply(`_Alert: Duration more than 2 mins. This process may fail or take much more time!_`)
    var savedFile = await message.reply_message.download();
    ffmpeg(savedFile)
        .save('./temp/tomp3.mp3')
        .on('end', async () => {
            await message.client.sendMessage(message.jid, {
                audio: fs.readFileSync('./tomp3.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message.quoted
            })
        });
}));

command({
    pattern: 'photo ?(.*)',
    fromMe: isPrivate,
    type: 'edit',
    desc: 'Convert Sticker To Photo'
}, (async (message, match) => {
    if (message.reply_message === false) return await message.send(`Reply To Sticker`)
        var savedFile = await message.reply_message.download();
        ffmpeg(savedFile)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
                await message.reply(fs.readFileSync('output.png'), 'image');
            });

}));
