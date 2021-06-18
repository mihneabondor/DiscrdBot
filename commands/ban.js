module.exports = {
    name: 'ban',
    description: 'this command bans someone',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member) {
            if (message.member.permissions.has('BAN_MEMBERS')) {
                const memberTarget = message.guild.members.cache.get(member.id)
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else message.channel.send("Insufficient permissions");
        } else message.channel.send("couldn't find that member");
    }
}