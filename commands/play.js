module.exports = {
    name: 'play',
    aliases: ['p', 'skip', 'stop', 'repeat', 'loop', 'queue', '3d', 'bassboost', 'echo', 'karaoke', 'nightcore', 'vaporwave'],
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(message, args, cmd, client, Discord) {

        if (cmd == "play" || cmd == "p")
            client.distube.play(message, args.join(" "));

        if (["repeat", "loop"].includes(cmd))
            client.distube.setRepeatMode(message, parseInt(args[0]));

        if (cmd == "stop") {
            client.distube.stop(message);
            message.channel.send("Stopped the music!");
        }

        if (cmd == "skip")
            client.distube.skip(message);

        if (cmd == "queue") {
            let queue = client.distube.getQueue(message);
            message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 10).join("\n"));
        }

        if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(cmd)) {
            let filter = client.distube.setFilter(message, cmd);
            message.channel.send("Current queue filter: " + (filter || "Off"));
        }
       
    }
    
}