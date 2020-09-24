0;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://vocr43.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment"); ////// DEV NINJA//////
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator"); ////// DEV ninja //////
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const { Client, Collection } = require("discord.js");

//
client.commands = new Collection();
client.aliases = new Collection();


client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`POLAT BOT`,];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

const yt = require("ytdl-core");

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (
    oldMember.voiceChannel === undefined &&
    newMember.voiceChannel !== undefined
  ) {
    const voiceChannel = client.channels.get("673300229524815892");
    voiceChannel.join().then(connnection => {
      let disp = yt("https://youtu.be/5zsvDfn2chI", {
        //linke voicaka
        audioonly: true
      });
      const dispatcher = connnection.playStream(disp);
    });
  } else if (newMember.voiceChannel === undefined) {
    const voiceChannel = client.channels.get("673300229524815892");
    voiceChannel.leave();
  }
});

//https://youtu.be/5zsvDfn2chI

//https://www.youtube.com/watch?v=z7w17QZbffs sewa sewa fandam





client.on("message", message => {
    if (message.content.startsWith("-bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });






client.login("NzU0NjMxNDA5NTY5NjI4MjEz.X13jRA.H0sLe9BZHIB2qM5DSuj6MpadDjA");
