module.exports = {
    name: 'queue',
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Show current queue',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('Trebuie sa te afli intr-un canal de voce pentru a reda muzica.');
        if (client.voiceChannel && client.voiceChannel != message.member.voice.channel) return message.reply("deja canta in alta parte");

        let queue = client.distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 10).join("\n"));
    }
}