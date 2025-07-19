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

// Aquí podés poner tu lógica que necesita estar activa al iniciar
});

// Escuchar mensajes
client.on('messageCreate', (message) => {
if (message.content === '!ping') {
message.channel.send('Pong!');
}
});

// Login
client.login(process.env.DISCORD_TOKEN);

// Tu configuración personalizada (puede ir fuera si no se ejecuta automáticamente)
const charModal = {}; // solo si lo necesitás arriba
(client, {
guildID: "123456789012345678",
categoryID: "111111111111111111",
staffRole: "222222222222222222",
embedColor: "#FF0000",
anonymousReply: false,
staffOpenedTitle: "TICKET ABIERTO",
userOpenedTitle: "TICKET CREADO",
userOpenedMessage: "Has abierto un ticket...",
wrongEmoji: "❌",
rightEmoji: "✅"
});
