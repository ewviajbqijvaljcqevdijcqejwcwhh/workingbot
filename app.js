const volk = require("discord.js");
const client = new volk.Client();
const devconf = require("./src/dev.json");
const Enmap = require("enmap");
client.config = require("./src/config.js");
client.command = new Enmap();
client.aliases = new Enmap();
const warnfold = require("./src/warn.json");
const util = require("./utilitys");
//-----------------------------------\\
const YTDL  = require("ytdl-core");
const chalk = require("chalk");
const express = require("express")
const app = express()
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const ms = require("ms");
const fs = require("fs");
const weather = require("weather-js");
const moment = require("moment");
require("moment-duration-format");
//---------------------------------- \\
require("./util/functionLoader")(client);
require("./util/eventLoader")(client);
require("./util/functions.js")(client);
//-----------------------------------\\
var servers = {};

function randomHex() {
    return '#' + (function co(lor){   return (lor +=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
        && (lor.length == 6) ?  lor : co(lor); })('');
}

function colora() {
    return "#" + (function co(lor){   return (lor +=
        [3,'f'][Math.floor(Math.random() * 2)])
        && (lor.length == 6) ? lor : co(lor); })('');
}

function infos() {
    return "#" + (function co(lor){   return (lor +=
        [3][Math.floor(Math.random() * 1)])
        && (lor.length == 6) ? lor : co(lor); })('');
}

function pong() {
    return "#" + (function co(lor){   return (lor+=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random() * 16)])
        && (lor.length == 6) ? lor : co(lor); })('');
}

function admincol() {
    return "#8E0B0B";
}

function squad() {
    return "0xC61717"
}

function play(connect, message) {
    var server = servers[message.guild.id];
    
    server.dispatcher = connect.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();
    
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connect, message);
        else connect.disconnect();
    });
}

var nyolclabda = [
    "Yes!",
    "Yes!",
    "No!",
    "No!",
    "I don't know!",
    "I don't know!",
    "Maybe",
    "Maybe",
    "Hm..",
    "Hm.."
];

var cat = [
    "http://images5.fanpop.com/image/photos/24900000/Pikacat-Pikachu-cat-pikachu-24981327-363-461.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2014/11/garfi-evil-grumpy-persian-cat-12.jpg",
    "https://i.ytimg.com/vi/iRXJXaLV0n4/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwmx7qDLn4NNA_WYbOwwG7bJIGXZ9uyyTVNnilfay0gW99NUB",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVCigQ1xKE5rhYyAhdmb35r-M_zCyySg8fnx2oUYW571RH5ER",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKVetY-lJp-FLTjPsGZITaT2tKVN9AT4AHDBYp626VITPmVox",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmYDPHFPYPJzwx_UKvMlDpTnTPjrqXwct-0APmoU1brIP1mi9",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEIuId3W2y_Ygl-F9f_4Izw7aDCTjJb5T1k8mOHcvMRJax52N",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuvmoBxIwaUtEwDAGBMNa8o9FynC2z_ZEwz5ed433J-0woOnF"
];

var parrots = [
    "https://fthmb.tqn.com/frjimh6Z8sJMYHHlHY0tazyzRRI=/2737x1820/filters:no_upscale()/budgerigar-parakeet-182203416-58ad972a5f9b58a3c97ae4ce.jpg",
    "http://www.rsfmagazine.com/wp-content/uploads/2014/09/Picnic-for-the-Parrots-SoCal-Parrot-Charity-Events-Best-Charities-for-Animals-For-A-Good-Cause.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUQ53zEM67of7yCGOvrAsGVYRCsTYqi3YjDDUvmqXrY-HOeE9Tw",
    "https://images.fineartamerica.com/images-medium-large/sulphur-crested-cockatoo-cacatua-thomas-marent.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Psittacus_erithacus_cucumber.jpg/220px-Psittacus_erithacus_cucumber.jpg",
    "https://i.pinimg.com/originals/8e/dd/a7/8edda74456db5121bc0cb5860a6d9f61.jpg",
    "https://echidnawalkabout.files.wordpress.com/2013/02/rainbow060711p05.jpg"
];

client.on("guildMemberAdd", function(member) {
    var wllog = member.guild.channels.find("name","welcome_log");
    if (!wllog) {
        return;
    }
    member.guild.channels.find("name", "welcome_log").sendMessage(member.toString() + ` Welcome the ${member.guild.name} Discord Server!`);
    var connect = new volk.RichEmbed()
    .setAuthor("Member Joined!", member.user.avatarURL || rmember.user.displayAvatarURL)
    .setColor(0x00FF00)
    .addField("Username",`${member.user.username}#${member.user.discriminator}`)
    .setDescription(`<${member.user.id}>`)
    member.guild.channels.find("name","welcome_log").sendEmbed(connect);
    var roles = ["375248876149538817", "375248876149538817"];
    if (roles.includes(member.roles.has)) {
        return;
    }
    member.addRole(member.guild.roles.get("375248876149538817"));
    member.addRole(member.guild.roles.get("371324316198895627"));

    var testmember2 = member.guild.members.get("350944127614976004");
    var testmember = member.guild.members.get("197990473246179329");
    var tms = [testmember, testmember2];
    if (!tms.includes(member.user.id)) {
        member.addRole(member.guild.roles.get("383959981327777813"));
        return;
    }
});

client.on("guildMemberRemove", function(rmember) {
    var wl = rmember.guild.channels.find("name","welcome_log");
    if (!wl) {
        return;
    }
    var disconnect = new volk.RichEmbed()
    .setAuthor("Member left!", rmember.user.avatarURL || rmember.user.displayAvatarURL)
    .setColor(0xFF0000)
    .addField("Username", `${rmember.user.username}#${rmember.user.discriminator}`)
    .setDescription(`<${rmember.user.id}>`)
    rmember.guild.channels.find("name", "welcome_log").sendEmbed(disconnect);
});

client.on("message", async function(message) {
    if (message.channel.type === "dm") {
        return console.log(`[DM] :${message.author.username}#${message.author.discriminator}: ${message.content} ${chalk.bgCyan.white("[/LOG]")}`);
    } else {
        console.log(`[${message.guild.name}] :${message.author.username}#${message.author.discriminator}: ${message.content} ${chalk.bgCyan.white("[/LOG]")}`);
    }

    var swearWords = ["loser", "fuck", "fuck you", "test"];
    if (swearWords.includes(message.content)) {
        return message.channel.send("Don't say bad words!");
    }

    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(devconf.prefix)) return;

    var args = message.content.substring(devconf.prefix.length).split(" ");

    if (message.channel.type === "dm") {
        return message.channel.send("Do not ask me in Direct Message!");
    }

    switch (args[0]) {
    //General
    case "help":
        if (args[1]) {
            switch (args[1].toLowerCase()) {
                case "ping":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *Bot sends the ping*`)
                    break;
                case "userinfo":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user] & v!${args[1]}\n***Description***: *The bot sends the mentioned user's info*`)
                    break;
                case "stats":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *You can see the bot statistics*`)
                    break;
                case "members":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *You can see the* ***Volk Squad*** *member list*`)
                    break;
                case "play":
                    message.channel.send(`**__Command usage__**: v!${args[1]} {youtube url}\n***Description***: *The bot play's your youtube url*`)
                    break;
                case "skip":
                    message.cahnnel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *You can skip music*`)
                    break;
                case "stop":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *You can stop music*`)
                    break;
                case "dice":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *Roll the dice and the bot says the number between 1-6*\n\nVersions: v!${args[1]} 20.sided, v!${args[1]}`);
                    break;
                case "attack":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user]\n***Description***: *You can attack a mentioned user*`);
                    break;
                case "race":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user]\n***Description***: *You can race with a mentioned user (The developer trying to create the 1v1v1 version)*`);
                    break;
                case "rps":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *You can play Rock, Paper or Scissors game with a mentioned user (Soon the developer create the choosing version [Now this is random])*`);
                    break;
                case "roulette":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *The bot spinning the wheel and says the number.*`);
                    break;
                case "8ball":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [question]\n***Description***: *You can say a question for the 8ball and he says an answer*`);
                    break;
                case "cat":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *The bot send a random cat picture*`);
                    break;
                case "parrot":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *The bot send a random parrot (or buggie) picture*`);
                    break;
                case "canvas":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [10 letters]\n***Description***: *The bot sends a picture with your words (Only 10 words now)*`);
                    break;
                case "fliptext":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [text]\n***Description***: *The bot flip your text down*`)
                    break;
                case "emoji":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [default emoji name]\n***Description***: *The bot sends your emoji in embed*`);
                    break;
                case "cemoji":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [custom emoji name]\n***Description***: *The bot sends your custom emoji (Soon i create a list for the custom emjis)*`);
                    break;
                case "reversetext":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *The bot move reverse your text*`)
                    break;
                case "tiny":
                    message.channel.send(`**__Command usage__**: v!${args[1]}\n***Description***: *the bot compress your text to tiny*`);
                    break;
                case "feedback":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [feedback message]\n***Description***: *You can send a feedback for the Developers chat*`);
                    break;
                case "bug-report":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [bug name (bugging command name)]\n***Description***: *You can send the the bug for the developers room*`);
                    break;
                case "mute":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user] + [reason]\n***Description***: *You can mute users*`);
                    break;
                case "unmute":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user]\n***Description***: *You can unmute users if you are an admin*`);
                    break;    
                case "kick":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user] + [reason]\n***Description***: *You can kick members from the guild*`);
                    break;
                case "warn":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user] + [reason]\n***Description***: *You can warn users*`);
                case "ban":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [mention user] + [reason]\n***Description***: *You can BAN members from the guild*`);
                    break;
                case "unban":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [banned user ID]\n***Description***: *You can unban members from the guild*`);
                    break;
                case "purge":
                    message.channel.send(`**__Command usage__**: v!${args[1]} [amount]\n***Description***: *The bot can purge messages*`);
                    break;
                default:
                    message.channel.send(`Can not find **${args[1]}** command help page.\nBut. The bot has the command use the v!bug-report to send a bug report to the developer. Thanks **@ATZ#0831**`)
            }
            return;
        }
        var help = new volk.RichEmbed()
        .setAuthor("Here are the bot help page!", `${client.user.avatarURL}`)
        .setDescription("The prefix:\n**v!{command}**\n\nU can see the commands help:\n**v!help __<command.name>__**")
        .addField("General", "`help - You can see the bot commands\nping - Yo can see the ping\nuserinfo [mention user] - You can see the user's info\nstats - You can see the bot status`")
        .addField("Squad", "`members - You can see Volk Squad member list`")
        .addField("Music", "`play {url} - The bot play's your music url (Only Youtube)\nskip - The bot skip the music\nstop - The bot stop the music and he disconnect the voice channel\n-------------------------------\ninfo [yt url] - The bot can send the song description [Now only Developer | Open Beta]\nlength [yt url] - the bot sends the song length in seconds`")
        .addField("Games", "`dice - The bot roll te dice and say the number\nattack [mention user] - you can attack other members with random weapons or moves\nrace [mention users] - You can race another users.\nrps [mention user] - You can play Rock, Paper, Scissors game with a mention user`\n{**new**} `roulette - You can play roulette with your friends`")
        .addField("Miscellaneous", "`8ball (question) - The bot says: Yes, no or i don't know for your question\ncat - The bot send a random cat\nparrot- the bot send a random parrot\ncemoji - The bot send custom emjois [soon i create a list of thr custom emojis]\nemoji {default emoji name} - the bot can send default Discord Emoticons (This is an add-on)\ncanvas [text] - the bot sends an image with your text`\n{**new**} `fliptext - The bot flips your text down`\n{**new**} `reversetext - The bot move to reverse your text`\n{**new**} `tiny - the bot change your text to tiny`")
        .addField("Notification", "`feedback - You can send a feedback to the developer\nbug-report - You can send bug's to the developer and he try to fix it`")
        .addField("Admin", "`mute [mention user], [reason] - The bot can mute members\nunmute [mention user] - The bot can unmute members\nkick [mention user], [reason] - The bot can kick members\nwarn [mention user], [reason] - Admins can warn users\npurge {amount} - The bot purge messages\nban [mention user], [reason] - The bot can ban members from this server!\nunban [user ID] - The bot can unban users`")
        .setColor(0xC61717)
        .setThumbnail(client.user.avatarURL)
        .setFooter("Volky | v4.91 Open - Beta", `${client.user.avatarURL}`)
        .setTimestamp()
    message.channel.sendEmbed(help);
        break;
    case "ping":
        var ping = new volk.RichEmbed()
        .setAuthor("This is the ping.")
        .setColor(0xC61717)
        .setDescription(`:ping_pong: Latency: ${Date.now() - message.createdTimestamp} **ms**\n:blue_heart:: ${Math.round(client.ping)} **ms**`)
        .setFooter("Volky | v4.91 Open - Beta", client.user.avatarURL)
        message.channel.sendEmbed(ping);
        break;
    case "userinfo":
        var member = message.guild.member(message.mentions.users.first()) || message.member;
            if (!member) {
                return message.reply("Please provied a MENTION");
            }
        const activityTypes = [
            'Playing',
            'Streaming',
            'Listening to',
            'Watching',
        ]; 
        const status = {
            online: "**Online**",
            idle: "**Idle**",
            dnd: "**Do not Disturb**",
            offline: "**Offline**"
        };
        var bot;
        if (member.user.bot === true) {
            bot = "Yes."
        } else {
            bot = "No."
        };
        const game = member.user.presence.game || {};
        var trillo = new volk.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setColor(0xC61717)
        .setDescription(`This is ${member.user.username}'s userinfo.`)
        .addField("Full name", `${member.user.username}#${member.user.discriminator}`, true)
        .addField("Nickname", (member.nickname) ? `${member.nickname}` : 'None', true)
        .addField("Registration date", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
        .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
        .addField("Discord ID", `${member.user.id}`, true)
        .addField("Status", `${status[member.user.presence.status]}`, true)

        .addField("Game", (game.name) ? `**${activityTypes[game.type]}** ${game.name} ${game.streaming ? `[(Streaming)](${game.url})` : ''}` : 'None', true)
        .addField("Bot user?", `${bot}`, true)
        .addField("Roles", `${member.roles.map(r => r.name).join(", ")}`)
        .setImage(member.user.avatarURL || member.user.displayAvatarURL)
        .setFooter("Volky | v4.91 Open - Beta", `${client.user.avatarURL}`)
        .setTimestamp()
    message.channel.sendEmbed(trillo);
        break;
    case "serverinfo":
        const dateformat = require("dateformat");

        const now = new Date();
        dateformat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const days = millis / 1000 / 60 / 60 / 24;

        const owner = message.guild.owner.user || {};
        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];

        message.channel.send(`${message.guild.name}\n***This message will dissappear in 60 seconds.***`).then(h => {
            h.delete(60000)
        });
        var serverinfo = new volk.RichEmbed()
        .setColor(0x6060FF)
        .addField("Created On", `${dateformat(message.guild.createdAt)}`, true)
        .addField("Days Since Creation", `${days.toFixed(0)}`, true)
        .addField("Default Channel", `${message.guild.defaultChannel}` || "Not found!")
        .addField("Region", `${message.guild.region}`, true)
        .addField("Member Count", `${message.guild.members.filter(m => m.presence.status !== "online").size} / ${message.guild.memberCount}`, true)
        .addField("Owner", `${owner.username}#${owner.discriminator} (${owner.id})`)
        .addField("Text Channels", `${message.guild.channels.filter(t => t.type === "text").size}`, true)
        .addField("Voice Channels", `${message.guild.channels.filter(v => v.type === "voice").size}`, true)
        .addField("Verification Level", `${verificationLevels[message.guild.verificationLevel]}`)
        .addField("Roles", `${message.guild.roles.size}`, true)
        .addField("Role Names", `${message.guild.roles.map(r => r.name).join(", ")}`)
        .setThumbnail(message.guild.iconURL || null)
        message.channel.sendEmbed(serverinfo).then(h => {
            h.delete(60000)
        });
        break;
    case "stats":
        const users = {
            dev: "〈shq.codes〉",
            developer: "ATZ [DEVOPS]"
        };
        const duration = moment.duration(client.uptime).format(" D [D], H [h], m [m], s [s]");
        const duration2 = moment.duration(client.uptime).format(" D [D], H [:], m [:], s");
        var computer = client.emojis.find("name", "desktopcomp");
        var time = util.NumberUtil.msToTime(client.uptime);

        var statsembed = new volk.RichEmbed()
        .setAuthor("Bot Stats", client.user.avatarURL)
        .setColor(0xFF4040)
        .setDescription(`\`\`\`asciidoc\n= STATISTICS =\n📊❯ RAM Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n⏱❯ Uptime     :: ${time.hours}:${time.minutes}:${time.seconds}:${time.milliseconds}\n🕹️❯ Users      :: ${client.users.size.toLocaleString()}\n💽❯ Servers    :: ${client.guilds.size.toLocaleString()}\n⌨️❯ Channels   :: ${client.channels.size.toLocaleString()}\n⚙️❯ Version    :: v4.91 Open - Beta\n👔❯ Developer  :: ${users.dev}\`\`\``)
        .setFooter("Volky | v2.35 |")
        .setTimestamp()
        message.channel.sendEmbed(statsembed);
        break;
    case "botinfo":
        var verified = client.emojis.find("name", "verified");
        var info = new volk.RichEmbed()
        .setAuthor("Bot info's", "http://i68.tinypic.com/2z5vdxc.png")
        .setDescription("**This is the bot info page.**")
        .setColor(infos())
        .addField("Bot name", `${client.user.username}#${client.user.discriminator} ${verified}`)
        .addField("Version", "v4.91 Open - Beta")
        .addField("Helper", "F. K.", true)
        .addField("Developer", "ATZ ߷߷߷߷", true)
        .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
        .setFooter("Volky | v4.91 Open - Beta", "http://i68.tinypic.com/2z5vdxc.png")
        .setTimestamp()
    message.channel.sendEmbed(info);
        break;
    case "afk":
        var afktext = args.slice(2).join(" ");
        if (args[1]) {
            switch (args[1]) {
                case "-admin":
                    var admins = ["347433443602202635"];
                    if (!admins.includes(message.author.id)) {
                        return message.channel.send("Give me food >:|");
                    }
                    message.channel.send(`Bot Admin ${message.author.tag} has been set to AFK: ${afktext}`);
                    break;
                case "-on":
                    var afkrole = message.guild.roles.find("name", "AFK");
                    if (!afkrole) {
                        return message.channel.send("This guild doesn't has **AFK** role!");
                    }
                    if (!afktext) {
                        return message.channel.send("Please write a message");
                    }
                    message.channel.send(`${message.author.tag} has been set to AFK: ${afktext}`);
                    message.member.addRole(message.guild.roles.find("name", "AFK"));
                    break;
                case "-off":
                    var afkrole = message.guild.roles.find("name", "AFK");
                    if (!afkrole) {
                        return message.channel.send("This guild doesn't has **AFK** role!");
                    }
                    if (!message.member.roles.has(afkrole.id)) {
                        return message.channel.send("You don't have **AFK** role!");
                    }
                    message.channel.send(`${message.author.tag} has been no longer to set AFK.`);
                    message.member.removeRole(message.guild.roles.find("name", "AFK"));
                    break;
                default:
                    message.channel.send("Invalid value! (-on [message], -off)")
            }
            return;
        }
        message.channel.send("AFK values: -on [message], -off");
        //var afk = new volk.RichEmbed()
        //.setAuthor(message.author.username, message.author.avatarURL)
        //.setDescription(`**${message.author.username}#${message.author.discriminator}** sent AFK\n\nAFK Reason:` + "`" + `${afktext}` + "`");
    //message.channel.sendEmbed(afk);
        break;
    //Squad
    case "members":
        //-------------------Ranks---------------------\\

        var leader = client.emojis.find("name", "leader");
        var volkmember = client.emojis.find("name", "vmember");
        var bot = client.emojis.find("name", "bot");
        var crown = client.emojis.find("name", "cmember");
        var verified = client.emojis.find("name", "verified");
        var mod = client.emojis.find("name", "mod");
        var globalmod = client.emojis.find("name", "glomod")
        var squadlogo = client.emojis.find("name", "squadlogo");
        var premium = client.emojis.find("name", "premium");
        var developer = client.emojis.find("name", "dev");
        var admin = client.emojis.find("name", "admin");

        //----------------------------------------------\\

        var membersembed = new volk.RichEmbed()
        .setAuthor("Volk Squad Member List", "https://cdn.discordapp.com/attachments/375247021923368971/375577806014382080/5198-256x256x32.png")
        .setColor(squad())
        .addField("Leader", `${leader}${premium}${developer}${globalmod} SHQ (ATZ)${verified}`)
        .addField("Members", `${volkmember}${crown}${globalmod} TheGreenCat${verified}\n\n${volkmember}${mod} Jonna${verified}\n${volkmember} Mitrvoy`)
        .addField("Bot", `${bot}${volkmember}${admin} Volky **⁽ᴮᴼᵀ⁾**`)
        .setFooter("Volky | v4.91 Open - Beta |", client.user.avatarURL)
        .setTimestamp()
    message.channel.sendEmbed(membersembed);
        break;
    case "ip":
        var ipmember = message.guild.member(message.mentions.users.first());
        if (!ipmember) {
            return message.channel.send("Please mention a user!");
        }
        message.channel.send(`${ipmember}`)
    //Music
    case "play":
        if (message.author.id !== devconf.ownerID) {
            return message.channel.send("Locked!");
        }
        if (!args[1]) {
            return message.channel.send("Please provide a `youtube URL`").then(e => {
                e.delete(10000);
            });
            message.delete();
        }
        if (!message.member.voiceChannel) {
            return message.channel.send("Please join a Voice Channel!").then(e => {
                e.delete(10000);
            });
            message.delete();
        }
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };
        //YTDL.getInfo(args[1], information);
        //if (args[1]) message.channel.send("Music " + information.title + " added to the queue")

        var server = servers[message.guild.id];

        server.queue.push(args[1]);
        
        var URL = args[1];

        YTDL.getInfo(URL, (err, info) => {
            if (err) {
                return message.channel.send('Invalid YouTube Link: ' + err).catch(console.error);
            }
            message.channel.send(`Added **${info.title}** to the queue!`).catch(console.error).then();
            var playembed = new volk.RichEmbed()
            .setDescription(`Music name: ${info.title}`)
            .setColor(0xFF0000)
            .addField("Lenght", `${info.length_seconds} sec`, true)
            .addField("Sended by", `${message.author.tag}`, true)
            .setThumbnail(`${info.thumbnail_url}`)
            .setTimestamp()
            message.channel.sendEmbed(playembed);
        });

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connect) {
            play(connect, message);
        });
        message.delete();
        break;
    case "info":
        if (message.author.id !== devconf.ownerID) {
            return message.channel.send("This is an Open Beta command. Only Owner. (Dangerous!)");
        }
        var URL = args[1];
        YTDL.getInfo(URL, (err, info) => {
            if (err) {
                return message.channel.send("Invalid Youtube Link: " + err).catch(console.error);
            }
            message.channel.send(`\`\`\`asciidoc\n== This is the description! ==\n\n${info.description}\`\`\``)
        });
        break;
    case "length":
        var URL = args[1];
        YTDL.getInfo(URL, (err, info) => {
            message.channel.send(`Song name: ${info.title}`);
            message.channel.send(`Length: ${info.length_seconds} seconds`).catch(console.error);
        });
        break;
    case "queue":
        YTDL.getInfo(URL, (info) => {
            
        });
        break;
    case "skip":
         if (message.author.id !== devconf.ownerID) {
            return message.channel.send("Locked!");
        }
        var server = server[message.guild.id];
    
        message.channel.send("Music skipped!").then(e => {
            e.delete(4000)
        });
        if (server.dispatcher) server.dispatcher.end();
        break;
    case "stop":
         if (message.author.id !== devconf.ownerID) {
            return message.channel.send("Locked!");
        }
        var modRole = message.guild.roles.find("name", "BotModerator");
        if (!modRole) {
            return message.channel.send("This guild doesn't has BotModerator role!");
        }
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("This command only Admin!");
        }
        if (!message.member.voiceChannel) {
            return message.channel.send("Join the Voice Channel!")
        }
        var server = servers[message.guild.id];
            
        message.channel.send("Music stopped!").then(e => {
            e.delete(4000)
        });
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
    //Games
    case "dice":
        var kuckaicon = client.emojis.find("name", "sideddice");
        if (args[1]) {
            switch (args[1].toLowerCase()) {
                case "20.sided":
                    var sided = [
                        `${kuckaicon} You rolled: **1**`,
                        `${kuckaicon} You rolled: **2**`,
                        `${kuckaicon} You rolled: **3**`,
                        `${kuckaicon} You rolled: **4**`,
                        `${kuckaicon} You rolled: **5**`,
                        `${kuckaicon} You rolled: **6**`,
                        `${kuckaicon} You rolled: **7**`,
                        `${kuckaicon} You rolled: **8**`,
                        `${kuckaicon} You rolled: **9**`,
                        `${kuckaicon} You rolled: **10**`,
                        `${kuckaicon} You rolled: **11**`,
                        `${kuckaicon} You rolled: **12**`,
                        `${kuckaicon} You rolled: **13**`,
                        `${kuckaicon} You rolled: **14**`,
                        `${kuckaicon} You rolled: **15**`,
                        `${kuckaicon} You rolled: **16**`,
                        `${kuckaicon} You rolled: **17**`,
                        `${kuckaicon} You rolled: **18**`,
                        `${kuckaicon} You rolled: **19**`,
                        `${kuckaicon} You rolled: **20**`
                    ];
                    message.channel.send(sided[Math.floor(Math.random() * sided.length)]);
            }
            return;
        }
        var kocka = [
            `:game_die: You rolled: **1**`,
            `:game_die: You rolled: **2**`,
            `:game_die: You rolled: **3**`,
            `:game_die: You rolled: **4**`,
            `:game_die: You rolled: **5**`,
            `:game_die: You rolled: **6**`
        ];
        message.channel.send(kocka[Math.floor(Math.random() * kocka.length)]);
        break;
    case "race":
        var randomnumber = [
            `*15* **m**`,
            `*83* **m**`,
            `*571* **m**`,
            `*169* **m**`,
            `*194* **m**`,
            `*267* **m**`
        ];
        var racewin = [
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` lost. :second_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` lost. :second_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` lost. :second_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`
        ];
        var member = message.guild.member(message.mentions.users.first());
        if (!member) {
            return message.channel.send("Please mention a member!");
        }
        message.channel.send("**Starting race...**").then(edit => {
            edit.edit("**Starting race.**"),
            edit.edit("**Starting race..**"),
            edit.edit("**Starting race...**"),
            edit.edit("**Starting race....**"),
            edit.edit(`${message.author.username} :vs: ${member.user.username}\n\n:checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:...**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username}\n\n :checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:..**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username}\n\n :checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:.**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username}\n\n :checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username}\n\n :checkered_flag: **${message.author.username}** ${racewin[Math.floor(Math.random() * racewin.length)]}`)
        });
        break;
    case "race_v2":
        var Betatester = ["347433443602202635", "305036075934547968", "183528733322248192", "224541412006428673"];
        var BETA = message.guild.roles.find("name","BETA");
        if (!Betatester.includes(message.author.id)) {
            return message.channel.send("You are not in the Beta tester list!");
        }
        var randomnumber = [
            `*15* **m**`,
            `*83* **m**`,
            `*571* **m**`,
            `*169* **m**`,
            `*194* **m**`,
            `*267* **m**`
        ];
        var racewin = [
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` lost. :second_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` lost. :second_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` lost. :second_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`,
            ` win. :first_place: (He ran ${randomnumber[Math.floor(Math.random() * randomnumber.length)]})`
        ];
        var member = message.guild.member(message.mentions.users.first());
        var member2 = message.guild.member(message.mentions.users.last());
        if (!member) {
            return message.channel.send("Please mention a member!");
        }
        if (!member2) {
            return message.channel.send("Please mention a second member!");
        }
        message.channel.send("**Starting race...**").then(edit => {
            edit.edit("**Starting race.**"),
            edit.edit("**Starting race..**"),
            edit.edit("**Starting race...**"),
            edit.edit("**Starting race....**"),
            edit.edit(`${message.author.username} :vs: ${member.user.username} :vs: ${member2.user.username}\n\n:checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:...**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username} :vs: ${member2.user.username}\n\n :checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:..**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username} :vs: ${member2.user.username}\n\n :checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:.**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username} :vs: ${member2.user.username}\n\n :checkered_flag: **${member.user.username} and ${message.author.username} are racing please wait for a result :checkered_flag:**`),
            edit.edit(`${message.author.username} :vs: ${member.user.username} :vs: ${member2.user.username}\n\n :checkered_flag: **${message.author.username}** ${racewin[Math.floor(Math.random() * racewin.length)]}`)
        });
        break;
    case "attack":
        var whowinz = [
            `won the battle!`,
            `won the battle!`,
            `won the battle!`,
            `won the battle!`,
            `won the battle!`,
            `lost. Better luck next time!`,
            `lost. Better luck next time!`,
            `lost. Better luck next time!`,
        ];
        var items = [
            "punches",
            "sword",
            "AK - 47",
            "Illuminati",
            "Crossbow",
            "Bow",
        ];
        var items2 = [
            "punches",
            "sword",
            "AK - 47",
            "Illuminati",
            "Crossbow",
            "Bow",
        ];

        var member = message.guild.member(message.mentions.users.first());
        if (args[1]) message.channel.send(`**${message.author.username} VS ${member.user.username}**\n\n**${message.author.username}** uses **${items[Math.floor(Math.random() * items.length)]}**\n**${member.user.username}** uses **${items2[Math.floor(Math.random() * items2.length)]}**\n\n${message.author.username} has ${whowinz[Math.floor(Math.random() * whowinz.length)]}`);

        if (!args[1]) message.channel.send("Sorry, you haven't attacked a mention user!");
            return;
        break;
    case "rps":
        var lolo = message.mentions.users.first();
        if (!lolo) {
            return message.channel.send("Please mention a user.");
        }
        var rpslol = [
            `You picked **scissors** I picked **rock**!\n\nI win!`,
            `You picked **scissors** I picked **paper**!\n\nYou win!`,
            `You picked **scissors** I picked **scissors**!\n\nIt appears to be a tie!`,
            `You picked **rock** I picked **rock**!\n\nIt appears to be a tie!`,
            `You picked **rock** I picked **paper**!\n\nI win!`,
            `You picked **rock** I picked **scissors**!\n\nI win!`,
            `You picked **paper** I picked **rock**!\n\nYou win!`,
            `You picked **paper** I picked **paper**!\n\nIt appears to be a tie!`,
            `You picked **paper** I picked **scissors**!\n\nI win!`,
        ];
        var userpslol = [
            `You picked **scissors** ${lolo.username} has picked **rock**!\n\n${lolo.username} has won!`,
            `You picked **scissors** ${lolo.username} has picked **paper**!\n\n${message.author.username} has won!`,
            `You picked **scissors** ${lolo.username} has picked **scissors**!\n\nIt appears to be a tie!`,
            `You picked **rock** ${lolo.username} has picked **rock**!\n\nIt appears to be a tie!`,
            `You picked **rock** ${lolo.username} has picked **paper**!\n\n${lolo.username} has won!`,
            `You picked **rock** ${lolo.username} has picked **scissors**!\n\n${lolo.username} has won!`,
            `You picked **paper** ${lolo.username} has picked **rock**!\n\n${message.author.username} has won!`,
            `You picked **paper** ${lolo.username} has picked **paper**!\n\nIt appears to be a tie!`,
            `You picked **paper** ${lolo.username} has picked **scissors**!\n\n${lolo.username} has won!`,
        ];
        if (!args[1]) return message.channel.send(`${rpslol[Math.floor(Math.random() * rpslol.length)]}`);
        message.channel.send(`${userpslol[Math.floor(Math.random() * userpslol.length)]}`);
        break;
    case "roulette":
        var wheelico = client.emojis.find("name", "ruwheel");
        var gEc = client.emojis.find("name", "gecircle");
        var roulettenumbers = [ 
            `${wheelico} The roulette number is: **0** {Green ${gEc}}`, 
            `${wheelico} The roulette number is: **28** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **9** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **26** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **30** {Red :red_circle:}`, 
            `${wheelico}  The roulette number is: **11** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **7** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **20** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **32** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **17** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **5** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **22** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **34** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **15** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **3** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **24** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **36** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **13** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **1** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **00** {Green ${gEc}`, 
            `${wheelico} The roulette number is: **27** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **10** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **25** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **29** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **12** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **8** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **19** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **31** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **18** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **6** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **21** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **33** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **16** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **4** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **23** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **35** {Black :black_circle:}`, 
            `${wheelico} The roulette number is: **14** {Red :red_circle:}`, 
            `${wheelico} The roulette number is: **2** :black_circle:}`, 
            `${wheelico} The roulette number is: **0** {Green ${gEc}}` 
        ];

        message.channel.send("Spinning the wheel").then(r => {
            r.edit(`${wheelico} Spinning the wheel.`)
            r.edit(`${wheelico} Spinning the wheel..`)
            r.edit(`${wheelico} Spinning the wheel...`)
            r.edit(`${wheelico} Spinning the wheel..`)
            r.edit(`${wheelico} Spinning the wheel.`)
            r.edit(`${wheelico} Spinning the wheel`)
            r.edit(`${wheelico} Spinning the wheel.`)
            r.edit(`${wheelico} Spinning the wheel..`)
            r.edit(`${wheelico} Spinning the wheel...`)
            r.edit(`${wheelico} Spinning the wheel..`)
            r.edit(`${wheelico} Spinning the wheel.`)
            r.edit(roulettenumbers[Math.floor(Math.random() * roulettenumbers.length)])
        });
        break;
    case "rpsbeta":
        var admins = ["347433443602202635", "222794789567987712", ""];
        if (!admins.includes(message.author.id)) {
            return message.channel.send("You don't has permission to use this command (Only admins)");
        }
        if (args[1]) {
            switch (args[1]) {
                case "Rock":
                    var rocktypes = [
                        `You picked **${args[1]}**. I picked **Scissors**.\n**${args[1]}** wins.`,
                        `You picked **${args[1]}**. I picked **Paper**.\n**Paper** wins.`,
                        `You picked **${args[1]}**. I picked **Rock**.\nIt appears to be a tie!.`
                    ];
                    message.channel.send(rocktypes[Math.floor(Math.random() * rocktypes.length)]);
                    break;
                case "Paper":
                    var papertypes = [
                        `You picked **${args[1]}**. I picked **Scissors**.\n**Scissors** wins.`,
                        `You picked **${args[1]}**. I picked **Rock**.\n**${args[1]}** wins.`,
                        `You picked **${args[1]}**. I picked **Paper**.\nIt appears to be a tie!.`
                    ];
                    message.channel.send(papertypes[Math.floor(Math.random() * papertypes.length)]);
                    break;
                case "Scissors":
                    var scissortypes = [
                        `You picked **${args[1]}**. I picked **Rock**.\n**Rock** wins.`,
                        `You picked **${args[1]}**. I picked **Paper**.\n**${args[1]}** wins.`,
                        `You picked **${args[1]}**. I picked **Scissors**.\nIt appears to be a tie!.`
                    ];
                    message.channel.send(scissortypes[Math.floor(Math.random() * scissortypes.length)]);
                    break;
                default:
                    message.channel.send("**Wrong usage!** You can only use Rock, Paper, Scissors!");
            }
            return;
        }
        var rpsembed = new volk.RichEmbed()
        .setAuthor("Rock, Paper, Scissors", client.user.avatarURL)
        .setColor(0x4793FF)
        .setDescription("This is a BETA command!\n\nYou can play Rock, Paper, Scissors with me.\n**Usage:** *Type v!rps.beta [Rock, Paper, Scissors]*")
        .setThumbnail("http://i67.tinypic.com/dfxe9e.png")
        .setFooter("Volky v4.92 Open - Beta |")
        .setTimestamp()
        message.channel.sendEmbed(rpsembed);
        break;
    case "coinflip":
        var coinflips = [
            "The side is: Tails",
            "The side is: Heads"
        ];
        if (args[1]) {
            switch (args[1]) {
                case "heads":
                    var heads = new volk.RichEmbed()
                    .setDescription(`Your choose is: **Heads**\n\n${coinflips[Math.floor(Math.random())]}`)
                message.channel.sendEmbed(heads);
                    break;
                case "tails":
                    var tails = new volk.RichEmbed()
                    .setDescription(`Your choose is: **Tails**\n\n${coinflips[Math.floor(Math.random)]}`) 
                message.channel.sendEmbed(tails);
                    break;
                default:
                    message.channel.send("You only can use **Heads** or **Tails**");
            }
            return;
        }
        var info = new volk.RichEmbed()
        .setDescription("This is the coinflip command.\n\n**Usage:** v!coinflip heads or tails")
        .setThumbnail("https://imgur.com/a/JVKuW")
        .setColor(0xD86F00)
        .setFooter("Volky | v4.92 Open - Beta |")
        .setTimestamp()
        message.channel.sendEmbed(info);
        break;
    //Miscellaneous
    case "8ball":
        if (args.slice(1).join(" ")) message.channel.send(nyolclabda[Math.floor(Math.random() * nyolclabda.length)]);
            else {
                message.channel.send("You don't put any questions!");
            }
        break;
    case "cat":
        var cats = new volk.RichEmbed()
        .setDescription("Cats are cute!")
        .setImage(cat[Math.floor(Math.random() * cat.length)])
        .setColor(randomHex())
    message.channel.sendEmbed(cats);
        break;
    case "cemoji":
        var icona = args.slice(1).join(" ");
        var cemojii = client.emojis.find("name", icona);
        if (!icona) {
            return message.channel.send("Emoji not found!");
        }
        var emojiembed = new volk.RichEmbed()
        .setDescription((cemojii) ? `${cemojii}` : `Not found!`) /**${{file: "https://imgur.com/a/AouKg"}} */
        .setColor(0xC61717)
    message.channel.sendEmbed(emojiembed);
        break;
    case "parrot":
        var parrot = new volk.RichEmbed()
        .setDescription("This is a parrot (or a budgie :smiley:)")
        .setImage(parrots[Math.floor(Math.random() * parrots.length)])
        .setColor(randomHex())
    message.channel.sendEmbed(parrot);
        break;
    case "schwerergustav":
        var schwgustav = new volk.RichEmbed()
        .setDescription("**Schwerer Gustav** (Heavy Gustav)")
        .setColor(0xFF6060)
        .addField("Type", "Railway Gun")
        .addField("In service", "1941 - 45")
        .addField("Used by", "Wehrmacht")
        .addField("Designer","Krupp")
        .addField("Unit Cost","7 Million __Reichsmark__")
        .addField("Weight","1,350 tonnes (1,490 short tons, 1,330 long tons)")
        .addField("Length", "47.3 metres (155 ft 2 in)")
        .addField("Barrel length", "32.5 metres (106 ft 8 in) L/40.6")
        .addField("Width", "7.1 metres (23 ft 4 in)")
        .addField("Height", "11.6 metres (38 ft 1 in)")
        .addField("Crew", "250 to assemble the gun in 3 days (54 hours), 2,500 to lay track and dig embankments. 2 Flak battalions to protect the gun from air attack.")
        .addField("Caliber", "Caliber	80 centimetres (31 in)")
        .addField("Elevation", "Max of 48°")
        .addField("Rate of fire", "1 round every 30 to 45 minutes or typically 14 rounds a day")
        .addField("Muzzle velocity", "820 m/s (2,700 ft/s) (HE)\n720 m/s (2,400 ft/s) (AP)")
        .addField("Effective firing range", "720 m/s (2,400 ft/s) (AP)\nEffective firing range	about 39,000 metres (43,000 yd)")
        .addField("Maximum firing range", "47,000 metres (51,000 yd) (HE)\n38,000 metres (42,000 yd) (AP)")
        .setImage("https://imgur.com/75p5S6P")
        .setImage("http://awesomeengineering.net/wp-content/uploads/2016/04/3-schwerer-gustav.jpg")
        .setFooter("Volky | v4.91 Open - Beta |")
        .setTimestamp()
        message.channel.sendEmbed(schwgustav);
        break;
    case "canvas":
        var text = args.slice(1).join(" ");
        if (!text) {
            return message.channel.send("Please write a word.")
        }
        if (!(text.length <= 15)) {
            return message.channel.send("Canvas is a __**BETA**__ command. Now u can only write 10 characters!");
        }
        var member = args.slice(1).join(" ");
        var Canvas = require('canvas')
        , Image = Canvas.Image
        , canvas = new Canvas(1100, 1100)
        , ctx = canvas.getContext('2d');
    
        ctx.font = '110px Impact';
        ctx.rotate(.0);
        ctx.fillText(`${args.slice(1).join(" ")}`, 100, 600);
        ctx.fillStyle = 'rgb(63,138,191)';
    
        var te = ctx.measureText('Awesome!');
        ctx.strokeStyle = 'rgba(63,138,191,0.5)';
        ctx.strokeText(`${args.slice(1).join(" ")}`, 100, 600);
        ctx.beginPath();
        ctx.lineTo(50, 102);
        ctx.lineTo(50 + te.width, 102);
        ctx.stroke();
        message.channel.send({file: canvas.toBuffer()}) 
        break;
    case "fliptext":
        var mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        const OFFSET = '!'.charCodeAt(0);

        if (args.length < 1) {
            return message.channel.send("You must provide text to flip!");
        }
        message.channel.send(args.slice().join(" ").split(" ")).then(e => 
            e.edit(
                args.slice(1).join(" ").split("")
                .map(c => c.charCodeAt(0) - OFFSET)
                .map(c => mapping[c] || " ")
                .reverse().join(" ")
            )
        );
        break;
    case "reversetext":
        if (args.length < 1) {
            return message.channel.send("You must provide text to reverse!");
        }
        message.channel.send(args.slice(1).join(" ").split("")).then(e => 
            e.edit(args.slice(1).join(" ").split("").reverse().join(""))
        );
        break;
    case "tiny":
        const mappings = (function (object) {
            let output = [];
        
            for (let key in object) {
                output.push({
                    regex: new RegExp(key, 'ig'),
                    replacement: object[key]
                });
            }
        
            return output;
        })({
            a: '\u1D00',
            b: '\u0299',
            c: '\u1D04',
            d: '\u1D05',
            e: '\u1D07',
            f: '\uA730',
            g: '\u0262',
            h: '\u029C',
            i: '\u026A',
            j: '\u1D0A',
            k: '\u1D0B',
            l: '\u029F',
            m: '\u1D0D',
            n: '\u0274',
            o: '\u1D0F',
            p: '\u1D18',
            q: '\u0071',
            r: '\u0280',
            s: '\uA731',
            t: '\u1D1B',
            u: '\u1D1C',
            v: '\u1D20',
            w: '\u1D21',
            x: '\u0078',
            y: '\u028F',
            z: '\u1D22'
        });
        if (args.length < 1) {
            throw 'You must provide some text to shrink!';
        }
    
        let output = args.slice(1).join(' ');
        mappings.forEach(replacer => output = output.replace(replacer.regex, replacer.replacement));
    
        message.delete();
        message.channel.send(output);
        break;
    /**case "search":
        message.channel.send({
            embed: {
                type: "rich",
                title: "Google Search",
                description: '[' + args.slice(1).toString().replace(/,/g, ' ') + '](https://www.google.com/search?hl=en_US&q=' + args.slice(1).toString().replace(/,/g, '+') + ')',
                color: 0x6060FF
            }
        });
        break;*/
    //Notification
    case "feedback":
        message.delete();
        var fbmsg = args.slice(1).join(" ");
        if (fbmsg < 1) {
            return message.channel.send("Please write a feedback!");
        }
        if (!fbmsg) {
            return message.channel.send("`ERROR`\nUsage: v!feedback [message]")
        }
        var feddbackembed = new volk.RichEmbed()
        .setAuthor("Feedback REQUEST", "https://feedback-coach.com/wp-content/uploads/2017/04/FeedbacK-Solid-PNG.png")
        .setColor(0x6060FF)
        .setDescription("Feedback sended!")
        .addField("REQUEST Sender", `**${message.author.tag}**.`)
        .addField("From", `"${message.guild.name}" guild.`)
        .addField("Message", `'${fbmsg}'`)
        .setThumbnail("https://feedback-coach.com/wp-content/uploads/2017/04/FeedbacK-Solid-PNG.png")
        .setFooter("Feedback | Volky | v4.91 Open - Beta", client.user.avatarURL)
        .setTimestamp()
        client.guilds.get("375244668457320448").client.channels.get("378981593718718464").sendEmbed(feddbackembed).then(icon => {
            icon.react("❌");
            icon.react("✅");
        });
        message.channel.send("Feedback sended to the Developer. 🔧").then(del => {
            del.delete(4000);
        });
        break;
    case "bug-report":
        message.delete();
        var bugmsg = args.slice(1).join(" ");
        if (bugmsg < 1) {
            return message.channel.send("Please write the bug name and where the bug");
        }
        var bugembed = new volk.RichEmbed()
        .setAuthor("BUG  Report", "")
        .setColor(0xFF6060)
        .setDescription(":x: Bug detected! :x:")
        .addField("REPORT Sender", `**${message.author.tag}**.`)
        .addField("From", `"${message.guild.name}" guild.`)
        .addField("Report message", `${bugmsg}`)
        client.guilds.get("375244668457320448").client.channels.get("379004451790520320").sendEmbed(bugembed).then(bug => {
            bug.react("🔧")
            bug.react("💤")
        });
        message.channel.send("Report sended to the Developer. 🔧").then(del => {
            del.delete(4000);
        });
        break;
    case "ticket":
        var ownerID = devconf.ownerID;
        if (message.author.id !== ownerID) {
            return message.channel.send("This is a **DEVELOPER** command!");
        }
        var tm = args.slice(1).join(" ");
        if (!tm) {
            return message.channel.send("Please write an idea.");
        }
        var te = new volk.RichEmbed()
        .setAuthor("TICKET")
        .setColor(0x6060FF)
        .setDescription("Ticket Support")
        .addField("Ticket sender", `**${message.author.tag}**`)
        .addField("From", `"${message.guild.name}" guild`)
        .addField("Ticket message", `${tm}`)
        client.guilds.get("375244668457320448").client.channels.get("379366150426984470").sendEmbed(te).then(e => {
            e.react("🔧")
            e.react("💤")
        });
        break;
    //Admin
    case "mute":
        var modRole = message.guild.roles.find("name","BotModerator");
        var mutedrole = message.guild.roles.find("name", "Muted");
        var modlog = message.guild.channels.find("name","mod-log");
        var reason = args.slice(2);
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission to use this command!");
        }
        if (!modlog) {
            return message.channel.send("You don't have **mod-log** channel!");
        }
        if (!message.mentions.users.size === 0) {
            return message.channel.send("You don't mentioned any member!");
        }
        if (!reason) {
            return message.channel.send("Please write a reason!");
        }
        var muteMember = message.guild.member(message.mentions.users.first());
        if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have `MANAGE_ROLES` permission!").catch(console.error);
        }
        muteMember.addRole(muteMember.guild.roles.find("name","Muted")).then(muteMember => {
            var muteembed = new volk.RichEmbed()
            .setAuthor("Moderation LOG")
            .setColor(admincol())
            .setDescription("Action: `MUTE`" + `\nName: ${muteMember.user.username}\nModerator: ${message.author.username}\n\nReason: **${reason}**`)
            .setTimestamp()
            message.guild.channels.find("name","mod-log").sendEmbed(muteembed);
        }).catch(console.error)
        break;
    case "unmute":
        var modRole = message.guild.roles.find("name","BotModerator");
        var muterole = message.guild.roles.find("name", "Muted");
        var modlog = message.guild.channels.find("name","mod-log");
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission to use this command!");
        }
        if (!modlog) {
            return message.channel.send("You don't have **mod-log** channel!");
        }
        if (message.mentions.users.size === 0) {
            return message.channel.send("You don't mentioned any member!");
        }
        var unmuteMember = message.guild.member(message.mentions.users.first());
        if (!unmuteMember.roles.has(muterole.id)) {
            return message.channel.send("This member doesn't has **Muted** role! You can't unmute non-muted members!");
        }
        if (!unmuteMember) {
            return message.channel.send("Invalid member!");
        }
        if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have `MANAGE_ROLES` permission!").catch(console.error);
        }
        unmuteMember.removeRole(unmuteMember.guild.roles.find("name","Muted")).then(unmuteMember => {
            var unmuteembed = new volk.RichEmbed()
            .setAuthor("Moderation LOG")
            .setColor(admincol())
            .setDescription("Action: `UNMUTE`" + `\nName: ${unmuteMember.user.username}\nModerator: ${message.author.username}`)
            .setTimestamp()
            message.guild.channels.find("name","mod-log").sendEmbed(unmuteembed);
        }).catch(console.error)
        break;
    case "ban":
        var modRole = message.guild.roles.find("name","BotModerator");
        var reason = args.slice(2).join(" ");
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission!").catch(console.error);
        }
        if (message.mentions.users.size === 0) {
            return message.channel.send("You don't mentioned any member!").catch(console.error);
        }
        var banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) {
            return message.channel.send("Invalid member!");
        }
        if (banMember === message.author.id) {
            return message.channel.send("You can't kick yourself!");
        }
        if (!banMember.bannable) {
            return message.channel.send("You don't have permission to ban this member!");
        }
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("I don't have `BAN_MEMBERS` permission!").catch(console.error);
        }
        banMember.ban().then(banMember => {
            var banembed = new volk.RichEmbed()
            .setAuthor("Moderation LOG")
            .setColor(admincol())
            .setDescription("Action: `BAN`" + `\nName: ${banMember.user.username}\nID: ${banMember.id}\n\nModerator: ${message.author.username}\n\nReason: **${reason}**`)
            .setTimestamp()
        message.guild.channels.find("name","mod-log").sendEmbed(banembed);
        banMember.user.sendEmbed(banembed);
        });
        break;
    case "unban":
        var modRole = message.guild.roles.find("name","BotModerator");
        var unbanMember = args[1];
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission!").catch(console.error);
        }
        if (!unbanMember) {
            return message.channel.send("You don't sended any bannished member ID!").catch(console.error);
        }
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("I don't have `BAN_MEMBERS` permission!").catch(console.error);
        }
        message.guild.unban(unbanMember);
        
        var unbanembed = new volk.RichEmbed()
            .setAuthor("Moderation LOG")
            .setColor(admincol())
            .setDescription("Action: `UNBAN`" + `\nID: ${unbanMember}\n\nModerator: ${message.author.username}`)
            .setTimestamp()
        message.guild.channels.find("name","mod-log").sendEmbed(unbanembed);
        break;
    case "kick":
        var modRole = message.guild.roles.find("name","BotModerator");
        var reason = args.slice(2).join(" ");
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission to use this command!").catch(console.error);
        }
        if (message.mentions.users.size === 0) {
            return message.channel.send("You don't mentioned any member!").catch(console.error);
        }
        var kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) {
            return message.channel.send("Invalid mention user!");
        }
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("I don't have `BAN_MEMBERS` permission!").catch(console.error);
        }
        if (kickMember === `${kickMember.user.username}`) {
            return message.channel.send("You can't kick yourself!");
        }
        if (!kickMember.kickable) {
            return message.channel.send("You don't have permission to kick this member!");
        }
        kickMember.kick().then(kickMember => {
            var kickembed = new volk.RichEmbed()
            .setAuthor("Moderation LOG")
            .setColor(admincol())
            .setDescription(`Action: KICK" + \nName: ${kickMember.user.username}\nID: ${kickMember.id}\n\nModerator: ${message.author.username}\n\nReason: **${reason}**`)
            .setTimestamp()
        message.guild.channels.find("name","mod-log").sendEmbed(kickembed);
        kickMember.user.sendEmbed(kickembed);
        }).catch(console.error);
        break;
    case "warn":
        var warnuser = message.guild.member(message.mentions.users.first());
        var modRole = message.guild.roles.find("name","BotModerator");
        var reason = args.slice(2).join(" ");
        var log = args;

        var ownerID = "347433443602202635";
        //if (message.member.roles.has(modRole.id)) {
        //    return message.channel.send("You don't have permission to use this command!");
        //}
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission to use. (Missing: BotModerator role. Ask to the guild admin)");
        }
        if (!modlog) {
            return message.channel.send("Sorry. You don't have modlog channel");
        }
        if (!warnuser) {
            return message.channel.send("Invalid mention!");
        }
        if (!reason) {
            return message.channel.send("Please write a reason!");
        }
        console.log(args);
        
        if (message.mentions.users.size < 1);
        var warnembed = new volk.RichEmbed()
        .setAuthor("Moderation LOG")
        .setColor(admincol())
        .setDescription(`Action: WARN\nMember: ${warnuser.user.username}\nModerator: ${message.author.username} \n\nReason: **${reason}**`)
        .setTimestamp()
        message.guild.channels.find("name","mod-log").sendEmbed(warnembed);
        warnuser.user.sendEmbed(warnembed);
        message.delete();
        break;
    case "purge":
        if (message.channel.type === "dm") {
            return message.channel.send("You can't give me commands in DM!");
        }
        var ownerID = "347433443602202635";
        var purgemember = message.guild.roles.find("name","BotModerator");
        var mod = message.guild.roles.find("name","BotCommander");
        if (!purgemember) {
            return message.channel.send("You don't have BotModerator role!");
        }
        if (!message.member.roles.has(purgemember.id)) {
            return message.channel.send("You don't have permission!").catch(console.error);
        }
        const user = message.mentions.users.first();
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        if (amount <= 1) {
            return message.channel.send("0 or 1 doesn't supported. Use 2 or higher!");
        }
        if (amount > 100) {
            return message.channel.send("Too high. Use 100 or lower!");
        } 
        if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Sorry, I don't have `MANAGE_MESSAGES` permission!");
        }
        if (!amount) return message.reply('You Must specify an amount to delete!');
        if (!amount && !user) return message.reply('You Must specify a user and amount, or just an amount, of messages to purge!');
        message.channel.fetchMessages({
            limit: amount,
            }).then((messages) => {
            if (user) {
                const filterBy = user ? user.id : Client.user.id;
                messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
            message.channel.bulkDelete(messages);
            console.log(chalk.bgCyan.white("[/LOG]") + chalk.bgBlack.white(` Deleted message amount: ${amount} `) + chalk.bgCyan.white("[/END]"));
        });
        break;
    case "bcast":
        let text32 = args.slice(1).join(" ");
        message.guild.channels.find("name", "logs").send(`\`\`\`asciidoc\n= Broadcast = :: ${text32}\`\`\``);
        message.delete();
        break;
    //Secret
    case "say":
        var saytext = args.slice(1).join(" ");
        message.delete();

        message.channel.send(saytext);
        break;
    case "pin":
        var modRole = message.guild.roles.find("name","Administration");
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission!");
        }
        var pinmessage = args.slice(1).join(" ");
        if (!pinmessage) {
            return message.channel.send("Please write anything");
        }
        message.channel.send("Message pinned: " + pinmessage).then(pn => {
            pn.pin()
        })
        message.delete();
        break;
    case "weather":
        if (args.length === 0) {
            return message.channel.send("Please write a location!");
        }
        weather.find({
            search: args.join(" "),
            degreeType: "C"
        }, function(err, result) {
            if (err) console.log(err);

            if (result.length === 0) {
                return message.channel.send("Location not found! Please try again or write another location.");
            }

            var current = result[0].current;
            var location = result[0].location;

            var weather = new volk.RichEmbed()
                .setDescription(`***${current.skytext}***`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setColor(0x6060FF)
                .setThumbnail(current.imageURL)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', `${location.degreetype}`, true)
                .addField('Temperature', `${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds', current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true);
            message.channel.sendEmbed(weather);
        });
        break;
    //Open BETA commands
    
    case "tesing":
        var modRole = message.guild.roles.find("name","BotModerator");
        if (!message.member.roles.has(modRole.id)) {
            return message.channel.send("You don't have permission!");
        }
        message.channel.send("Testing").then(t => {
            t.edit("Testing.")
            t.edit("Testing..")
            t.edit("Testing...")
            t.edit("Testing..")
            t.edit("Testing.")
            t.edit("Testing")
            t.edit("Testing.")
            t.edit("Testing..")
            t.edit("Testing...")
            t.edit("Testing done!")
        });
        break;
    case "connect":
        if (message.author.id !== devconf.ownerID) {
            return message.channel.send("Admin command!");
        }
        var channelguild = args.slice(1).join(" "); 
        var chnell = client.channels.find("name", `${channelguild}`);
        if (!channelguild) {
            return message.channel.send("This channel not found!");
        }
        message.guild.channels.get(chnell.id).join();
        message.channel.send(`Connected to: ${channelguild} channel`).then(e => {
            e.delete(3000)
        });
        break;
    case "disconnect":
        if (message.author.id !== devconf.ownerID) {
            return message.channel.send("Admin command!");
        }
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        message.channel.send(`Disconnected from the channel`).then(e => {
            e.delete(3000)
        });
        break;
    case "devvote":
        var dev = devconf.ownerID;
        if (message.author.id !== dev) {
            return message.channel.send("This is a Developer command!");
        }
        var votetext = args.slice(1).join(" ");

        var voteembed = new volk.RichEmbed()
        .setDescription(`Vote question: ${votetext}`)
        .addField("Developer", `${message.author.username}`)
        .setFooter("Volky | v4.91 Open - Beta |")
        .setTimestamp()
        message.channel.sendEmbed(voteembed).then(icons => {
            icons.react("✅"),
            icons.react("❌")
        });
        break;
    case "emoji":
        var emojiname = args.slice(1)[0];
        message.channel.send({
            embed: {
                color: 0xFFFF00,
                description: `:${emojiname}:`
            }
        });
        break;
    case "testmention":
        var member = message.mentions.users.first();
        if (!member) {
            return message.channel.send("You dont mentions any user!");
        }
        member.send("test");
        break;
    case "createrole":
    if (message.author.id !== devconf.ownerID) {
        return message.channel.send("You don't have permission to use this command!");
    }
        let name = args.slice(1)[0];
        let color = args.slice(2)[0];

        message.guild.createRole({
            name: name,
            color: color,
            permissions: []
        }).then(err => {
            console.error(err.stack);            
        });
        message.channel.send(`Role: ${name} created.\nColor: #${color}`)
        break;
    //Owner commands
    case "vote":
        var votetext = args.slice(1).join(" ");
        if (message.author.id !== devconf.ownerID) {
            return message.channel.send("You don't have permission!");
        }
        var voteembed = new volk.RichEmbed()
        .setAuthor("VOTE SYSTEM", client.user.avatarURL)
        .setColor(0x3030FF)
        .setDescription(`${message.author.username} started a vote.`)
        .addField(`Vote question`, ` ${votetext}`)
        .setThumbnail("http://thyblackman.com/wp-content/uploads/2010/10/vote.jpg")
        .setFooter("Volky | v4.91 Open - Beta |")
        .setTimestamp()
    message.channel.sendEmbed(voteembed).then(e => {
        e.react("✅");
        e.react("❌");
    });
        break;
    case "activate":
        if (args[1]) {
            switch (args[1].toLowerCase()) {
                case "squad":
                    var { sendEmbed } = new volk.RichEmbed()
                    .setAuthor(`Grat ${message.author.username}`, message.author.avatarURL)
                    .setColor(0xFF6060)
                    .setDescription("Welcome in the Volk Squad")
                    .addField("Invite link", "[Click here](https://discord.gg/fwJHpMu)")
                    .setFooter("Volky | v4.91 Open - Beta |")
                    .setTimestamp()
                    message.author.sendEmbed;
                    break;
            }
            return;
        }
        message.channel.send(`= Invalid command! = \n\n• Please use :: v!help :: to see all the commands! •`, {code: "asciidoc"});
        break;
    case "keszit":
        if (message.author.id !== devconf.ownerID) {
            return message.channel.send("you don1t have permission"),
            console.log(`${message.author.tag} tried to use ${args[0]} command!`);
        }
        var nev = args.slice(1).join(" ");
        message.guild.createChannel(nev, "voice");
        break;
    case "accept":
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires you to have role with Administrator!')
        var member = message.author;
        var text = args.slice(2).join(" ");
        let firstmentioned = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!firstmentioned) return message.channel.send(`Tag a user`);
        message.channel.send(`**${firstmentioned}**\nYour appeal has been accepted.**\nYour role is now **${text}**\nAccepter: **${message.author.username}#${message.author.discriminator}**`);
        firstmentioned.addRole(message.guild.roles.find("name", `${text}`));
        break;
    default:
        message.channel.send(`= Invalid command (${args[0]})! = \n\n• Please use :: v!help :: to see all the commands! •`, {code: "asciidoc"});
    }
});

//var bots = client.guilds.find("375244668457320448").members.filter(bot => ! bot.user.bot).size;
//var users = client.guilds.find("375244668457320448").members.filter(usr => ! usr.user).size;

client.on("ready", () => {
    var cguild = client.guilds.find("name", "Volk Squad");
    client.user.setPresence({
        game: {
            name: `v!help | ${cguild.members.size} member`,
            url: "https://twitch.tv/atz_js"
        }
    })
}); 

client.on("error", (e) => console.log(e));
client.on("warn", (e) => console.log(e));

process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: \n" + err.stack);
});

const init = async () => {
      client.levelCache = {};
      for (let i = 0; i < client.config.permLevels.length; i++) {
        const thisLevel = client.config.permLevels[i];
        client.levelCache[thisLevel.name] = thisLevel.level;
      }
};


client.login(devconf.token);