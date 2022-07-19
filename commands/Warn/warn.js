
const warnSchema = require('@schemas/warn-schema')

module.exports = {
  name: 'warn',
  minArgs: 2,
  category: 'Moderation',
  guildOnly: true,
  description: 'Warns an user',
  testOnly: true,
  slash: 'both',
  options: [
    {
    name: 'target',
    description: 'Target user',
    type: 'USER'
  },
  {
    name: 'reason',
    description: 'Reason',
    type: 'STRING'
  } ],
  expectedArgs: "<Target user's @> <reason>",
  permissions: ['BAN_MEMBERS'],
  callback: async ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    args.shift()

    const guildId = message.guild.id
    const userId = target.id
    const reason = args.join(' ')

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

      try {
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
          
        )
        message.channel.send(`Warned <@${target.id}> for ${reason}`)
      } catch (err)  {
        //check dc
        console.log('Error!')
    
  }}
}