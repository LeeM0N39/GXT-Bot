const{ Client } = require('discord.js')

const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.username} has logged on`)
})

client.login('NzcyNDI4NzE2MTA1NzkzNTg3.X56iTA.-8aVQ9V4abo0pvY7Z_kpl-30V0k')