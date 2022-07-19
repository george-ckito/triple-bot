const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'purge', 
    aliases: ['clear'],
    description: 'Clears channels messages',
    category: 'Moderation',
    options: [
      {
        name: 'amount',
        description:'Select amount of messages to delete from achannel or a target',
        type: 'NUMBER',
        required: true
      },
      {
        name: 'target',
        description: 'target to delete messages from',
        type: 'USER',
        required: false
      }
    ],
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    callback: async ({guild, member, user, interaction, message, channel, args, text, client, prefix, instance}) => {
    if (interaction) { const amount = interaction.options.getNumber("amount")
     const target = interaction.options.getUser("target")

     const messages = channel.messages.fetch()
     const response = new MessageEmbed()
     .setColor('LUMINOUS_VIVID_PINK');
     if(amount > 100 || amount <= 0) {
      Response.setDescription(`Amount cannot exceed 100, and cannot be under 1.`)
      return interaction.reply({embeds: [Response]})
}
     if(target) {
      let i = 0;
      const filtered = [];
      (await messages).filter((m) => {
        if(m.author.id = target.id && amount > i ){
          filtered.push(m)
          i++
        }
      }
      )
      await channel.bulkDelete(filtered, true).then(messages => {
        response.setDescription(`🧹Cleared ${messages.size} from ${target}.`);
        interaction.reply({embeds: [response]})
    })
    } else {
     await channel.bulkDelete(amount, true).then(messages => {
      response.setDescription(`🧹Cleared ${messages.size} from this channel.`)
      interaction.reply({embeds: [response]})
     })
    }} else if(message) {
      const target = message.mentions.first
      const amount = args[2]
      if (isNaN(amount) || typeof amount != 'string') {
        message.reply('Specify proper number')
        return
      }

      const messages = channel.messages.fetch()
      const response = new MessageEmbed()
      .setColor('LUMINOUS_VIVID_PINK');
      if(amount > 100 || amount <= 0) {
       Response.setDescription(`Amount cannot exceed 100, and cannot be under 1.`)
       return message.reply({embeds: [Response]})
 }
      if(target) {
       let i = 0;
       const filtered = [];
       (await messages).filter((m) => {
         if(m.author.id = target.id && amount > i ){
           filtered.push(m)
           i++
         }
       }
       )
       await channel.bulkDelete(filtered, true).then(messages => {
         response.setDescription(`🧹Cleared ${messages.size} from ${target}.`);
         message.reply({embeds: [response]})
     })
     } else {
      await channel.bulkDelete(amount, true).then(messages => {
       response.setDescription(`🧹Cleared ${messages.size} from this channel.`)
       message.reply({embeds: [response]})
      })
    }
    }
     
    },
    permissions: ['MANAGE_MESSAGES']
  
    }