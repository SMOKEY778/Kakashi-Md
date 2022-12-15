const axios = require('axios');
const { tlang,command } = require('../lib')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
command(
  {
    pattern: "updatenow ?(.*)",
    fromMe: true,
    desc: "Update To The Latest Version.",
    type: "update",
  },
  async (message, match) => {
       let check = await get_deployments()
       if(check==='true') return message.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await redeploy();
       return message.reply(data)
  });
//----------------------------------------------------------------------------------------------------------------------------------------------------
command(
  {
    pattern: "getvar ?(.*)",
    fromMe: true,
    desc: "Get Desired Var From Koyeb.",
    type: "update",
  },
  async (message, match) => {
       if(!text) return message.reply('Please Provide Api Key.\n_Eg: .Getvar SUDO_')
       let data = await getvar(match);
       return message.reply(data)
  });
//----------------------------------------------------------------------------------------------------------------------------------------------------
command(
  {
    pattern: "getallvar ?(.*)",
    fromMe: true,
    desc: "Get All The Desired Var From Koyeb.",
    type: "update",
  },
  async (message, match) => {
       let data = await getallvar();
       return message.reply(data)
  });
//----------------------------------------------------------------------------------------------------------------------------------------------------
command(
  {
    pattern: "setvar ?(.*)",
    fromMe: true,
    desc: "Change Or Set Var In Koyeb.",
    type: "update",
  },
  async (message, match) => {
       if(!match.split(':')[1]) return message.reply('*Wrong Format.*\nPlease provide api key and value.\n_Eg: .setvar SUDO:916380260672_')
       let check = await get_deployments()
       if(check==='true') return message.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await change_env(match)
       return message.reply(data)
  });

//----------------------------------------------------------------------------------------------------------------------------------------------------
command(
  {
    pattern: "delvar ?(.*)",
    fromMe: true,
    desc: "Del Var In Koyeb.",
    type: "update",
  },
  async (message, match) => {
       if(!match) return message.reply('Please provide api key.\n_Eg: .delvar SUDO_')
       let check = await get_deployments()
       if(check==='true') return message.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await delvar(match)
       return message.reply(data)
  });
