/*
Created With char-mod-mail Package.
Created By Odd Coder.
Odd Coder Discord: https://discord.gg/7KtdeePrHV
Odd Coder Youtube: https://www.youtube.com/channel/UCwsiWQMSomXFjWWpRQbc35A
Thanks for using our coded bot.
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Odd is better.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

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
