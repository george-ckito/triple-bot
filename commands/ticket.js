
module.exports = {
  name: 'ticket', 
  aliases: ['support'],
  minArgs: 2,
  category: 'Moderation',
  guildOnly: true,
  testOnly: true,
  slash: 'both',
  options: [
    {
    name: 'message',
    description: 'Message',
    type: 'STRING'
  },
  {
    name: 'channel_id',
    description: 'Channel ID',
    type: 'STRING'
  } ],
  description: 'Opens a new ticket',
  expectedArgs: '<message> <channelID>',
  callback: ({ user, interaction, message, args, client, text, prefix, instance}) => {
    if(!message) {
    interaction.reply({ content: 'You cannot use this command as slash command'})
    return
    }
    const check = '✅'
    let registered = false
    
    const registerEvent = (client) => {
      if (registered) {
        return
      }
    
      registered = true
    
      console.log('REGISTERING EVENTS')
    
      client.on('messageReactionAdd', (reaction, user) => {
        if (user.bot) {
          return
        }
    
        console.log('HANDLING REACTION')
        const { message } = reaction
        if (message.channel.id === args[1]) {
          message.delete()
        }
      })
    }
    


    const { guild, member } = message

    registerEvent(client)

    const channel = guild.channels.cache.get(args[1])
    channel
      .send(
        `A new ticketh has been creaated by <@${member.id}>
    
"${text}"
Click the ${check} icon when this issue has been resolved.`
      )
      .then((ticketMessage) => {
        ticketMessage.react(check)

        ticketMessage.reply(
          'Your ticket has been sent! Expect a reply within 24 hours.'
        )
      })
  },
}