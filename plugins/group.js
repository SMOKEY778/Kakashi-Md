
const config = require("../config");
const { command, isPrivate, errorMessage } = require("../lib/");
const { isAdmin, parsedJid, isUrl, isPublic } = require("../lib");
const { cron, saveSchedule } = require("../lib/scheduler");
command(
  {
    pattern: "add",
    fromMe: isPublic,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply("Mention A Member Or Admin To Add");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply("Kakashi Bot Is Not A Admin");
    let jid = parsedJid(match);
    await message.add(jid);
    return await message.reply(`@${jid[0].split("@")[0]} added`, {
      mentions: jid,
    });
  }
);

command(
  {
    pattern: "kick",
    fromMe: true,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply("Mention A Member Or Admin To Kick");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply("Kakashi Bot Is Not A Admin");
    let jid = parsedJid(match);
    await message.kick(jid);
    return await message.reply(`@${jid[0].split("@")[0]} Your Kicked`, {
      mentions: jid,
    });
  }
);

command(
  { 
    pattern: "invite", 
    fromMe: isPrivate, 
    type: "group",
  },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage(config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage(config.reply.group) }, { quoted: message } ); };
    try {
        const code = await client.groupInviteCode(message.from);
        await client.sendMessage( message.from, { text: `https://chat.whatsapp.com/${code}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
    }
  );

command(
  {
    pattern: "promote",
    fromMe: isPrivate,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply("Mention A Member Or Admin To Promote);
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply("Kakashi Bot Is Not A Admin");
    let jid = parsedJid(match);
    await message.promote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} Is Now An Admin`, {
      mentions: jid,
    });
  }
);

command(
  {
    pattern: "demote",
    fromMe: isPrivate,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply("Mention A Member Or Admin To Demote");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply("Kakashi Bot Is Not A Admin");
    let jid = parsedJid(match);
    await message.demote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} Is Now Not An Admin`, {
      mentions: jid,
    });
  }
);

command(
  {
    pattern: "mute",
    fromMe: isPublic,
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("Kakashi Bot Is Not A Admin");
    await message.reply("*Muting*");
    return await client.groupSettingUpdate(message.jid, "announcement");
  }
);

command(
  {
    pattern: "unmute",
    fromMe: isPublic,
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("Kakashi Bot Is Not A Admin");
    await message.reply("*Unmuting*");
    return await client.groupSettingUpdate(message.jid, "not_announcement");
  }
);

command(
  {
    pattern: "gjid ?(.*)",
    fromMe: true,
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply("This Feature Is Only For Group");
    let { participants } = await client.groupMetadata(message.jid);
    let participant = participants.map((u) => u.id);
    let str = "╭──〔 *Group Jids* 〕\n";
    participant.forEach((result) => {
      str += `├ *${result}*\n`;
    });
    str += `╰──────────────`;
    message.reply(str);
  }
);

command(
  {
    pattern: "tagall ?(.*)",
    fromMe: isPublic,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    const { participants } = await message.client.groupMetadata(message.jid);
    let teks = "";
    for (let mem of participants) {
      teks += ` @${mem.id.split("@")[0]}\n`;
    }
    message.sendMessage(teks.trim(), {
      mentions: participants.map((a) => a.id),
    });
  }
);
