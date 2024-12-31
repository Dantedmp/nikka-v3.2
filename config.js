//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349152645874";
global.owner = process.env.OWNER_NUMBER || "2349152645874";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JVbmhmTThGT0xsOEUvVldFVzFzZm9oR2lmekxhUmRPcktaRXVreDYzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1ZENnRSZkJDbURpSGlFVFZyUXpiL21FaXBBMzhWMUdFOVc0Uzc5bk55QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQU9JZzZKaGd3d1FiMmZrbzZDRVEwM3cranNTRTVoZHZta1RKMWlNTTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoN0dPY1llQXFKRDNVZ2FnM3gvR2VWQTZ4T1AzMlNTRkhsUDBDVUZKMXpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PNFdmUGtUUDVBMi9Hc1UybE5EZFMvaWczbjJ1VG4reVNKSWFFS2tLM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWRDM3NkRwVURPUUtJUGRGd3dSMEtXOVROSUJtUHhITTZUcHd1dmxPRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0UrRmNCREE0cVRqeGU4R0xYT1JjQ2pOb04zM21JS2ltSDV2U2lSR3JrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNG1zaXRGNUpEY0JkS3h2TFhwVUVYOXZyRHZCdDRCQ3hhck1MN29wWDN5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhtU3Z3UFN0bk1rMUVIUnVSSU9vWEd4QnVBeFFzWTVpbWdPa0VjMHBDaDdVVkVYTS9tQ0Jxak1PcDdCSHd0a01QRmluVndsWVY2dGVRaFlpMGIvcWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkUzbDVmVFNoNlR3V1QzL0c5ZmxJdlRaU2FCczJTSzRkbDlSNzNlL1JZL009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNmdzVwamxTUVJPV21sWW9OSkJMN2ciLCJwaG9uZUlkIjoiNjAxODVlOGEtZjBlNy00Zjk0LTg1NmQtZjk4NWIyOWZjNjg0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind5eHYwcUswYmNKR0FKUUZWVEtiTFdVQllEbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRys4dUVGVFpJd1pSeDRpYlE5SVlOTFRuMTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTkzUzM0TlQiLCJtZSI6eyJpZCI6IjIzNDkxNTI2NDU4NzQ6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2WnVrNFE5cnJQdXdZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVialdnR3M1WWdBdWNMbjZQbEpTNHpkVVVMK0o2NUlVVjBXWFJDTmJweFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjA2ZHdkQ1RMZzlseTlVMyt6SnpYVHFWWG1UM1BnT0VLaDc1K0ZPN2dFc0ZLWWtRZDQ0SjgyYkhoME53OERsNTNyUWhvb3dqZ0Z3MlJiNXpRVWFkN2pBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpM0Nyc3J6UkdKRi9sRHZWbFZkdkJKMUZpM3VLSDg5bVJ4VDZ6QTBiSGFQZlcxS2lLb2h2SWpkUWR0U3BkSWs1ZUlCUXNCTXc0cDhldEVsR1dtdFJnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTI2NDU4NzQ6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYm00MW9Cck9XSUFMbkM1K2o1U1V1TTNWRkMvaWV1U0ZGZEZsMFFqVzZjVSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NjQ2NTk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9WZCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "Dante1v4",
  ownername: process.env.OWNER_NAME || "DANTE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
