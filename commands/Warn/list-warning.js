
const { MessageEmbed } = require('discord.js')
const warnSchema = require('@schemas/warn-schema')

module.exports = {
  name: 'listwarnings', 
  aliases: ['lw'],
  minArgs: 1,
  category: 'Moderation',
  description: 'List warnings of an user',
  guildOnly: true,
  testOnly: true,
  slash: 'both',
  options: [
    {
    name: 'target',
    description: 'Target user',
    type: 'USER'
  } ],
  expectedArgs: "<Target user's @>",
  permissions: ['BAN_MEMBERS'],
  callback: async ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify a user to load the warnings for.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

      try {
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })
            const embed1 = new MessageEmbed()
            .setTitle(`Previous warnings for <@${userId}>:`)
            .setColor('RED');

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning

          embed1.addField(`By ${author}`, `on ${new Date(timestamp).toLocaleDateString()} for "${reason}"`, false)
        }

        message.reply({embeds: [embed1]})
      } catch (err) {
        console.log(err)
      }
    
  },
}