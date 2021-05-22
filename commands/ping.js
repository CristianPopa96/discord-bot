module.exports = {
    name: 'ping',
    description: "ping command.",
    execute(client, message, args, Discord) {
        message.channel.send('pong!');
    }
}