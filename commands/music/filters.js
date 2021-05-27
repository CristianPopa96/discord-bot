module.exports = {
    name: '3d',
    aliases: ['bassboost', 'echo', 'karaoke', 'nightcore', 'vaporwave'],
    permissions: [],
    cooldown: 0,
    description: 'Add filter to music',
    async execute(message, args, cmd, client, Discord) {
        let filter = client.distube.setFilter(message, cmd);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
}