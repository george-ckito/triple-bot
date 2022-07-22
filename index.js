require('events').EventEmitter.defaultMaxListeners = 0
require('module-alias/register')


require('dotenv').config()
const Discord = require('discord.js')

//client

const client = new Discord.Client({
	intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILD_SCHEDULED_EVENTS
  ]
});

//variables


const config = require('./config.json')
const WOKCommands = require('wokcommands')
const mongoose = require('mongoose')
const privateMessage = require('@util/private-message')
const onJoin = require('@util/on-join')
const path = require('path')
const loadFeatures = require('@features/../load-features.js')


//poll system


let channelIds = [
  '996670090172969020', //suggestions
  '996670058585661461' //help
 ]


  const addReactions = message => {
   message.react('👍')

   setTimeout(() => {
     message.react('👎')
   }, 750)
   
   
  }
  
  const colors = ["#eb4034", "#4feb34", "#0c0896", "#4287f5", "#ffffff", "#00ffaa", "#e1ff00"];
  var randomColor = colors[Math.floor(Math.random()* colors.length)];
client.on('message', async (message) => {
  if (channelIds.includes(message.channel.id)) {
    addReactions(message)
  } else if (message.content.toLowerCase() === '!poll') {
    await message.delete()
   
    const fetched = await message.channel.messages.fetch({ limit: 1 })
    if (fetched && fetched.first()) {
      addReactions(fetched.first())
    }
  }
})
//welcome
client.on('guildMemberAdd', (member) => {
  onJoin(member) 
})
//onguildjoin
client.on('guildCreate', guild => {
  const firstchannel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  firstchannel.send(`Hello, I'm TripleBot. Thanks for inviting me! Run t!help for list of my commands!`)
  const myGuild = client.guilds.fetch('993103075483062313')
  const channel = myGuild.channels.fetch('998234908126347304')
  const embed = new Discord.MessageEmbed()
  .setTitle(guild.name)
  .setDescription('**Bot has joined a server**')
  .addField('Owner', `<@${guild.ownerId}>`)
  .addField('Members', `${guild.memberCount}`)
  .setThumbnail(guild.iconURL());
  channel.send({embeds: [embed]})

});
client.on('guildDelete', guild => {
  const myGuild = client.guilds.fetch('993103075483062313')
  const channel = myGuild.channels.fetch('998234908126347304')
  const embed = new Discord.MessageEmbed()
  .setTitle(guild.name)
  .setDescription('**Bot has left a server**')
  .addField('Owner', `<@${guild.ownerId}>`)
  .addField('Members', `${guild.memberCount}`)
  .setThumbnail(guild.iconURL());
  channel.send({embeds: [embed]})

});
//client on ready

client.once('ready', async () => {
  //connect to mongodb
    await mongoose.connect(config.mongoPath).then(mongoose => {
      console.log('Connected to mongodb')
    })

    //ready
    console.log('Ready To Go!')

    //activity
    client.user.setActivity(`t!help || ${client.guilds.cache.size} Servers `, { type: "WATCHING" })
    
    
    //private message (dm)
    privateMessage(client, 'dm me', 'i dmed u')

   //features
    loadFeatures(client)
    


      new WOKCommands(client, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),
        
        // The name of the local folder for your feature files
         //featuresDir: path.join(__dirname, 'features/features'), 
        

        
        // How many seconds to keep error messages before deleting them
        // -1 means do not delete, defaults to -1
        delErrMsgCooldown: -1,
        
        // What language your bot should use
        // Must be supported in your messages.json file
        defaultLangauge: 'english',
        
        // If your commands should not be ran by a bot, default false
        ignoreBots: true,
        
        // If interactions should only be shown to the one user
        // Only used for when WOKCommands sends an interaction response
        // Default is true
        ephemeral: false,
        
        // Various options for your MongoDB database connection
        dbOptions: {
            // These are the default options
            keepAlive: true
        },
        
        // What server/guild IDs are used for testing only commands & features
        // Can be a single string if there is only 1 ID
        testServers: ['999729741835796540','991611405147066379', '995362768519708762', '927492677665161266'],
        
        // User your own ID
        // If you only have 1 ID then you can pass in a string instead
        botOwners: ['793162309014781963', '853123789847527454'],
        
        // What built-in commands should be disabled.
        // Note that you can overwrite a command as well by using
        // the same name as the command file name.
        disabledDefaultCommands: [
             'help',
           'command',
             'language',
            // 'prefix',
            // 'requiredrole',
            // 'channelonly'
        ],
        
        // When connecting to a Mongo database.
        // For more infomration view the "DATABASES" section
        // of this documentation.
        mongoUri: config.mongoPath,
        
        // Provides additional debug logging
        debug: false,
    })
        // Here are some additional methods that you can chain
        // onto the contrustor call. These will eventually be
        // merged into the above object, but for now you can
        // use them:
        
        // The default is !
        .setDefaultPrefix(config.prefix)
        
        // Used for the color of embeds sent by WOKCommands
        .setColor(randomColor)
        .setCategorySettings([
          {
              name: 'Fun',
              emoji: '<a:fun:997575956002767001>'
          },
          {
              name: 'Economy',
              emoji: '<a:economy:997569748588036146>'
          },
          {
              name: 'Info',
              emoji: '<a:Info:997576836156502066>',
          },
          {
              name: 'Math',
              emoji: '<:Math:997577429172375674>'
          },
          {
              name: 'Moderation',
              emoji: '<:Moderation:997578066987597887>'
          },
          {
              name: 'Owner',
              emoji: '<a:Owner:997578636859297812>'
          },
            
      ])
})

    




    



client.login(config.token)