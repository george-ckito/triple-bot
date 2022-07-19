const economy = require('@util/economy')

module.exports = {
  name: 'addbalance',
  aliases: ['addbal'],
  minArgs: 2,
  maxArgs: 2,
  description: 'Adds some money to users balance',
  expectedArgs: "<The target's @> <coin amount>",
  permissions: ['ADMINISTRATOR'],
  category: 'Economy',
  guildOnly: true,
  testOnly: true,
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
  callback: async ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) =>  {
    if(interaction) {
      try {
      const mention = interaction.options.getUser('target');


      if (!mention) {
        interaction.reply('Please tag a user to add coins to.')
        return
      }
  
      const coins = interaction.options.getNumber('coins');
      if (isNaN(coins)) {
        interaction.reply('Please provide a valid numnber of coins.')
        return
      } 
  
      const guildId = interaction.guild.id
      const userId = mention.id
  
      const newCoins = await economy.addCoins(guildId, userId, coins)
  
      interaction.reply(
        `You have given <@${userId}> ${coins} coin(s). They now have ${newCoins} coin(s)!`
      )} catch(err) {
        console.log(err)
      }
    }
    if (message){
      try {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coins = args[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid numnber of coins.')
      return
    } 

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `You have given <@${userId}> ${coins} coin(s). They now have ${newCoins} coin(s)!`
    )
    } catch(err) {
      console.log(err)
    }
  }
  }
    }
    