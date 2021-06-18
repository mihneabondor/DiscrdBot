module.exports = {
    name: 'help',
    description: 'Embeds!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Help menu')
            .setImage('https://res.cloudinary.com/teepublic/image/private/s--HGbL8iJo--/t_Preview/b_rgb:f4b83a,c_limit,f_jpg,h_630,q_90,w_630/v1460693080/production/designs/478567_1.jpg')
            .setDescription('The prefix is "+". The available commands at this moment are:')
            .addFields(
                { name: 'Help', value: 'Displays the help menu' },
                { name: 'Clear', value: 'Clears a specified amount of messages' },
                { name: 'Kick', value: 'Kicks a specified member' },
                { name: 'Ban', value: 'Bans a specified member' },
                { name: 'Mute', value: 'Mutes someone in a text channel (optional timer)' },
                { name: 'Unmute', value: 'Obvious' },
                { name: 'Ping', value: "Tests bot's connection" },
                {name: 'Play', value: 'Plays a song in a voice channel'}
            )
            .setFooter('More coming soon!')

        message.channel.send(newEmbed);
    }
}