module.exports = {
    name: 'sudo',
    description: 'Make bot say whatever you want',
    expectedArgs: '<text>',
    minArgs: 1,
    category: 'Fun',
    guildOnly: true,
    ownerOnly: true,
    testOnly: true,
    slash: 'both',
    options: [
        {
        name: 'text',
        description: 'Text',
        type: 'STRING'
      }],
    cooldown: '5s',
    callback: ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
       if (message){
         let text = args.join(' ')
        if (typeof text != 'string') {
              text = +text
        }
       message.reply(text)
    } else if(interaction) {
        let text = interaction.options.getString('text')
        if (typeof text != 'string') {
              text = +text
        }
        interaction.reply(`${text}`)
    }
    }
}
