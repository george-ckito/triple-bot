
module.exports = (client, triggerText, replyText) => {
    client.on('message', async (message) => {
      if  (message.content === triggerText) {
        const user = message.author
        user.send(replyText)
      }
    })
  }