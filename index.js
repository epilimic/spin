require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const messages = ["rev's choice", "l4d2", "back4blood", "china game", "overwatch", "chicken horse", "who's your daddy", "humans fall flat", "golf", "icarus", "risk of rain 2", "shatterline", "gloomhaven", "darktide", "mount your finches", "crab game"]

client.on('message', msg => {
  if (msg.content === 'spin') {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
    msg.reply(randomMessage);
  }
});

client.on('message', msg => {
  if (msg.content === '#mrh') {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
    msg.reply(randomMessage);
  }
});

client.on('message', msg => {
  if (msg.content === 'mrh') {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
    msg.reply(randomMessage);
  }
});

client.on('message', msg => {
  if (msg.content === 'make rev happy') {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
    msg.reply(randomMessage);
  }
});

client.login(process.env.CLIENT_TOKEN); //login bot using token
