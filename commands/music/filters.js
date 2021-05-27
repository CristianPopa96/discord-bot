module.exports = {
    name: '3d',
    aliases: ['bassboost', 'echo', 'karaoke', 'nightcore', 'vaporwave'],
    permissions: [],
    cooldown: 0,
    description: 'Add filter to music',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('Trebuie sa te afli intr-un canal de voce pentru a reda muzica.');
        if (client.voiceChannel && client.voiceChannel != message.member.voice.channel) return message.reply("deja canta in alta parte");

        let filter = client.distube.setFilter(message, cmd);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
}