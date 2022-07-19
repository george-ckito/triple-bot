const emojify = require("discord-emojify");

module.exports = {
    name: 'emojify',
    aliases: ['emoji'],
    description: 'Make bot say whatever you want in emojis',
    cooldown: '5s',
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
    minArgs: 1,
    expectedArgs: '<text>',
    callback: async ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
        
        if (message) {
        const emojiText = await emojify(args.join(' '))
        message.reply(emojiText)
    } else if(interaction) {
        const emojiText = await emojify(interaction.options.getString('text'))
        interaction.reply(emojiText)
        }
    } 
}