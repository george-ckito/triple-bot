const SnakeGame = require('snakecord');
module.exports = {
    name: 'snake',
    aliases: ['snakegame'],
    description: 'Play popular snake game',
    category: 'Fun',
    guildOnly: true,
    testOnly: true,
    slash: 'false',
    cooldown: '5s',
    callback: async ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: 'GREEN',
            timestamp: false,
            gameOverTitle: 'Game Over'
        });
        return await snakeGame.newGame(message);
    }
}