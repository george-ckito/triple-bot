const { MessageEmbed } = require('discord.js')
const economy = require('@util/economy')

module.exports = {
  name: 'pay',
  minArgs: 2,
  maxArgs: 2,
  description: 'Pay someone!',
  category: 'Economy',
  slash: 'both',
  options: [
    {
    name: 'target',
    description: 'Target user',
    type: 'USER'
  }, {
    name: 'coins',
    description: 'Amount of coins',
    type: 'NUMBER'

  }],
  testOnly: true,
  expectedArgs: "<Target user's @> <Amount of coins>",
  callback: async ({member, user, interaction, message, channel, args, text, client, prefix, instance, guild}) => {
if (message) {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to give coins to.')
      return
    }

    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`You do not have ${coinsToGive} coins!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)
    const embed = new MessageEmbed()
    .setTitle('Pay')
    .setColor('DARK_RED')
    .addField('User', `<@${target.id}>`, true)
    .addField('Given coins', `${coinsToGive}`, true)
    .addField('They Have:', `${newBalance}`, false)
    .addField('You have:', `${remainingCoins}`, true)
    .setThumbnail(message.author.avatarURL())
    message.reply({embeds: [embed]})
  } else if(interaction) {
    const target = interaction.options.getUser('target');
    if (!target) {
      interaction.reply('Please specify someone to give coins to.')
      return
    }

    const coinsToGive = interaction.options.getNumber('coins');
    if (isNaN(coinsToGive)) {
     interaction.reply('Please provide a valid number of coins to give.')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      interaction.reply(`You do not have ${coinsToGive} coins!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)
    const embed = new MessageEmbed()
    .setTitle('Pay')
    .setColor('DARK_RED')
    .addField('User', `<@${target.id}>`, true)
    .addField('Given coins', `${coinsToGive}`, true)
    .addField('They Have:', `${newBalance}`, false)
    .addField('You have:', `${remainingCoins}`, true)
    .setThumbnail(user.avatarURL())
    interaction.reply({embeds: [embed]})
  }
  },
}