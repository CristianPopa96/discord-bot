module.exports = {
    name: 'play',
    aliases: ['p'],
    permissions: [],
    cooldown: 0,
    description: 'Play / add music',
    async execute(message, args, cmd, client, Discord) {
        client.distube.play(message, args.join(" "));
    }
    
}