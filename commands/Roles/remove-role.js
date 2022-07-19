module.exports = {
    name: 'removerole', 
    aliases: ['delrole', 'deleterole'],
    minArgs: 2,
    expectedArgs: "<Target user's @> <The role name>",
    permissions: ['ADMINISTRATOR'],
    description: 'Removes a role from an user',
    category: 'Moderation',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
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
    callback: ({memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
      const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('Please specify someone to give a role to.')
        return
      }
  
      args.shift()
  
      const roleName = args.join(' ')
      const { guild } = message
  
      const role = guild.roles.cache.find((role) => {
        return role.name === roleName
      })
      if (!role) {
        message.reply(`There is no role with the name "${roleName}"`)
        return
      }
  
      const member = guild.members.cache.get(targetUser.id)
  
      if (member.roles.cache.get(role.id)) {
        member.roles.remove(role)
        message.reply(`That user no longer has the ${roleName} role`)
      } else {
        message.reply(`That user does not have the ${roleName} role`)
      }
    },
  }