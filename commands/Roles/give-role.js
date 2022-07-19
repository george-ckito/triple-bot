

module.exports = {
    name: 'giverole', 
    aliases:['rolegive'],
    minArgs: 2,
    category: 'Moderation',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    description: 'Gives user a role',
    options: [
      {
        name: 'target',
        description: 'Target user',
        type: 'USER'
      },
    {
      name: 'role',
      description: 'Role Name',
      type: 'STRING'
    } ],
    expectedArgs: "<@Target user's @> <the role name>",
    permissions: ['ADMINISTRATOR'],
    callback: ({ user, interaction, message, guild, channel, args, text, client, prefix, instance}) => {
        if(message) {
        
         try { const targetUser = message.mentions.users.first()
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
        member.roles.add(role)
    
        message.reply(`that user now has the "${roleName}" role`)} catch(err) {console.log(err) && message.reply('Error')}
      } else if(interaction) {
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
          member.roles.add(role)
      
          interaction.reply(`that user now has the "${roleName}" role`)} catch(err) {console.log(err) && interaction.reply('Error')}
      }
      },
    } 