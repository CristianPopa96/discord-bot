require('dotenv').config();

module.exports = async(client) => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);

    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(process.env.MEMBER_COUNTER_CHANNEL_ID);

        channel.setName(`Voluntari pe server: ${memberCount.toLocaleString()}`);
    }, 600000);
}