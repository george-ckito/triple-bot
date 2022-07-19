
module.exports = {
    name: 'ban',
    expectedArgs: '<user> <duration> <reason>',
    expectedArgsTypes: ['USER', 'NUMBER', 'STRING'],
    permissionError: 'You dont have permission to do that',
    description: 'Bans a member',
    category: 'Moderation',
    guildOnly: true,
    permissions: '',
    testOnly: true,
    slash: 'both',
    minArgs: 3,
    callback: async ({
      guild,     
      member: staff,     
      message,   
      args,         
      client,     
      interaction
  }) => {
      /*   if (!guild){
          return 'You can only use this in servers'
        }
           let userId = args.shift()
           const duration = args.join(' ')
           let reason = message ? args.shift() : interaction.options.getString('reason')
           let user;
           if(message){
              user = message.mentions.users.first()
           } else if(interaction) {
              user = interaction.options.getUser('user')
           }
           if (!user){
            userId = userId.replace(/[<@>]/g, '')
            user = await client.users.fetch(userId)
            if(!user) {
              return `Could not find a user with the ID ${userId}`
            }
           }
           userId = user.id

           let time
           try {
            const split = duration.match(/\d+|\D+/g)
            time = message ? args[2] : interaction.options.getNumber('duration')
           } catch (e) {
            return `Please use "m", "h", or "d" for minutes, hours, and days respectively.` &&
            console.log(e)
           }


           const expires = new Date()
           expires.setMinutes(expires.getMinutes() + time)
           
           const result = await punishmentSchema.findOne({
            guildId: guild.id,
            userId,
            type: 'ban'
           })
           if(result) {
            return `<@${userId}> is already banned!`
           }
           try {
            guild.members.ban(userId, { reason })
            
            
            await new punishmentSchema({
                userId,
                guildId: guild.id,
                staffId: staff.id,
                reason,
                expires,
                type: 'ban',
              }).save()
            
           } catch(ignored) {
            return `Can not ban that user` && console.log(ignored)
           }

           return `<@${userId}> has been banned for **${duration}**`
           
 */
    }}