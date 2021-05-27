module.exports = {
    name: 'volume',
    aliases: ['vol'],
    permissions: [],
    cooldown: 0,
    description: 'Change volume',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('Trebuie sa te afli intr-un canal de voce pentru a reda muzica.');
        if (client.voiceChannel && client.voiceChannel != message.member.voice.channel) return message.reply("deja canta in alta parte");

        client.distube.setVolume(message, parseInt(args[0]));
    }
}