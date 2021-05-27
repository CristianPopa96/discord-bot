module.exports = {
    name: 'stop',
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Stop the music',
    async execute(message, args, cmd, client, Discord) {
        client.distube.stop(message);
        message.channel.send("Stopped the music!");
    }
}