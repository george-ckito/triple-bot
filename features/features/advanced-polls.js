
module.exports = (client) => {
  client.on('message', async (message) => {
    const { channel, content } = message


    const eachLine = content.split('\n')
  
    for (const line of eachLine) {
      if (line.includes('=')) {
        const split = line.split('=')
        const emoji = split[0].trim()
        try {
        await message.react(emoji)
        } catch (err) {
         return
        }
      }
    }
  
  })
}