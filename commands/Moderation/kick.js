module.exports = {
    name: 'kick',
    expectedArgs: '<user> <reason>',
    description: 'Kicks an user',
    category: 'Moderation',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    options: [
      {
      name: 'user',
      description: 'Target user',
      type: 'USER',
      required:true
    },
    {
      name: 'reason',
      description: 'Reason to kick',
      type: 'STRING'
    },
  ],
    minArgs: 1,
    maxArgs: 2,
    callback: ({guild, user, member, interaction, message, channel, args, text, client, prefix, instance}) => {
    const target = message ? message.mentions.members.first() : interaction.options.getUser('target')
    if(!target){
      return 'Please tag someone to kick'
    }
    if(!target.kickable) {
      return {
        custom: true,
        content: `Target is not kickable or I dont have power!`,
        ephermal: true
      
      }
    }
    args.shift()
    const reason = args.join(' ')
    target.kick()
    return {
      custom: true,
      content: `You have kicked <@${target.id}> for ${target}`,
      ephermal: true
    
    }
    },
  permissions: ['KICK_MEMBERS'],
  }
