module.exports = {
    name: 'hopa',
    aliases: ['p', 'pg'],
    description: "ping command.",
    execute(message, args, cmd, client, Discord, Distube) {
        message.channel.send('pong!');
    }
}