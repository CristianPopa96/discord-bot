const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login('ODQ1NDQxNzIyNTQzNzY3NTcz.YKhA9g.s5gZWdORDr73FPFpZQOMnxlFvlk');