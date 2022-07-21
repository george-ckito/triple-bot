


module.exports = {
    name: 'slots',
    description: 'Slots!',
    category: 'Fun',
    guildOnly: true,
    testOnly: true,
    slash: 'both',
    cooldown: '5s',
    callback: async ({guild, member, user, interaction, message, channel, args, client, prefix, instance}) => {
        const { Slots } = require('discord-gamecord')
        
 if(message){

    new Slots({
        message: message,
        slash_command: false,
        embed: {
            title: '🎰 Slot Machine',
            color: '#5865F2'
        }
    }).startGame();
 } else if(interaction) {

    new Slots({
        message: interaction,
        slash_command: true,
        embed: {
            title: '🎰 Slot Machine',
            color: '#5865F2'
        }
    }).startGame();
 }
    }
}