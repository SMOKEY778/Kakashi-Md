const {command} = require ("../lib")

command(
        {
           pattern: 'alive ?(.*)',
           fromMe: true,
           desc: 'alive message',
           type: 'mics',
        },
        async (message,match) => {
     let user = `${message.pushName}` 	
        
await message.reply(`Hi I Am Alive`)
}
)
