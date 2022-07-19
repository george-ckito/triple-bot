
module.exports = {
    name: 'reverse',
    description: 'Reverse specified textg',
    expectedArgs: '<text>',
    minArgs: 1,
    category: 'Fun',
    guildOnly: true,
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
         let Text = args.join(' ')
        if (typeof Text != 'string') {
              Text = +Text
        }
        const { reverseText } = require('discord-gamecord');
        
        channel.send(await reverseText(Text)); 

    } else if(interaction) {
        let Text = interaction.options.getString('text')
        if (typeof Text != 'string') {
            Text = +Text
      }
      const { reverseText } = require('discord-gamecord');
      
      channel.send(await reverseText(Text)); 
    }
    }
}