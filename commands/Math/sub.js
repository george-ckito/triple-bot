module.exports = {
    name: 'sub', 
    aliases: ['subtract'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'lmfao how is this possible',
    description: 'Subtracts two numbers',
    minArgs: 2,
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
    maxArgs: 2,
    callback: ({guild, memberuser, interaction, message, channel, args, text, client, prefix, instance}) => {
      if (message) {const num1 = +args[0]
        const num2 = +args[1]
    
        message.reply(`The sum is ${num1 - num2}`)} else if(interaction) {
          const num1 = interaction.options.getNumber('number1');
          const num2 = interaction.options.getNumber('number2');
    
        message.reply(`The sum is ${num1 - num2}`)
        }
    },

  }