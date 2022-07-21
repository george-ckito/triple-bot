const { MessageEmbed } = require('discord.js');
const economy = require('@util/economy')
const config = require('@root/config.json')
module.exports = {
    name: 'steal',
    aliases: ['rob'],
    cooldown: '7m',
    expectedArgs: "person",
    category: 'Economy',
    slash: 'both',
    options: [
        {
        name: 'target',
        description: 'Target user',
        type: 'USER'
      }],
    testOnly: true,
    description: 'Steal from someone!',
    callback: async ({guild, member, user, interaction, message, channel, args, text, client, prefix, instance}) => {
    
 if(message){   
   const randomIncome = Math.floor(Math.random() * 30000) + 5000;
        const targetId = args[0].replace('<@>', '')
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];
        const coinsOwned = await economy.getCoins(message.guild.id, targetId)

        const remainingCoins = await economy.addCoins(
            message.guild.id,
            targetId,
            randomIncome * -1
          )
        const newBalance = await economy.addCoins(message.guild.id, message.author.id, randomIncome)
        const embed = new MessageEmbed()
        .setTitle('Steal')
        .setColor(randomColor)
        .addField('Target:', `${targetId}`, true)
        .addField('Stolen coins', `${randomIncome}`, true)
        .addField('You now have:', `${newBalance}`, false)
        .setThumbnail(message.author.avatarURL())
        message.reply({embeds: [embed]})
      } else if(interaction) {
        const randomIncome = Math.floor(Math.random() * 30000) + 5000;
        const target = interaction.options.getUser('target');
        const targetId = target.id;
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];


        const remainingCoins = await economy.addCoins(
            guild.id,
            targetId,
            randomIncome * -1
          )
        const newBalance = await economy.addCoins(guild.id, user.id, randomIncome)
        const embed = new MessageEmbed()
        .setTitle('Steal')
        .setColor(randomColor)
        .addField('Target:', `${targetId}`, true)
        .addField('Stolen coins', `${randomIncome}`, true)
        .addField('You now have:', `${newBalance}`, false)
        .setThumbnail(user.avatarURL())
        interaction.reply({embeds: [embed]})
      }

    }
}