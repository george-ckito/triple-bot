module.exports = {
    name: 'hasrole', 
    aliases: ['rolehas'],
    minArgs: 2,
    expectedArgs: "<Target user's @> <The role name>",
    permissions: ['ADMINISTRATOR'],
    category: 'Moderation',
    description: 'Checks if user has a role',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    options: [
      {
      name: 'target',
      description: 'Target user',
      type: 'MENTIONABLE'
    },
    {
      name: 'role',
      description: 'Role Name',
      type: 'STRING'
    } ],
    callback: ({ member, user, interaction, guild, message, channel, args, text, client, prefix, instance}) => {
      if(message){
      try {const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('Please specify someone to give a role to.')
        return
      }
  
      args.shift()
  
      const roleName = args.join(' ')

  
      const role = guild.roles.cache.find((role) => {
        return role.name === roleName
      })
      if (!role) {
        message.reply(`There is no role with the name "${roleName}"`)
        return
      }
  
      const member = guild.members.cache.get(targetUser.id)
  
      if (member.roles.cache.get(role.id)) {
        message.reply(`That user has the ${roleName} role`)
      } else {
        message.reply(`That user does not have the ${roleName} role`)
      }} catch(err) { console.log(err) && message.reply('Error')}} 
     
      else if(interaction) {
        try {
          const targetUser = interaction.options.getMentionable('target') || interaction.options.getUser('target')
          if (!targetUser) {
            interaction.reply('Please specify someone to give a role to.')
            return
          }
      
      
          const roleName = interaction.options.getString('role')
      
          const role = guild.roles.cache.find((role) => {
            return role.name === roleName
          })
          if (!role) {
            interaction.reply(`There is no role with the name "${roleName}"`)
            return
          }
      
          const member = guild.members.cache.get(targetUser.id)
      
          if (member.roles.cache.get(role.id)) {
            interaction.reply(`That user has the ${roleName} role`)
          } else {
            interaction.reply(`That user does not have the ${roleName} role`)
          }} catch(err) { console.log(err) && interaction.reply('Error')}

      }
    },
  }