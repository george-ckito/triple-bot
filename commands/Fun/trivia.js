/* */
const SnakeGame = require('snakecord');
module.exports = {
    name: 'trivia',
    aliases: ['trivia', 'triv'],
    description: 'Answer some cool questions',
    category: 'Fun',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    cooldown: '5s',
    callback: async ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
        const { Trivia } = require('discord-gamecord')

      if(message) {
         new Trivia({
          message: message,
          slash_command: false,
          embed: {
            title: 'Trivia',
            description: 'You have {time} seconds to respond!',
            color: '#5865F2',
          },
          difficulty: 'medium',
          winMessage: 'GG, Your answer was correct! It was **{answer}**',
          loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
          othersMessage: 'You are not allowed to use buttons for this message!',
        }).startGame(); 
    } else if(interaction) {
        new Trivia({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Trivia',
              description: 'You have {time} seconds to respond!',
              color: '#5865F2',
            },
            difficulty: 'medium',
            winMessage: 'GG, Your answer was correct! It was **{answer}**',
            loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
            othersMessage: 'You are not allowed to use buttons for this message!',
          }).startGame(); 
    }
    }
}