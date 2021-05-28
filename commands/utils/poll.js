require('dotenv').config();

module.exports = {
    name: 'poll',
    aliases: ['opinie'],
    permissions: [],
    cooldown: 0,
    description: "Generate a poll",
    execute(message, args, cmd, client, Discord, Distube) {
        const counter = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

        const newArgs = args.join(" ").split("\/");
        const mainText = newArgs.shift();
        let options = "";

        if (newArgs.length < 3) return message.reply("nu ai introdus suficienti parametrii pentru comanda");
        if (newArgs.length > 10) return message.reply("ai depasit limita de optiuni admisa pentru un poll.");

        for (let i = 0; i < newArgs.length; i++) {
            options += counter[i] + " " + newArgs[i] + "\n";
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(mainText)
        .setDescription(options);

        if (cmd == 'opinie') {
            client.channels.cache.find(channel => channel.id == process.env.POLL_CHANNEL_ID).send(embed).then(msgReact => {
                for (let i = 0; i < newArgs.length; i++) {
                    msgReact.react(counter[i]);
                }
                message.delete();
            });
        } else {
            message.channel.send(embed).then(msgReact => {
                for (let i = 0; i < newArgs.length; i++) {
                    msgReact.react(counter[i]);
                }
                message.delete();
            });
        }
    }
}