const command = require('@util/command')
const ownerId = '853123789847527454' // my discord user ID
const { prefix } = require('@root/config.json') // private channel ID

module.exports = (client) => {
  command(client, 'eval', (message) => {
    let { member, channel, content } = message

    if (member.id === ownerId) {
      let result = eval(content.replace( `${prefix}eval `, ''))
      if(result === false) {
        channel.send('ERROR: Message is blank')
      } else if(result === true) {
        channel.send(result)
      } else {
        return
      }
    }
  })
}