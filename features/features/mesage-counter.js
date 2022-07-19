
const messageCountSchema = require('@schemas/message-count-schema')

module.exports = (client) => {
  client.on('message', async (message) => {
    const { author } = message
    const { id } = author


      try {
        await messageCountSchema
          .findOneAndUpdate(
            {
              _id: id,
            },
            {
              $inc: {
                messageCount: 1,
              },
            },
            {
              upsert: true,
            }
          )
          .exec()
      } catch (err) {
        console.log('error')
      }
    })
  }
