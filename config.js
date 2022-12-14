const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  LOGS: toBool(process.env.LOGS) || true,
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE_LOGO: process.env.ALIVE_LOGO || "https://i.imgur.com/4rRZ4c7.jpeg",
  SESSION_ID:process.env.SESSION_ID || "UV_KAKASHI_ZabmV_KAKASHI_YN0g=",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  LANG: process.env.LANG ||  'EN',
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || '5f85v198icekxva84kqkqv0lj24l1d2z45ied1qmxotcm0fcsq9y63lzk20ii4t3',
    KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || 'abstract-jenda',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
       },
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[.]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "Kakashi-Md",
  AUTHOR: process.env.AUTHOR || "TurboMods",
  DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
  BOT_INFO: process.env.BOT_INFO || 'Kakashi;TurboMods;0;https://i.imgur.com/4rRZ4c7.jpeg;https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp',
  SUDO: process.env.SUDO || "2347086086722",
  OWNER_NAME: process.env.OWNER_NAME || "TurboMods",
  BOT_NAME: process.env.BOT_NAME || "Kakashi",
  WORK_TYPE: process.env.WORK_TYPE || "private",
};
