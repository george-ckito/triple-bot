const { MessageEmbed } = require('discord.js');
const { addCoins } = require('@util/economy');

module.exports = {
    name: 'work',
    aliases: ['job'],
    cooldown: '2m',
    category: 'Economy',
    slash: 'both',
    testOnly: true,
    description: 'Work for some coins!',
    callback: async ({guild, member, user, interaction, message, channel, args, text, client, prefix, instance}) => {
if (message) {       
         const randomIncome = Math.floor(Math.random() * 30000) + 5000;
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];
        
        addCoins(guild.id, guild.id, randomIncome)

       const workEmbed = new MessageEmbed()
        .setColor(randomColor)
        .addField("You work and get " + randomIncome + " coins.", "\u200b")
        .setFooter({ text: "Nice!"});
 message.reply({ embeds: [workEmbed] });
} else if(interaction) {
    const randomIncome = Math.floor(Math.random() * 30000) + 5000;
    const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
    var randomColor = colors[Math.floor(Math.random()* colors.length)];
    
    addCoins(guild.id, user.id, randomIncome)

   const workEmbed = new MessageEmbed()
    .setColor(randomColor)
    .addField("You work and get " + randomIncome + " coins.", "\u200b")
    .setFooter({ text: "Nice!"});
interaction.reply({ embeds: [workEmbed] });
}
    }
}