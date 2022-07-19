const Discord = require('discord.js')
module.exports = {
    name: 'serverinfo', 
    aliases: ['serinfo'],
    category: 'Info',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    description: 'Sends information about current server',
    callback: ({member, user, interaction, message, channel, args, text, client, prefix, instance, guild}) => {
if(message){    
        const embed = new Discord.MessageEmbed()
        .setTitle(guild.name)
        .addField('Members', `${guild.memberCount}`, false)
        .addField('Owner', `<@${guild.ownerId}>`, false)
        .addField('Guild ID', guild.id, false)
        .setThumbnail(guild.iconURL())
        
    
    message.channel.send({embeds: [embed]})
} else if(interaction) {
    const embed = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .addField('Members', `${guild.memberCount}`, false)
    .addField('Owner', `<@${guild.ownerId}>`, false)
    .addField('Guild ID', guild.id, false)
    .setThumbnail(guild.iconURL())
    

interaction.reply({embeds: [embed]})
}
    },
  }