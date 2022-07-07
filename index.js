const http = require('http');
const express = require('express');
const app = express();
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const rn = require('random-number');
const token = botconfig.TOKEN;
const prefix = botconfig.PREFIX;

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 100000);

bot.on("ready", async() => {
  console.log(bot.user.username + " is online!");
  bot.user.setActivity("Construindo Casinhas");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  var messageArrayResponse = [
    "Arou",
    "Aruou",
    "Auruou",
    "Ar08",
    "Sai martin, sai martin, sai martin!",
    "Pelo menos ele não te finalizou!",
    "Vamo pegar o jairdrop!",
    "Tenho um prágranada e não tenho medo de usar!",
    "Olha minha ixcailaite di or",
    "Esses bots ficam cantando, ai não da pra jogar!",
    "Amigooooooooooooooooooooooooooooooooooo",
    "Necessito de balitas chiquititas",
    "Bétu carrero pscììllll",
    "Villian Clavejo",
    "To aqui jogando com os famosos Terry Crews, Martin Lawrence e o Willian Clavejo",
    "Paciencia é uma virude",
    "Nunca morri aqui... e morreu",
    "Tem armadrila ai!",
    "Pc de madeira",
    "Quantos anos você tem tereu teu teu",
    "Copacabâna mâno!",
    "Café dokaebi",
    "Os cara ficam cantando aí não dá pra jogar"
  ];

  var randomNumberOptions = {
    min: 0,
    max: messageArrayResponse.length - 1,
    integer: true
  }
  
  switch(cmd){
    case prefix+"arou":
      var randomNumber = rn(randomNumberOptions);
      return message.channel.send(messageArrayResponse[randomNumber], {
        tts: true
      });
    break;
    case prefix+"sai":
      return message.channel.send(messageArrayResponse[4], {
        tts: true
      });
    break;
    case prefix+"finalizou":
      return message.channel.send(messageArrayResponse[5], {
        tts: true
      });
    break;
    case prefix+"jairdrop":
      return message.channel.send(messageArrayResponse[6], {
        tts: true
      });
    break;
    case prefix+"pragranada":
      return message.channel.send(messageArrayResponse[7], {
        tts: true
      });
    break;
    case prefix+"dior":
      return message.channel.send(messageArrayResponse[8], {
        tts: true
      });
    break;
    case prefix+"cantando":
      return message.channel.send(messageArrayResponse[9], {
        tts: true
      });
    break;
    case prefix+"amigo":
      return message.channel.send(messageArrayResponse[10], {
        tts: true
      });
    break;
    case prefix+"chiquititas":
      return message.channel.send(messageArrayResponse[11], {
        tts: true
      });
    break;
    case prefix+"carrero":
      return message.channel.send(messageArrayResponse[12], {
        tts: true
      });
    break;
    case prefix+"villian":
      return message.channel.send(messageArrayResponse[13], {
        tts: true
      });
    break;
    case prefix+"famosos":
      return message.channel.send(messageArrayResponse[14], {
        tts: true
      });
    break;
    case prefix+"paciencia":
      return message.channel.send(messageArrayResponse[16], {
        tts: true
      });
    break;
    case prefix+"morri":
      return message.channel.send(messageArrayResponse[17], {
        tts: true
      });
    break;
    case prefix+"armadrila":
      return message.channel.send(messageArrayResponse[18], {
        tts: true
      });
    break;
    case prefix+"madeira":
      return message.channel.send(messageArrayResponse[19], {
        tts: true
      });
    break;
    case prefix+"tereu":
      return message.channel.send(messageArrayResponse[20], {
        tts: true
      });
    break;
    case prefix+"copacabana":
      return message.channel.send(messageArrayResponse[21], {
        tts: true
      });
    break;
    case prefix+"dokaebi":
      return message.channel.send(messageArrayResponse[22], {
        tts: true
      });
    break;
    case prefix+"martin":
      return message.channel.send("Martin Lawrence, membro funfador e também meu pai, ja gastou 12 salários minimos em itens cosméticos", {
        tts: true
      });
    break;
    case prefix+"blessed":
      return message.channel.send("Blessed, membro fundador, construtor de casinhas, fica cantando no discord", {
        tts: true
      });
    break;
    case prefix+"clavejo":
      return message.channel.send("Willian Clavejo, membro fundador, o famoso bala tensa e rei dos menes", {
        tts: true
      });
    break;
    case prefix+"comandos":
      return message.channel.send("", {
        tts: true
      });
    break;
    case prefix+"help":
      return message.channel.send("", {
        tts: true
      });
    break;
  }
});

bot.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "boas-vindas");
  var role = member.guild.roles.find("name", "Visitante");
  var botRole = member.guild.roles.find("name", "Bot");
  var isBot = member.user.bot;

  if(isBot){
    if(botRole){
      member.addRole(botRole);
    }
  }else{
    if(role){
      member.addRole(role);
    }
  }
  
  if(!isBot){
    let guild = member.guild;
    let memberTag = member.user.tag;

    if(channel){
        channel.send(new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("Bem vindo(a)!")
        .setThumbnail(member.user.displayAvatarURL)
        .addField(":bust_in_silhouette: | Nome: ", `${member}`)
        .addField(":microphone2: | Bem vindo(a) ao servidor! ", `${member}`)
        .addField(":id: | Usuário: ", "**[" + `${member.id}` + "]**")
        .addField(":family_mwgb: | Você é o usuário número: ", `${member.guild.memberCount}`)
        .addField("Servidor: ", `${member.guild.name}`, true)
        .addField("Membros: ", member.guild.memberCount, true)
        .setTimestamp()
       );
     }
  }
});

bot.on("guildMemberRemove", member => {
  let channel = member.guild.channels.find("name", "boas-vindas");
  let memberAvatar = member.user.avatarUrl;
  var isBot = member.user.bot;
  
  if(!isBot){
    let guild = member.guild;
    let memberTag = member.user.tag;

    if(channel){
        channel.send(new Discord.RichEmbed()
        .setColor('RED')
        .setTitle("Adeus!")
        .setThumbnail(member.user.displayAvatarURL)
        .addField(":bust_in_silhouette: | Nome: ", `${member}`)
        .addField(":microphone2: | Saiu do servidor RIP", `${member}`)
        .addField("Servidor: ", `${member.guild.name}`, true)
        .addField("Membros: ", member.guild.memberCount, true)
        .setTimestamp()
       );
     }
  }
});

bot.on("messageDelete", (messageDelete) => {
  var isBot = messageDelete.author.bot;
  
  if(!isBot){
    let channel = bot.channels.find("name", "mensagens-deletadas");

    if(!channel) return;

    var currentdate = new Date();
    var datetime = " - " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " às "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();

    channel.send("A mensagem: " + "'" + `${messageDelete.content}` + "'" + " foi deletada pelo usuário: " + `${messageDelete.author.tag}` + datetime, {
      tts: false
    });
  }
});

bot.on("messageUpdate", (omsg, nmsg) => {
  var isBot = omsg.author.bot;
  if(!isBot){
    let channel = bot.channels.find("name", "mensagens-editadas");

    if(!channel) return;

    var currentdate = new Date();
    var datetime = " - " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " às "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();

    channel.send("A mensagem: " + "'" + `${omsg.content}` + "'" + " foi editada para: " + "'" + `${nmsg.content}` + "'" + " pelo usuário: " + `${omsg.author.tag}` + datetime, {
      tts: false
    });
  }
});

bot.on("guildMemberAdd", member => {
  var isBot = member.user.bot;
  let channel = bot.channels.find("name", "usuarios-adicionados");

  if(!channel) return;

  var currentdate = new Date();
  var datetime = " - " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " às "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
  
  if(isBot){
    channel.send("O bot: " + "'" + `${member}` + "'" + " foi adicionado ao servidor" + datetime, {
      tts: false
    });
  }else{
    channel.send("O usuário: " + "'" + `${member}` + "'" + " foi adicionado ao servidor" + datetime, {
      tts: false
    });
  }
});

bot.on("guildMemberRemove", member => {
  var isBot = member.user.bot;
  let channel = bot.channels.find("name", "usuarios-removidos");

  if(!channel) return;

  var currentdate = new Date();
  var datetime = " - " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " às "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
  if(isBot){
    channel.send("O bot: " + "'" + `${member}` + "'" + " foi removido do servidor" + datetime, {
      tts: false
    });
  }else{
    channel.send("O usuário: " + "'" + `${member}` + "'" + " foi removido do servidor" + datetime, {
      tts: false
    });
  }
});

bot.on('message', message => {
  switch(message.content.toUpperCase()) {
      case '?RESET':
          resetBot(message.channel);
          break;
  }
});

function resetBot(channel) {
  channel.send('Resetting...')
  .then(msg => bot.destroy())
  .then(() => bot.login(process.env.TOKEN));
}

bot.login(process.env.TOKEN);
