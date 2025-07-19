const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🤖 Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1219762820300931092", //put youri guild id here
  categoryID: "1341176524438765650", //put your category id here
  staffRole: "1355931469800804573", //put your staff role id here
  embedColor: "#00ff04", //change the hax color code if you want
  anonymousReply: false, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Tu ticket ha sido cerrado",
  closedMessage: "Tu ticket ha sido cerrado por uno de nuestros moderadores. Si tienes otra consulta, no dudes en escribirnos!",
  staffOpenedTitle: "TICKET ABIERTO",
  staffOpenedMessage: "NUEVO TICKET",
  userOpenedTitle: "TICKET CREADO",
  userOpenedMessage: "Has abierto un ticket en #ShadowPatch! Mientras un miembro del equipo de soporte te atiende, di en que podemos ayudarte",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
