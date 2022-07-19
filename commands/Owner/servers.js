const Discord = require('discord.js')
module.exports = {
    name: 'servers', 
    aliases: ['sers'],
    description: 'Showes information about servers TripleBot is in.',
    category: 'Owner',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    ownerOnly: true,
    callback: ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
        const config = require('@root/config.json')
       
       if(message)     {
                client.guilds.cache.forEach((guild) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(guild.name)
                    .addField('Members', `${guild.memberCount}`, false)
                    .addField('Owner', `<@${guild.ownerId}>`, false)
                    .addField('Guild ID', guild.id, false)
                    .setThumbnail(guild.iconURL())
                
                message.channel.send({embeds: [embed]})
            } )
        } else if(interaction) {
            client.guilds.cache.forEach((guild) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(guild.name)
                    .addField('Members', `${guild.memberCount}`, false)
                    .addField('Owner', `<@${guild.ownerId}>`, false)
                    .addField('Guild ID', guild.id, false)
                    .setThumbnail(guild.iconURL())
                
                interaction.reply({embeds: [embed]})
            } )
        }
    },
  }