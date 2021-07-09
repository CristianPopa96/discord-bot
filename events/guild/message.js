require('dotenv').config();

const cooldowns = new Map();

module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (![process.env.COMMANDS_CHANNEL_ID].includes(message.channel.name) && message.guild != null) {
        message.reply('ai voie sa scrii comenzi doar pe canalele de text "comenzi" sau printr-un DM.').then(msg => {
            setTimeout(() => {
                msg.delete();
                message.delete();
            }, 10000);
        });
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    //PERMISSIONS
    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]
    
    if (command.permissions.length) {
        if (message.guild == null) return message.reply("Comenzile de moderator nu pot fi scrise in privat.");
        let invalidPerms = [];
        for (const perm of command.permissions) {
            if (!validPermissions.includes(perm)) return console.log(`permisiuni invalide ${perm}`);
            if (!message.member.hasPermission(perm)) invalidPerms.push(perm);
        }
        if (invalidPerms.length) {
            return message.channel.send(`Iti lipsesc urmatoarele permisiuni: \`${invalidPerms}\``);
        }
    }
    
    // COOLDOWNS
    if (!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;
            return message.reply(`Mai ai de asteptat ${time_left.toFixed(1)} secunde pana ai voie sa folosesti ${command.name}`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try {
        command.execute(message, args, cmd, client, Discord); 
    } catch (err) {
        message.reply("a existat o eroare.");
        console.log(err);
    }
}