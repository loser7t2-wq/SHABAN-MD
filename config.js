const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxGdkJLci82T3ZtUnBuUDFEQWxxV2NjMmhRakJTRzROZDJ2enlPR05tcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYy9SMU1hRGswRDlaLzl2RitwWmZVYWY1U3Jwdi9CSjNOV1B4SlFVZGpuUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUFV3VENKNGk1UUQvRU8zZk1kUXRyZlFMODhGT2VFcDBSODZpeWpLVUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cVhnaEoybHBSWXR4YnBmV0VIYXcxQU1MOEU4dVNMeVUxNEczUEhQOUZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNMzZiZFNxMkNHaUo4cTRCNWU3Q3hLZ051WkRITkYrcVpGK1R6VWFzRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBWSnJvcEduS3Q4ZWhWZE9QK09aeHNwUGhhZUhqbEFub0VNcm9NbzBOaDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BKOEFFdk9vTEpkMUxxVFZwYWlwWFRoNjFWbUZDNk1tdnZHWjVEUXMwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVU5WW1CUjBYUE9Yd250ZFYxbVpOWlpNNXpZQkNMd1ZRNXpLakVKSHcyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE2TmZDZmlEN3g5VnBmSWV4RCtkQTFKQWo3ZmRuV0JpU2FpN3NtMTNoankzRFY1VXl6WkdxazFad2xPSWI4dG9xcUc2VXR6Zm9XRWdjTkd2Z2xsSWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoieWVHMXlZSTdTMHl4OUFDZHFFWjRtYjB2bzBsdWVtK2hvNmZyVG5zS2JxMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMzAzMzA2NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTRFMjdERDQxNzc3QUVBREUwNzE3REQxREZDQjZGQTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTU3OTc5Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVdEWDlNNlciLCJtZSI6eyJpZCI6IjkyMzEzMDMzMDY0MjoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4KDICDwnZCMyZFzzaLNnG9vbSDwnZquz4POtyDSr86x0Y/RjyAv4oC58J2fuSDhr6QgICDigKMgICAg4oC5ICDipr8gIOKAuiAgICDigLkgIOKBlSAg4oC6ICAgIOKAuSAg4ombICDigLogICAg4oC5ICAg4ouGIiwibGlkIjoiMTQxMjc5MTA3MjUyNDAzOjEzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpDOGZVQkVJbUxrTVVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibXJ1RTlOdFg0U3lUVkd2cUwrcUw0Mndkbno5RUpONjk3RkZzNUZmYzcxbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKy92U3FqMzZscnF6U0Q1ZG9yTnBGMHo3N3dVSFMyRng4dE1TNU1RVHkxS3FvSmdKRVhaTVh1ODNBTVJWNVJ0QktFMHpqTmc3a2sxZE50ZC9CajFBQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Iit1WFFjSXRrTktDNVovajZCa0x1dklUUE1MQUY2TXA5VkREN0Zsa1BUUDlKOHZsMGRwUytIU3VPT0N2ekM0Vm9GR2tuc3Vuc3VqL0t4d1MwbDZxL2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTMwMzMwNjQyOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpxN2hQVGJWK0VzazFScjZpL3FpK05zSFo4L1JDVGV2ZXhSYk9SWDNPOWEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU3OTc4OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEWUEifQ==AgIOKLhiIsImxpZCI6IjE0MTI3OTEwNzI1MjQwMzoxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BqQzhmVUJFTlg1ajhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1ydUU5TnRYNFN5VFZHdnFMK3FMNDJ3ZG56OUVKTjY5N0ZGczVGZmM3MW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IklScS9qbTZSTnM1UWh1emJqMXpOQ2xjc1hqVG1qM3MycUkweDNvalkrcFphY1QyY28wQlZ6OXErbnk0RTRKUFU5WkpMUkF1MFB6SE1HZjBQQW1xUENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkV3lmdGNPVzFGdFBFV2tPMTZVWTZmSUZIRHRSa3plclFuclh1NUp2MGloS1lnWXVGMy93THZySi9sVkJqeHlaUDZYbmlLOHZNUVZIM2VnL2FoNGFCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEzMDMzMDY0MjoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacTdoUFRiVitFc2sxUnI2aS9xaStOc0haOC9SQ1RldmV4UmJPUlgzTzlhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU1Nzc1NTksImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFlBIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/93YvnSVH/shaban-md.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "CYBER-BOTZ V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Cʏʙᴇʀ-Bᴏᴛ ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "👑 ,🥀 ,🌹,💐,🌼,🍁, 🌱, 🌈, 🌝,🌛,🎏, 🎉, 💥, ✨,🎋,🏆,🎯 ,⏳, 🎼 ,🚀 ,🛳️, 🚀 ,🌺,🪂 🏄,🍀, 👑 💚,😍,🥰,💝,💖,💗,💓,💞,💕,❣️,💘,💟,🖤,🤎,💜,💫,🌸,💫,☹️,👑,💖,✨,✅,🎋,🌷,💐, 🌼,🌈,🥀,🦜, 🦚,🍒, 🍓, 🍭,🏍️,🌾,🌞,🌻,🌜,🌛,🌝,🌞, 😻, 🌈, 🥀,🔥,💥,🌟,⚡,✨,☀️,❄️,🫧,💦,🍇,🍼,🥎,🏏,🥊,🥋,🎗️,🎲,🎯,🚀🌺,🪂,🏄,🍀,🎁,🎈, 🎂,🎈,📝,🥇,🎊,🕳️,🎀,📒,💔,〽️,🇵🇰",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "CʏʙᴇʀBᴏᴛ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bᴏᴛ Cʏʙᴇʀ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *Cʏʙᴇʀ-Bᴏᴛ*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
