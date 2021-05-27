module.exports = {
    name: 'play',
    aliases: ['p'],
    permissions: [],
    cooldown: 0,
    description: 'Play / add music',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply("trebuie sa te afli intr-un canal de voce pentru a reda muzica.");
        if (client.voiceChannel && client.voiceChannel != message.member.voice.channel) return message.reply("deja canta in alta parte");
        
        client.distube.play(message, args.join(" "));
    }
    
}