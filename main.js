const { Client } = require('discord.js-selfbot-v13');
const { Constants: { APIErrors }} = require('discord.js');
require('dotenv').config()
const Cooldown = new Set();

const client = new Client({
  disableEveryone: true
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

mytimer = setInterval(async () => {
  var channel = client.channels.cache.get(process.env.CHANNELID);
  console.log('Bumped Here! #-#-#')
  channel.sendSlash('302050872383242240', 'bump')
}, getRandomIntInclusive(7200000, 9600000))
// 7200000, 9600000

client.on('ready',  async() => {
    console.log('First bump takes 2 to 3 hours to come in.')
    client.user.setStatus('invisible')
})

client.on('message', message => {
  if (message.channel.id === 'process.env.CHANNELID' && message.type === 'APPLICATION_COMMAND' && message.author.id === '302050872383242240' && message.interaction.commandName === 'bump' && message.interaction.user.id != 'process.env.YourUserID') {
    console.log('Detected Bump! Resetting...')
    clearInterval(mytimer)
    mytimer = setInterval(async () => {
      var channel = client.channels.cache.get(process.env.CHANNELID);
      console.log('Bumped Here! #+#+#')
      channel.sendSlash('302050872383242240', 'bump')
    }, getRandomIntInclusive(7200000, 9600000))
  }
})

client.login('process.env.TOKEN');
