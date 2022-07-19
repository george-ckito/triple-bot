module.exports = {
    name: 'mktext',
    aliases: ['maketext'],
    expectedArgs: '<name>',
    description: 'Makes a text channel',
    category: 'Moderation',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    options: [
        {
        name: 'channel_name',
        description: 'Name',
        type: 'STRING'
      }],
    minArgs: 1,
    callback: ({ member, user, guild, interaction, message, channel, args, text, client, prefix, instance}) => {
         if(message)   {
        const name = args.join(' ')
        guild.channels.create(name, {
            type: 'text'
        }).then((channel) => {
           message.reply(`Channel ${name} has been created!`)
        })} else if(interaction) {
          const name = interaction.options.getString('channel_name')
          guild.channels.create(name, {
              type: 'text'
          }).then((channel) => {
             interaction.reply(`Channel ${name} has been created!`)
          })
        }
    },
    permissions: ['MANAGE_CHANNELS'],
  }