const Discord = require('discord.js')
const tempmute = require('@util/tempmute')

module.exports = {
    name: 'mute',
    expectedArgs: '<user> <duration> <reason>',
    expectedArgsTypes: ['USER', 'NUMBER', 'STRING'],
    permissionError: 'You dont have permission to do that',
    description: 'Mutes a member',
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
      prefix,
      args,         
      client,     
      interaction
  }) => {
      /*   if (!guild){
          return 'You can only use this in servers'
        }
           let userId = args.shift()
           const reason = args.join(' ')
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

           if(result) {
            return `<@${userId}> is already muted!`
           }
           try {
            const member = await guild.members.fetch(userId)
            if(member) {
                const muteRole = guild.roles.cache.find((role) => role.name === 'Muted')
                if(!muteRole){
                  return 'This server doesnt have "Muted" role.'
                }
                member.roles.add(muteRole)
            }
           } catch(ignored) {
            return `Can not mute that user`
           }

           return `<@${userId}> has been muted` */

        tempmute(message, args, prefix)
        


    }}