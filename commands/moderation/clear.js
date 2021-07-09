require('dotenv').config();

module.exports = {
    name: 'clear',
    aliases: ['sterge'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: "Sterge un numar de mesaje anterior",
    async execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.reply("introdu numarul de mesaje pe care doresti sa le stergi.");
        if (isNaN(args[0])) return message.reply("nu ai introdus un numar.");
        if (args[0] > 100) return message.reply("ai voie sa stergi maxim 30 de mesaje.");
        if (args[0] < 1) return message.reply("valoarea introdusa este prea mica.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}