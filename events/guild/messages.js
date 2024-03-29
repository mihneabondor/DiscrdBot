require('dotenv').config();
module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.fiend(a => a.aliases && a.aliases.includes(cmd));

    if (commmand) command.execute(client, message, args, Discord);
}