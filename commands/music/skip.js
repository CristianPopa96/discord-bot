module.exports = {
    name: 'skip',
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Skip current song',
    async execute(message, args, cmd, client, Discord) {
        client.distube.skip(message);
    }
}