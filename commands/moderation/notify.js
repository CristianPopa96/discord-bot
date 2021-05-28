require('dotenv').config();

module.exports = {
    name: 'anunt',
    aliases: ['notify'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 5,
    description: "Anunta voluntari printr-un mesaj privat",
    execute(message, args, cmd, client, Discord) {
        message.guild.members.cache.forEach(member => {
            if (member.id != message.author.id && !member.user.bot) member.send(`MESAJ IMPORTANT PE ${message.guild.channels.cache.get(process.env.RULES_CHANNEL_ID).toString()}`);
        });;
    }
}