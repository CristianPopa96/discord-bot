require('dotenv').config();

module.exports = {
    name: 'ping',
    aliases: ['pg'],
    permissions: [],
    cooldown: 5,
    description: "Ping command",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('pong!');
    }
}