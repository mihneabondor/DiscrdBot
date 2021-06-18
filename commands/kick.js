module.exports = {
    name: 'kick',
    description: 'this command kicks someone',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member) {
            if (message.member.permissions.has('KICK_MEMBERS')) {
                const memberTarget = message.guild.members.cache.get(member.id)
                memberTarget.kick();
                message.channel.send("User has been kicked");
            } else message.channel.send("Insufficient permissions");
        } else message.channel.send("couldn't find that member");
    }
}