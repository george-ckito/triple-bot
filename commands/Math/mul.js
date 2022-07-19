module.exports = {
    name: 'mul', 
    aliases: ['multiply'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'lmfao how is this possible',
    description: 'Multiplies two numbers',
    minArgs: 2,
    maxArgs: 2,
    category: 'Math',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    options: [
      {
      name: 'number_1',
      description: 'Number 1',
      type: 'NUMBER'
    },
    {
      name: 'number_2',
      description: 'Number 2',
      type: 'NUMBER'
    }],
    callback: ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
      if (message) {const num1 = +args[0]
        const num2 = +args[1]
    
        message.reply(`The sum is ${num1 * num2}`)} else if(interaction) {
          const num1 = interaction.options.getNumber('number_1');
          const num2 = interaction.options.getNumber('number_2');
    
        interaction.reply(`The sum is ${num1 * num2}`)
        }
    },

  }