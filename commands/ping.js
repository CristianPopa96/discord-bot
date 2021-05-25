module.exports = {
    name: 'ping',
    aliases: ['pg'],
    cooldown: 5,
    description: "ping command.",
    execute(message, args, cmd, client, Discord, Distube) {
        message.channel.send('pong!');
    }
}