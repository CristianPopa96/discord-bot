module.exports = {
    name: 'stop',
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Stop the music',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('Trebuie sa te afli intr-un canal de voce pentru a reda muzica.');
        if (client.voiceChannel && client.voiceChannel != message.member.voice.channel) return message.reply("deja canta in alta parte");

        client.distube.stop(message);
        client.voiceChannel = null;
        message.channel.send("Stopped the music!");
    }
}