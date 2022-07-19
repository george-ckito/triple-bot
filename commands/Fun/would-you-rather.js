const SnakeGame = require('snakecord');
module.exports = {
    name: 'wouldyourather',
    aliases: ['wya', 'rathergame', 'wouldrather', 'wyrather'],
    description: 'Would you rather?',
    category: 'Fun',
    guildOnly: true,
    testOnly: true,
    slash: false,
    cooldown: '5s',
    callback: async ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
        const { WouldYouRather } = require('discord-gamecord')

new WouldYouRather({
  message: message,
  slash_command: false,
  embed: {
    title: 'Would You Rather',
    color: '#5865F2',
  },
  thinkMessage: '**Thinking...**',
  buttons: { option1: 'Option 1', option2: 'Option 2'},
  othersMessage: 'You are not allowed to use buttons for this message!',
}).startGame();
    }
}