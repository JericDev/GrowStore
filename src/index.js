// File: index.js (or your bot's entry point)

require("dotenv/config");

const { Client, Collection } = require("discord.js");
const client = new Client({
  intents: ["Guilds", "DirectMessages", "GuildMessages", "MessageContent", "GuildMembers"],
});

// !!! FIX 1: IMPORT AND INITIALIZE DATABASE CONNECTION !!!
const Database = require("./db/connection"); // Adjust path if needed
const database = new Database();

// The URI must be fixed in the connection.js file (or wherever the connectToMongo method is)
// to point to the correct database (e.g., PinasTopiaDB, not 'admin').
database.connectToMongo(); 

const { eventListener } = require("../src/utils/handler");
eventListener(client);

client.commands = new Collection();

client.login(process.env.BOT_TOKEN);
