module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === "Tester");

        //if (message.member.permissions.has('BAN_MEMBERS')) {
           // message.channel.send("You have permission to ban members");
       // } else {
          //  message.channel.send("You don't have the permission to ban members");
       // }


        //if (message.member.roles.cache.some(r => r.name === "Tester")) {
            message.channel.send('pong!');
       // } else {
          //  message.channel.send('Insufficient permissions, let me change that for you');
          //  message.member.roles.add(role);
       // }
    }
}