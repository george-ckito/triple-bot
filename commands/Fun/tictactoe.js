
module.exports = {
    name: 'tictactoe',
    aliases: ['ttt', 'tictt'],
    description: 'TicTacToe!',
    expectedArgs: '<user>',
    expectedArgsType: ['USER'],
    minArgs: 1,
    category: 'Fun',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    cooldown: '5s',
    callback: async ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
        const { RockPaperScissors } = require('discord-gamecord')

      if(message) {
        const { TicTacToe } = require('discord-gamecord')

        new TicTacToe({
          message: message,
          slash_command: false,
          opponent: message.mentions.users.first(),
          embed: {
            title: 'Tic Tac Toe',
            overTitle: 'Game Over',
            color: '#5865F2',
          },
          oEmoji: '🔵',
          xEmoji: '❌',
          blankEmoji: '➖',
          oColor: 'PRIMARY',
          xColor: 'DANGER',
          waitMessage: 'Waiting for the opponent...',
          turnMessage: '{emoji} | Its now **{player}** turn!',
          askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
          cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
          timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
          drawMessage: 'It was a draw!',
          winMessage: '{emoji} | **{winner}** won the game!',
          gameEndMessage: 'The game went unfinished :(',
        }).startGame();
    } else if(interaction) {
        const { TicTacToe } = require('discord-gamecord')

        new TicTacToe({
          message: interaction,
          slash_command: true,
          opponent: interaction.options.getUser('user'),
          embed: {
            title: 'Tic Tac Toe',
            overTitle: 'Game Over',
            color: '#5865F2',
          },
          oEmoji: '🔵',
          xEmoji: '❌',
          blankEmoji: '➖',
          oColor: 'PRIMARY',
          xColor: 'DANGER',
          waitMessage: 'Waiting for the opponent...',
          turnMessage: '{emoji} | Its now **{player}** turn!',
          askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
          cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
          timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
          drawMessage: 'It was a draw!',
          winMessage: '{emoji} | **{winner}** won the game!',
          gameEndMessage: 'The game went unfinished :(',
        }).startGame();
    }
    }
}