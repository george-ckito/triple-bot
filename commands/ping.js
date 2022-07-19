module.exports = {
    category: 'Testing', // Required for slash commands
    description: 'A simple ping pong command', // Required for slash commands
    
    slash: 'both',
    testOnly: true, // Ensure you have test servers setup, see the below paragraph
    
    callback: async ({ interaction, client, message }) => {
      // The interaction property will be undefined if the command is
      // ran as a legacy command. It is encouraged to check if 'message' or
      // 'interaction' exists before interacting with them.
      if (interaction) {

        try {
          const mesg = await interaction.reply({ content: "**Pong! 🏓**", fetchReply: true });
    
          await interaction.editReply({ content: `**Pong! 🏓**\nBot Latency: \`${mesg.createdTimestamp - interaction.createdTimestamp}ms\`, Websocket Latency: \`${client.ws.ping}ms\`` });
        } catch (err) {
          console.log("Something Went Wrong => ", err);
        }
  } else if (message) {

    try {
      const mesg = await message.reply({ content: "**Pong! 🏓**", fetchReply: true });

      await mesg.edit({ content: `**Pong! 🏓**\nBot Latency: \`${mesg.createdTimestamp - message.createdTimestamp}ms\`, Websocket Latency: \`${client.ws.ping}ms\`` });
    } catch (err) {
      console.log("Something Went Wrong => ", err);
    }
        
      }
  }
}