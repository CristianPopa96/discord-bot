module.exports = {
    name: 'help',
    aliases: ['h', 'ajutor'],
    cooldown: 0,
    description: 'Help command',
    execute(message, arg, cmd, client, Discord) {
        
        const embed = new Discord.MessageEmbed({
            title: "Help commands.",
            color: 0xFF0000,
            description: "lista de comenzi"
        });

        message.author.send(embed);
    }
}