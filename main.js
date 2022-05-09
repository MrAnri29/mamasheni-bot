//შემოვიტანოთ Player, Client, Intents!
const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

//intents რომლებიც ბოტს ჭირდება
global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

//შემოვიტანოთ config
client.config = require('./config');

//მივუთითოთ global.player
global.player = new Player(client, client.config.opt.discordPlayer);

//შემოვიტანოთ ევენთები
require('./src/loader');
require('./src/events');

//dotenv გვჭირდება იმაში რომ ჩვენი TOKEN იყოს დამალული სხვებისაგან
require('dotenv').config({ path: './.env' });

client.login(process.env.TOKEN || client.config.app.token || `შენი ტოკენი აქ`);