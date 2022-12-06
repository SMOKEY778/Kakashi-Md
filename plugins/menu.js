const events = require("../lib/event");
const { command, isPrivate, tiny, serif_B, clockString } = require("../lib");
const { OWNER_NAME, BOT_NAME } = require("../config");
const { hostname, uptime } = require("os");
command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match) => {
    if (match) {
      for (let i of events.commands) {
        if (i.pattern.test(message.prefix + match))
          message.reply(
            `\`\`\`Command : ${message.prefix}${match.trim()}
Description : ${i.desc}\`\`\``
          );
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `╭━━━━━ᆫ ${BOT_NAME} ᄀ━━━
┃ ⎆  *OWNER* :  ${OWNER_NAME}
┃ ⎆  *PREFIX* : ${prefix}
┃ ⎆  *HOST NAME* :${hostname().split("-")[0]}
┃ ⎆  *DATE* : ${date}
┃ ⎆  *TIME* : ${time}
┃ ⎆  *COMMANDS* : ${events.commands.length} 
┃ ⎆  *UPTIME* : ${clockString(uptime())} 
╰━━━━━━━━━━━━━━━
╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n╽`;
      let cmnd = [];
      let cmd;
      let category = [];
      events.commands.map((command, num) => {
        if (command.pattern) {
          cmd = command.pattern
            .toString()
            .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
        }

        if (!command.dontAddCommandList && cmd !== undefined) {
          let type;
          if (!command.type) {
            type = "misc";
          } else {
            type = command.type.toLowerCase();
          }

          cmnd.push({ cmd, type: type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `
┃  ╭─────────────◆
┃  │ ⦿---- ${cmmd} ----⦿
┃  ╰┬────────────◆
┃  ┌┤`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }, num) => {
          menu += `\n┃  │ ⛥  ${cmd.trim()}`;
        });
        menu += `\n┃  ╰─────────────◆`;
      });

      menu += ` ╰━━━━━━━━━━━──⊷\n`;
      menu += `_🔖Send ${prefix}menu <command name> to get detailed information of specific command._\n*📍Eg:* _${prefix}menu plugin_`;
      return await message.client.sendMessage(message.jid, {
        image: { url: `https://i.imgur.com/4rRZ4c7.jpeg` },
        caption: menu,
        footer: tiny(
          `Kakashi Public Bot\nVersion : ${require("../package.json").version}`
        ), buttons: [
        {buttonId: '.list', buttonText: {displayText: 'MENU'}},
      {buttonId: '.ping', buttonText: {displayText: 'PING'}},{buttonId: '.git', buttonText: {displayText: 'GIT'}}
    ],
			contextInfo: {
				externalAdReply: {
					title: "Kakashi-Md",
					body: "Made By TurboMods",
					mediaType: 2,
					thumbnail: `fs.readFileSync('./media/20221002_222728.jpg')`,
					mediaUrl: 'https://www.instagram.com/',
					sourceUrl: 'https://github.com/TURBOHYPER/Kakashi-Md',
					showAdAttribution:true
					}
				}
			}, { quoted: message }
      });
    }
  }
);

command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let menu = `╭───〔 ${tiny("kakashi command list")} 〕────\n`;

    let cmnd = [];
    let cmd, desc;
    events.commands.map((command) => {
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }
      if (command.desc) {
        desc = command.desc;
      } else {
        desc = false;
      }
      if (!command.dontAddCommandList && cmd !== undefined) {
        cmnd.push({ cmd, desc });
      }
    });
    cmnd.sort();
    cmnd.forEach(({ cmd, desc }, num) => {
      menu += `├ ${(num += 1)} *${cmd.trim()}*\n`;
      if (desc) menu += `├ ${"use : " + desc}\n`;
    });
    menu += `╰──────────────────────────`;
    return await message.reply(menu);
  }
);