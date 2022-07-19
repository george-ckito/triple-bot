const Discord = require('discord.js')
module.exports = (message, args, prefix) => {
    var muterolename = "Muted"; //Put the name of the muted role
        
    var muteRole = message.guild.roles.cache.find(r => r.name === muterolename); //Gets data of muted role

    var muteUser = message.mentions.members.first(); //Gets role your trying to mute
  const mybot = message.guild.members.fetch(995742679960924301)
  // Conditions
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return ":no_entry_sign: You do not have permissions to **mute** that user :no_entry_sign:"
  if (!muteUser) return "You have to mention a valid member."
  if (!muteRole) return `There's no role called ${muterolename}` 

  var prefixLeangth = prefix.length; //Gets lenth of prefix
  var minutes = args[1]; //Time in minutes
  var muteReason = message.content.slice(6 + prefixLeangth, prefixLeangth + message.content.length); //Gets reason if one is one
  if (!muteReason) var muteReason = "No reason given"; //Make the reason "No reason given" if field is left empty"

  // Embed
  var muteEmbed = new Discord.MessageEmbed()
  muteEmbed.setTitle("Mute")
  muteEmbed.addField("Muted user", `-> ${muteUser}`)
  muteEmbed.addField("Reason", `-> ${muteReason}`)
  muteEmbed.addField("Minutes", `-> ${minutes}`)
  muteEmbed.setFooter(`Muted by ${message.author.tag}`)
  muteEmbed.setTimestamp();
  
try{
      message.reply({embeds: [muteEmbed]})

  // You need to parse those arguments, I'll leave that to you.

  // Mute the user
  muteUser.roles.add(muteRole, `Muted by ${message.author.tag} for ${minutes} minutes. Reason: ${muteReason}`);

  // Unmute them after x minutes
  timeout(minutes, muteUser, muteRole, message)} catch(err) {
    return `Oops! Something happened`
  }
}

function timeout(minutes, muteUser, mutedRole, message) {
  setTimeout(() => {
    muteUser.roles.remove(mutedRole, `Temporary mute expired.`);

    var muteEmbed = new Discord.MessageEmbed()
    muteEmbed.setTitle("Unmute")
    muteEmbed.addField("Unmuted user", `-> ${muteUser}`)
    muteEmbed.addField("Reason", '-> Time ran out.')
    muteEmbed.setFooter(`Unmuted by me`)
    muteEmbed.setTimestamp();
    message.reply({embeds:[muteEmbed]})
  }, minutes * 60000); // time in ms
}

