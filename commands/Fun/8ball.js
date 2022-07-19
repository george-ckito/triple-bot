const { MessageEmbed } = require("discord.js");
const { prefix } = require('@root/config.json')
module.exports = {
    name: '8ball',
    description: 'The well known magic 8ball.',
    expectedArgs: '<question>',
    category: 'Fun',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    options: [
        {
        name: 'question',
        description: 'Question',
        type: 'STRING',
        required: true
      }],
    permissionError: 'lmfao how is this possible',
    cooldown: '5s',
    minArgs: 1,
    callback: ({guild, member, user, interaction, message, channel, args, text, client, prefix, instance}) => {
if (message){    
      if(!args[0]) return message.reply("Provide a question!");
        const replies = ["yes", "no", "absolutley ||no||", "can you just ask later?", "just let me ALONE ONE **SECOND**", "I can tell you that it's a *NO*"];
        var randomItem = replies[Math.floor(Math.random()* replies.length)];
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];
       const question = message.content.replace(`${prefix}8ball`, '')
        if (!typeof(question) === 'string') {
        message.reply('Tell me proper question')
       }
       const ballEmbed = new MessageEmbed()
       .setColor(randomColor)
       .addField('Question:', `${question}`, false)
       .addField('Answer:', `${randomItem}` , false)

       message.reply({embeds: [ballEmbed]});
      } else if(interaction) {
        const replies = ["yes", "no", "absolutley ||no||", "can you just ask later?", "just let me ALONE ONE **SECOND**", "I can tell you that it's a *NO*"];
        var randomItem = replies[Math.floor(Math.random()* replies.length)];
        const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
        var randomColor = colors[Math.floor(Math.random()* colors.length)];
       const question = interaction.options.getString('question');
        if (!typeof(question) === 'string') {
        interaction.reply('Tell me proper question')
       }
       const ballEmbed = new MessageEmbed()
       .setColor(randomColor)
       .addField('Question:', `${question}`, false)
       .addField('Answer:', `${randomItem}` , false)

       interaction.reply({embeds: [ballEmbed]});
      }
}
}