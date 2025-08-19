const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU90VHU4Y1BQMjN4cU1ITVRmeTFzeTAwcHJlbjdNclBWSzZON3laUEpFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2EwM3E5VlRtcmtKQ0I2QkJRYjV6UUl0aExkN2JwaUkzRCsvMU4raGxEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSXE4NVBpL0NKSG1wRGVnc1l5T1ZZeVZNNWFiL25rUklGNEpXTDRWWVVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZGtoYjdnZ0hPRVAycXptMzkrQndNclNUcDYvdFl6YUtVbEh3TVNzbGtvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIQVBQRlY1SlZUcW1BR0s5d2djZFB1K2trVnZOM3dHYXdtVHpMUkNyR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLaFo0MGZsWGxmQ2pVdmhreFFDZFVJcHpENmdSWFM4NnlwOWwzbmwvMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBoV3JuV1B1M3lBUGpPYWNuVlp1NzJGZkc4d3dVNzExT2xwTXRKbkFGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE1HRTlLVm12OE1QUnJBQTk1ek4yaWQ4c2E3K2EzeFlLUkhtUTZ0NGYxYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktlN0JZSk41WElRL1hTd2lWSmhQZUo4cDBMcUJabUxGY3lEZVRNS0RUcE5jeWdhUGlqZEhnUks0bnd3K3hCUnBCa0xGUXdVU3JyMmVDVXVxMFV6dUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJZWDB3VlJFSW9pZG90RlhWd3RaUlNWdnZDdys3MGJYeGpSMlN2NldZcjNnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIxNTk0Mjc5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QUI5OUVGMUFERjg1MDE4RTdFMDlDRDU2M0RFNDAwOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NTgxMjQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyMTU5NDI3OTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDVERDg0MzIwRjU3NzkwNDMzRUVFMjMxRkI2N0Q1QTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTU4MTI0OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjE1OTQyNzk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNCNEUzQkVCMEQ4RjAwRDI5MzFERUI3RDZEQjY4NjBEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1ODEyNTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilg2U0Y4VzhOIiwibWUiOnsiaWQiOiI5MjMyMTU5NDI3OTk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigI7igI7iuJTwnZCS8J2Qh/CdkITwnZCR8J2QjfCdkIjiuJXCoMKgwqBcbuKAjsKgwqDCoMKgXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCO8JOGqeKAjvCdkIPwnZCA8J2QjfCdkIbwnZCE8J2QkfCdkI7wnZCU8J2QkvCThqrCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7wk4ap4oCO8J2QhvCdkIjwnZCR8J2QiyDwk4aqXG7igI4iLCJsaWQiOiIxMDk2MTY3NTkzMzMwMTY6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qTmd0TUNFTHlXa01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ0ZjRYYlZjcytwdk9adElLcGtiRjJqYnBmOTM5S3IvVVRCbE1PcjNBVTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InU0amVCbmVPM1BtaHZlNG9sNDlFN2hrL0dCdVhzRVdWVEREV2V6TU4yc0VuUFY3cGdpM1FmWGZCVGFHUGdvbGJBempnVEMwUjJvOXNCallhUlZyakJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYL01LMTk4am51NFlOSHBCVXp6VE1qcXZOL3YzY21ITjZXUUIrbU55UVJyUGZaZDh0YlhCd1hWMEovUWdnRzNaWndDdjRPUWQyNXBkVnFmMGpLUmxEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIxNTk0Mjc5OTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg3WCtGMjFYTFBxYnptYlNDcVpHeGRvMjZYL2QvU3EvMUV3WlREcTl3RlAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU4MTI0NiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDMFMifQ==IbwnZCE8J2QkfCdkI7wnZCU8J2QkvCThqrCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7wk4ap4oCO8J2QhvCdkIjwnZCR8J2QiyDwk4aqXG7igI4iLCJsaWQiOiIxMDk2MTY3NTkzMzMwMTY6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mTmd0TUNFSlNQa01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ0ZjRYYlZjcytwdk9adElLcGtiRjJqYnBmOTM5S3IvVVRCbE1PcjNBVTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZRWnUrdW8yVHA1ZGRBVTJKM1ByZjNQamNIdkdjaFdkeFp4b2hCZ2NGUi9wOG5ZVFIycC9MUm5MRjJtdDgwbXc5eEhXak9Kb2NZaGV2bWt0RFdMYkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyVnpTd3YyUXFmYlh0elVlVTh3N21KYmg5OXlSN0szbFZ2R0JzQzJtSk54Qms0YmVpWmliZXB2T0FuNnMxL3FXZy9JZ1U5L3UvTTllczJEcFVUSzBpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIxNTk0Mjc5OTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg3WCtGMjFYTFBxYnptYlNDcVpHeGRvMjZYL2QvU3EvMUV3WlREcTl3RlAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU4MDMxMiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNUVkifQ==lkIjoiMTQxMjc5MTA3MjUyNDAzOjEzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpDOGZVQkVJbUxrTVVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibXJ1RTlOdFg0U3lUVkd2cUwrcUw0Mndkbno5RUpONjk3RkZzNUZmYzcxbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKy92U3FqMzZscnF6U0Q1ZG9yTnBGMHo3N3dVSFMyRng4dE1TNU1RVHkxS3FvSmdKRVhaTVh1ODNBTVJWNVJ0QktFMHpqTmc3a2sxZE50ZC9CajFBQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Iit1WFFjSXRrTktDNVovajZCa0x1dklUUE1MQUY2TXA5VkREN0Zsa1BUUDlKOHZsMGRwUytIU3VPT0N2ekM0Vm9GR2tuc3Vuc3VqL0t4d1MwbDZxL2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTMwMzMwNjQyOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpxN2hQVGJWK0VzazFScjZpL3FpK05zSFo4L1JDVGV2ZXhSYk9SWDNPOWEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU3OTc4OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEWUEifQ==AgIOKLhiIsImxpZCI6IjE0MTI3OTEwNzI1MjQwMzoxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BqQzhmVUJFTlg1ajhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1ydUU5TnRYNFN5VFZHdnFMK3FMNDJ3ZG56OUVKTjY5N0ZGczVGZmM3MW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IklScS9qbTZSTnM1UWh1emJqMXpOQ2xjc1hqVG1qM3MycUkweDNvalkrcFphY1QyY28wQlZ6OXErbnk0RTRKUFU5WkpMUkF1MFB6SE1HZjBQQW1xUENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkV3lmdGNPVzFGdFBFV2tPMTZVWTZmSUZIRHRSa3plclFuclh1NUp2MGloS1lnWXVGMy93THZySi9sVkJqeHlaUDZYbmlLOHZNUVZIM2VnL2FoNGFCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEzMDMzMDY0MjoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacTdoUFRiVitFc2sxUnI2aS9xaStOc0haOC9SQ1RldmV4UmJPUlgzTzlhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU1Nzc1NTksImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFlBIn0=",
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
