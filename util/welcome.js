
 const cache = {}

const command = require('@util/command')
const welcomeSchema = require('@schemas/welcome-schema')

module.exports = (client) => {
  //!setwelcome <message>
  // guildId: [channelId, text]

  command(client, 'setwelcome', async (message) => {
    const { member, channel, content, guild } = message
    console.log('a')
    if (!member.permissions.has('ADMINISTRATOR') || !member.permissions.has('MANAGE_SERVER')) {
      channel.send('You do not have permission to run this command.')
      return
    }

    let text = content

    const split = text.split(' ')

    if (split.length < 2) {
      channel.send('Please provide a welcome message')
      return
    }

    split.shift()
    text = split.join(' ')

    cache[guild.id] = [channel.id, text]

      try {
        await welcomeSchema.findOneAndUpdate(
          {
            _id: guild.id,
          },
          {
            _id: guild.id,
            channelId: channel.id,
            text,
          },
          {
            upsert: true,
          }
        )
      } catch(err) {
        console.log(err)
      } 
    })
  }





