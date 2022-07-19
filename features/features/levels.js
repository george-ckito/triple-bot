

const { findOneAndDelete } = require('@schemas/profile-schema')
const profileSchema = require('@schemas/profile-schema')

module.exports = (client) => {
  client.on('message', async (message) => {
    try {
    const { guild, member } = message
     const guildId = await guild.id
    addXP(guildId, member.id, 23, message)
    } catch(err) {
      console.log('error' + err)
    }
  })
}

const getNeededXP = (level) => level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
  try {
    const result = await profileSchema.findOneAndUpdate(
      {
        guildId,
        userId,
      },
      {
        guildId,
        userId,
        $inc: {
          xp: xpToAdd,
        },
      },
      {
        upsert: true,
        new: true,
      }
    )

    let { xp, level } = result
    const needed = getNeededXP(level)

    if (xp >= needed && !message.author.bot) {
      ++level
      xp = 0
       


      await profileSchema.updateOne(
        {
          guildId,
          userId,
        },
        {
          level,
          xp,
        }
      ) 
      
     try {message.reply(
        `You are now level ${level} with ${xp} experience! You now need ${getNeededXP(
          level
        )} XP to level up again.`
      )} catch(err) {
        console.log(err)
      }
    }
  } catch(err) {
    console.log(err)
  } 
}

module.exports.addXP = addXP