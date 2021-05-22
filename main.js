const Discord = require('discord.js');
const tokens = require('./tokens.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(tokens.botKey);