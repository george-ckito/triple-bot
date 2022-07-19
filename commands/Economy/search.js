const { MessageEmbed } = require('discord.js');
const { addCoins } = require('@util/economy')

module.exports = {
    name: 'search',
    cooldown: '40s',
    category: 'Economy',
    slash: 'both',
    testOnly: true,
    description: "Search for coins",
    callback: async ({guild, member, user, interaction, message, channel, args, text, client, prefix, instance}) => {
        if (message) {
        let server = await guild.id
        const randomIncome = Math.floor(Math.random() * 1000) + 1;
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];
        addCoins(guild.id, user.id, randomIncome)
        const begEmbed = new MessageEmbed()
        .setTitle("Searching Center")
        .setColor(randomColor)
        .addField("Cool!! You found " + randomIncome + " coins For you.", '\u200b', false)
        .setFooter({ text: 'new cool searcher??'});
        message.reply({ embeds: [begEmbed] });
    } else if(interaction) {
        const randomIncome = Math.floor(Math.random() * 1000) + 1;
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];
        addCoins(guild.id, user.id, randomIncome)
        const begEmbed = new MessageEmbed()
        .setTitle("Searching Center")
        .setColor(randomColor)
        .addField("Cool!! You found " + randomIncome + " coins For you.", '\u200b', false)
        .setFooter({ text: 'new cool searcher??'});
        interaction.reply({ embeds: [begEmbed] });
    }
    },
}