module.exports = (client) => {
    const isInvite = async (guild, code) => {
      return await new Promise((resolve) => {
        guild.invites.fetch().then((invites) => {
          for (const invite of invites) {
            if (code === invite[0]) {
              resolve(true)
              return
            }
          }
  
          resolve(false)
        })
      })
    }
  
    client.on('message', async (message) => {
      const { guild, member, content } = message
  
      // discord.gg/23RAN4
  
      const code = content.split('discord.gg/')[1]
      if(code === undefined) {
      return
      } else{
        console.log('CODE', code)
      }
  
      if (content.includes('discord.gg/')) {
        const isOurInvite = await isInvite(guild, code)
        if (!isOurInvite) {
          // we know that they are advertising an outside discord server
          message.delete()
          message.channel.send("Don't adverise!")
        }
      }
    })
  }