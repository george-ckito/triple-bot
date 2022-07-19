const cache = {}

const welcomeSchema = require('@schemas/welcome-schema')
module.exports = async (member) => {
    const { guild } = member
  
    let data = cache[guild.id]

    if (!data) {
      console.log('FETCHING FROM DATABASE')


        try {
          const result = await welcomeSchema.findOne({ _id: guild.id })

          cache[guild.id] = data = [result.channelId, result.text]
        } catch(err) {
          console.log('error')
        } 
    
    }

    const channelId = data[0]
    const text = data[1]

    const channel = guild.channels.cache.get(channelId)
    return channel.send(text.replace(/<@>/g, `<@${member.id}>`))
  }