module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    permissions: [],
    cooldown: 0,
    description: 'Loop current song',
    async execute(message, args, cmd, client, Discord) {
        client.distube.setRepeatMode(message, parseInt(args[0]));
    }
}