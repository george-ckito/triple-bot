const { MessageEmbed } = require('discord.js')
const economy = require('@util/economy')

module.exports = {
  name: 'balance',
  aliases: ['addbal'],
  maxArgs: 1,
  category: 'Economy',
  description: 'Sends information about users balance',
  expectedArgs: "[Target user's @]",
  slash: 'both',
  testonly: true,
  options: [
    {
    name: 'target',
    description: 'Target user',
    type: 'USER'
  }],
  callback: async ({guild, member, user, interaction, message, channel, args, text, client, prefix, instance}) => {
    if (message) {
      try {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = guild.id
    const userId = targetId

    const coins = await economy.getCoins(guildId, userId)
    const embed = new MessageEmbed()
    .setTitle('Balance')
    .setColor('DARK_ORANGE')
    .addField('User', `<@${targetId}>`, true)
    .addField('Balance', `${coins}`, true)
    message.reply({embeds: [embed]})
      } catch(err) {
        console.log(err)
      }
  }
  if(interaction) {
    const target = interaction.options.getUser('target') || member
    const targetId = target.id
    /* if(!interaction.guild) return; // Returns as there is no guild
    var guild = interaction.guild.id;
    var userID = interaction.user.id; */
    if(!interaction.guild) {return};
    const guildId = interaction.guild.id
    const userId = targetId 
    const coins = await economy.getCoins(guildId, userId)
    const embed = new MessageEmbed()
    .setTitle('Balance')
    .setColor('DARK_ORANGE')
    .addField('User', `<@${targetId}>`, true)
    .addField('Balance', `${coins}`, true)
    interaction.reply({embeds: [embed]})
  }

}
}