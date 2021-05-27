module.exports = {
    name: 'queue',
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Show current queue',
    async execute(message, args, cmd, client, Discord) {
        let queue = client.distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 10).join("\n"));
    }
}