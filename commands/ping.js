module.exports = {
    name: 'hopa',
    aliases: ['p', 'pg'],
    description: "ping command.",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('pong!');
        console.log(args);
    }
}