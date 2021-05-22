module.exports = {
    name: 'yt',
    // aliases: [''],
    description: "yt link",
    execute(message, args, cmd, client, Discord) {

        if (message.member.roles.cache.has('845628117929558017')) {
            message.channel.send('yt link!');
        } else {
            message.channel.send('nu e voie!');
        }
    }
}