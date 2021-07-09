require('dotenv').config();
const animeImages = require('anime-images-api');
const api = new animeImages();

module.exports = {
    name: 'hug',
    aliases: ['slap', 'wink', 'pat', 'kill'],
    permissions: [],
    cooldown: 0,
    description: "Trimite o reactie la alt membru sub forma de gif",
    async execute(message, args, cmd, client, Discord) {
        let defaultPhrase = "";
        let phrase = "";
        let image;
        if (cmd === 'hug') {
            defaultPhrase = "thanks for the hug!";
            phrase = "a hug from";
            await api.sfw.hug().then(response => { image = response.image; });
        }
        if (cmd === 'slap') {
            defaultPhrase = "that hurt!!!";
            phrase = "a slap from";
            await api.sfw.slap().then(response => { image = response.image; });
        }
        if (cmd === 'wink') {
            defaultPhrase = "thanks for the wink!";
            phrase = "a wink from";
            await api.sfw.wink().then(response => { image = response.image; });
        }
        if (cmd === 'pat') {
            defaultPhrase = "thanks for the pat!";
            phrase = "a pat from";
            await api.sfw.pat().then(response => { image = response.image; });
        }
        if (cmd === 'kill') {
            defaultPhrase = "why are you so mean?!";
            phrase = "killed by";
            await api.sfw.kill().then(response => { image = response.image; });
        }

        if (!args[0]) return message.reply(`${defaultPhrase}` + "\n" + image);

        const member = message.mentions.users.first();

        if (member) {
            message.channel.send(member.username);
        } else {
            message.reply("nu exista acest utilizator.");
        }
    }
}