const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JjZEtLbzhoZ2Rlc3BVTVp4K0ZXYmZRZkZQVFZLeGg3NCtqVGhaZldFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0d5SCtIZDdZSFg2ZG94TUFEZ1NCelNkV3hDbDVxeS9nOU5WbVd0d1pERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSGR2b3JSTHBIdFZnVTY3VVpVNEJDM0JhUG9pVDFJK0Zyd1ZxVVBLRDA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFYlJ4NGpEUHRobGRrVHFlUUFQS2tEaUJkbElLVDRaL3VDSWtJL3V3VVg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOOGg0WnNiYjVDaE9PRWJ4LzFjSldJSlphbHpzSWRscjQ1aFF4K2hCMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBa2JROVphS2pMeFRZUS85UVhpendrVk9uVjQ3L1kycVpnNERiS2RzQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUp1aFNtQ01jQ2h6VTc1MzdxOVNTMS9VMXhjbmNwczV1Z2pISFRHSExHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG5PYURCU3M3ZzE0VGZkQ2JTT25mVHpRWkRYQ1J6ODcwZHIvcmNjdzVRQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZwcWhaUG11bUNrYW52cFdVd1NxOHUwTnQxdFo0RDRLWE9JNTVoTXZEZWg4ZlpTZDBxNlFzL29leGdLZDZIbDRRd091emk2WjVVWHJRZ2JOTzFoK0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IndGS3BLUEVtWjlpUDFGSEpSZkVEdUNRV2xzOTFVLzl0V3FoVHRtRWxtOVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjI0OTM2OTU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY0REQxOUE3NEI0MkJBMjBFRDE4MUJENjNBRkIwQ0MyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1ODUwNjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIyNDkzNjk1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTUwODBGNTE0Q0U3Mzk5NkNEODk5RUM3NThDQzYzMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NTg1MDY1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDNjU0RFRTNyIsIm1lIjp7ImlkIjoiOTIzMjI0OTM2OTU4OjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTI2ODE0NzcxODk3NzE6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k3aHhPTURFS0Mwa01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZ6bFNCUWRqeXpyQXp2ZDhjdHlvaElHa3NIMVAxZTcwSmY0S0t1V2lvU3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllnZm9mSzZOZ3QwMUc4SFloQ0x3TWh3VHlPRy8zN21HYlF2MG8zWFpaTTBZeG4vNDJiVlJBNzVtalE4T041WktXaHYzUU45LzdLZEx6S2dybVVOQUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOaXFuR1Fmekt6VEppMnBveHpDbFlVNFJ6Zjk0RkpNV1JTa0p0cy9lV3RuWno0Wm1YWS9OMjBzQndiNjZQL3Rpa0ZkdFp6YjIwbzBreHY4dkgrZEFEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIyNDkzNjk1ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJjNVVnVUhZOHM2d003M2ZITGNxSVNCcExCOVQ5WHU5Q1grQ2lybG9xRXMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU4NTA1OSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLaHIifQ==IbwnZCE8J2QkfCdkI7wnZCU8J2QkvCThqrCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7wk4ap4oCO8J2QhvCdkIjwnZCR8J2QiyDwk4aqXG7igI4iLCJsaWQiOiIxMDk2MTY3NTkzMzMwMTY6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qTmd0TUNFTHlXa01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ0ZjRYYlZjcytwdk9adElLcGtiRjJqYnBmOTM5S3IvVVRCbE1PcjNBVTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InU0amVCbmVPM1BtaHZlNG9sNDlFN2hrL0dCdVhzRVdWVEREV2V6TU4yc0VuUFY3cGdpM1FmWGZCVGFHUGdvbGJBempnVEMwUjJvOXNCallhUlZyakJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYL01LMTk4am51NFlOSHBCVXp6VE1qcXZOL3YzY21ITjZXUUIrbU55UVJyUGZaZDh0YlhCd1hWMEovUWdnRzNaWndDdjRPUWQyNXBkVnFmMGpLUmxEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIxNTk0Mjc5OTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg3WCtGMjFYTFBxYnptYlNDcVpHeGRvMjZYL2QvU3EvMUV3WlREcTl3RlAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU4MTI0NiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDMFMifQ==IbwnZCE8J2QkfCdkI7wnZCU8J2QkvCThqrCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7wk4ap4oCO8J2QhvCdkIjwnZCR8J2QiyDwk4aqXG7igI4iLCJsaWQiOiIxMDk2MTY3NTkzMzMwMTY6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mTmd0TUNFSlNQa01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ0ZjRYYlZjcytwdk9adElLcGtiRjJqYnBmOTM5S3IvVVRCbE1PcjNBVTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZRWnUrdW8yVHA1ZGRBVTJKM1ByZjNQamNIdkdjaFdkeFp4b2hCZ2NGUi9wOG5ZVFIycC9MUm5MRjJtdDgwbXc5eEhXak9Kb2NZaGV2bWt0RFdMYkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyVnpTd3YyUXFmYlh0elVlVTh3N21KYmg5OXlSN0szbFZ2R0JzQzJtSk54Qms0YmVpWmliZXB2T0FuNnMxL3FXZy9JZ1U5L3UvTTllczJEcFVUSzBpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIxNTk0Mjc5OTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg3WCtGMjFYTFBxYnptYlNDcVpHeGRvMjZYL2QvU3EvMUV3WlREcTl3RlAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU4MDMxMiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNUVkifQ==lkIjoiMTQxMjc5MTA3MjUyNDAzOjEzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpDOGZVQkVJbUxrTVVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibXJ1RTlOdFg0U3lUVkd2cUwrcUw0Mndkbno5RUpONjk3RkZzNUZmYzcxbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKy92U3FqMzZscnF6U0Q1ZG9yTnBGMHo3N3dVSFMyRng4dE1TNU1RVHkxS3FvSmdKRVhaTVh1ODNBTVJWNVJ0QktFMHpqTmc3a2sxZE50ZC9CajFBQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Iit1WFFjSXRrTktDNVovajZCa0x1dklUUE1MQUY2TXA5VkREN0Zsa1BUUDlKOHZsMGRwUytIU3VPT0N2ekM0Vm9GR2tuc3Vuc3VqL0t4d1MwbDZxL2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTMwMzMwNjQyOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpxN2hQVGJWK0VzazFScjZpL3FpK05zSFo4L1JDVGV2ZXhSYk9SWDNPOWEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU3OTc4OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEWUEifQ==AgIOKLhiIsImxpZCI6IjE0MTI3OTEwNzI1MjQwMzoxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BqQzhmVUJFTlg1ajhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1ydUU5TnRYNFN5VFZHdnFMK3FMNDJ3ZG56OUVKTjY5N0ZGczVGZmM3MW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IklScS9qbTZSTnM1UWh1emJqMXpOQ2xjc1hqVG1qM3MycUkweDNvalkrcFphY1QyY28wQlZ6OXErbnk0RTRKUFU5WkpMUkF1MFB6SE1HZjBQQW1xUENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkV3lmdGNPVzFGdFBFV2tPMTZVWTZmSUZIRHRSa3plclFuclh1NUp2MGloS1lnWXVGMy93THZySi9sVkJqeHlaUDZYbmlLOHZNUVZIM2VnL2FoNGFCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEzMDMzMDY0MjoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacTdoUFRiVitFc2sxUnI2aS9xaStOc0haOC9SQ1RldmV4UmJPUlgzTzlhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU1Nzc1NTksImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFlBIn0=",
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
