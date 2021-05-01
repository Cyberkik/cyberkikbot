const Discord = require('discord.js');
//const client = new Discord.Client({
//    fetchAllMembers: true
//}
const client = new Discord.Client();
const { prefix, token } = require('./config.json');






client.once('ready', () => {
	console.log('Ready!');
    message.channel.send('bot ready');
});

client.on('message', message => {
    if (message.content === '!test') {
        message.channel.send('bot ready');

    
    }






});

client.on('message', message => {
    if (message.content === '!teste') {
        message.channel.send('apprend a parler français x)');

    
    }






});

client.login(process.env.TOKEN);




