module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args) {
        if (!args[0]) return message.reply('enter the amount of messages you want to clear');
        if (isNaN(args[0])) return message.reply('funny.. enter a real number');
        if (args[0] > 100) return message.reply("I can't delete more than 100 messages");
        if (args[0] < 1) return message.reply("you need to delete at least 1 message");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => { message.channel.bulkDelete(messages); });
    }
}