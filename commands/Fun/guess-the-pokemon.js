
module.exports = {
    name: 'guessthepokemon',
    description: 'Reverse specified text',
    expectedArgs: '<text>',
    aliases: ['gtp', 'guesspokemon', 'guesspoke', 'gp'],
    category: 'Fun',
    guildOnly: true,
    slash: 'both',
    cooldown: '5s',
    callback: async ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
       if (message){
        const { GuessThePokemon } = require('discord-gamecord')

        new GuessThePokemon({
          message: message,
          slash_command: false,
          embed: {
            title: 'Who\'s This Pokemon?',
            footer: 'You have only 1 chance',
            color: '#5865F2',
          },
          time: 60000,
          thinkMessage: '**Thinking...**',
          winMessage: 'Nice! The pokemon was **{pokemon}**',
          stopMessage: 'Better luck next time! It was a **{pokemon}**',
          incorrectMessage: 'Nope! The pokemon was **{pokemon}**',
        }).startGame();
        

    } else if(interaction) {
        const { GuessThePokemon } = require('discord-gamecord')

        new GuessThePokemon({
          message: interaction,
          slash_command: true,
          embed: {
            title: 'Who\'s This Pokemon?',
            footer: 'You have only 1 chance',
            color: '#5865F2',
          },
          time: 60000,
          thinkMessage: '**Thinking...**',
          winMessage: 'Nice! The pokemon was **{pokemon}**',
          stopMessage: 'Better luck next time! It was a **{pokemon}**',
          incorrectMessage: 'Nope! The pokemon was **{pokemon}**',
        }).startGame();
    }
    }
}