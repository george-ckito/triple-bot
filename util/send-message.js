
module.exports = (channel, text, duration = -1) => {
   try {
    channel.send(text).then((message) => {
  
      setTimeout(() => {
        message.delete()
      }, 1000 * duration)
    })
} catch(err) {
    console.log(err) && channel.send(err + ' Please contact the owner!')
}
  }