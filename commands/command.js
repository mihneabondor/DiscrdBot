module.exports = {
    name: 'command',
    description: 'Embeds!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Rules')
            .setURL('https://youtube.com')
            .setDescription('This is an embed for server rules')
            .addFields(
                { name: 'Rule 1', value: 'Be nice' },
                { name: 'Rule 2', value: 'No spam' },
        )
            .setImage('https://www.vets4pets.com/globalassets/close-up-of-cat-looking-up.jpg?w=585&scale=down')
            .setFooter('hi')

        message.channel.send(newEmbed);
    }
}