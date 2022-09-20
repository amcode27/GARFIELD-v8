// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🔮'] // 👈 Enter your Emoji 
global.emoji02 = ['🪀'] //👈 Enter your Emoji
global.notice = ` 
*Hi 🥰 I m*
*◥དAdheBaworཌ◤*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+6282138037447'] //👈  Enter Your number
global.premium =  ['+6285211112701'] //👈  Enter Your number
global.ownernomer = '+6282138037447' //👈  Enter Your number
global.ownername = '🪀◥དAdheBaworཌ◤' //👈 Enter Your name
global.botname = '꧁ঔৣ☬AMͥcͣoͫde27☬ঔৣ꧂' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ◥དAdheBaworཌ◤' //👈 Enter Your Name
global.ig = 'https://youtube.com/c/JasBiruLangit?sub_confirmation=1' // 👈 You Can change this your choice
global.region = 'Cilacap, Jawa Tengah, Indonesia' // 👈 You Can change this your choice
global.sc = 'https://bit.ly/CekDISINIIII'
global.fbt = 'Klik Aja' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.amcode27@.my.id/'// 👈 Enter your Social media link to follow now button
global.welcome = '*🪀 Selamat Datang Di Grup.*' // 👈 You Can change this your choice
global.bye = '*Selamat Tinggal Broo. Semoga Tenang Dialam Sana*' // 👈 You Can change this your choice
global.packname = '꧁ঔৣ☬AMͥcͣoͫde27☬ঔৣ꧂'  // 👈 You Can change this your choice 
global.author = '🪀◥དAdheBaworཌ◤' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://telegra.ph/file/8f24dd81957b7f5b990cb.jpg' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: '🪀 Selesai. . .', // 👈 You Can change this your choice
    admin: 'Fitur ini Hanya untuk Admin!', // 👈 You Can change this your choice
    botAdmin: 'Fitur ini Harus Admin Dulu!', // 👈 You Can change this your choice
    owner: 'Fitur Ini Hanya Untuk Pemilik/Owner!', // 👈 You Can change this your choice
    group: 'Fitur Ini Berjalan di Grup!', // 👈 You Can change this your choice
    private: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!', // 👈 You Can change this your choice
    bot: 'Fitur Ini Hanya Untuk Bot', // 👈 You Can change this your choice
    wait: '```Tunggu Broo...```', // 👈 You Can change this your choice
    error: 'Kesalahan! Mungkin Api Key Sudah Kadaluarsa🤔!', // 👈 You Can change this your choice
    endLimit: 'Limit/Batas Harian Anda Telah Habis, Batas Akan Direset Setiap 12 Jam',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "25"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
