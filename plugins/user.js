const { command } = require("../lib");

command(
  {
    pattern: "setpp ",
    fromMe: true,
    desc: "Set profile picture",
    type: "user",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply to a photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("_Profile Picture Updated_");
  }
);

command(
  {
    pattern: "setname ?(.*)",
    fromMe: true,
    desc: "Set User name",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter name_");
    await message.updateName(match);
    return await message.reply(`_Username Updated : ${match}_`);
  }
);

command(
  {
    pattern: "setbio ?(.*)",
    fromMe: true,
    desc: "To change your profile status",
    type: "user",
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.reply("_Need Status!_\n_Example: setbio Hey there! I am using WhatsApp._");
    await message.updateBio(match);
    return await message.reply("_Profile status updated_");
  }
);

command(
  {
    pattern: "block ?(.*)",
    fromMe: true,
    desc: "Block a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.sendMessageMessage(`_@${jid.split("@")[0]} Blocked_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User blocked_");
    }
  }
);

command(
  {
    pattern: "unblock ?(.*)",
    fromMe: true,
    desc: "Unblock a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.sendMessage(`_@${jid.split("@")[0]} unblocked_`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("_User unblocked_");
    }
  }
);

command(
  {
    pattern: "jid ?(.*)",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

command(
  {
    pattern: "react ?(.*)",
    fromMe: true,
    desc: "sends reaction",
    type: "user" ,
  },
  async (message, match) => {
   await message.react(
     match, message.reply_message.key
   );
  }
);

command(
  {
    pattern: "pin ?(.*)",
    fromMe: true,
    desc: "Pin a chat",
    type: "whatsapp",
  },
  async (message, match) => {
    await message.pinChat(message.jid, true)
    await message.reply("_Pined_");
  }
);

command(
  {
    pattern: "unpin ?(.*)",
    fromMe: true,
    desc: "Unpin a chat",
    type: "whatsapp",
  },
  async (message, match) => {
    await message.pinChat(message.jid, false)
    await message.reply("_Unpined_");
  }
);

command(
  {
    pattern: "archive ?(.*)",
    fromMe: true,
    desc: "Archive a chat",
    type: "whatsapp",
  },
  async (message, match) => {
    await message.archiveChat(message.jid, true)
    await message.reply("_Archived_")
  }
);

command(
  {
    pattern: "unarchive ?(.*)",
    fromMe: true,
    desc: "Unarchive a chat",
    type: "whatsapp",
  },
  async (message, match) => {
    await message.archiveChat(message.jid, false)
    await message.reply("_Unarchived_")
  }
);


command(
  {
    pattern: "dlt ?(.*)",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
  },
  async (message, match,m,client) => {
    if (message.isGroup) {
      client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);

command(
  {
    pattern: "fullpp ?(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match,m,client) => {
      let buff = await m.quoted.download();
      await updateProfilePicture(message.client, message.client.user.id,buff);
  }
);
