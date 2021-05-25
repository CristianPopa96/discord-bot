require('dotenv').config();

module.exports = (Discord, client, guildMember) => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === process.env.WELCOME_ROLE);

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID).send(`<@${guildMember.user.id}> a intrat pe canal`);

    const embed = new Discord.MessageEmbed({
        title: "Bine ai venit pe canalul de discord LSAC",
        color: 0xFF0000,
        description: `Nu uita sa verifici sectiunea de ${guildMember.guild.channels.cache.get('846827158763864064').toString()}`
    });

    guildMember.send(embed);
}