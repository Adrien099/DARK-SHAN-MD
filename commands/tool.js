const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

//---------------------------------------------------------------------------//


cmd({
            pattern: "wikipedia",
            alias :['wiki','wp'],
            react: "💃",
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

const response = await fetch(`https://erdwpe-api.herokuapp.com/api/search/wikimedia?text=${text}`);
  const wiki = await response.json();
console.log(wiki);
                    let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝚆𝙸𝙺𝙸𝙼𝙴𝙳𝙸𝙰 𝚂𝙷𝙴𝙰𝚁𝙲𝙷 ❯❯┉◉\n\n`;
      
        for (let i=1; i<36; i++){
  
textw +=`❒ TITLE : ${wiki.result[i].title}\n`;
textw +=`❒ SOURCE : ${wiki.result[i].source}\n\n`

        }

 return await citel.reply(textw );


})

//-----------------------------------------------------------------------------//

cmd(
    {
        pattern: "twitter",
        alias: ['tw'],
        category:"downloader",
        react: "🩵",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const fxd = await fetchJson(`https://api.erdwpe.com/api/dowloader/twitter?url=${text}`);

            if (!fxd || !fxd.result.HD) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: fxd.result.HD },
                    mimetype: "video/mp4",
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

//---------------------------------------------------------------------------------------//

cmd(
    {
        pattern: "gdrive",
        alias: ['gd','googledrive'],
        category:"downloader",
        desc: "google drive media download",

        react: "🎡",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const gdm = await fetchJson(`https://rest-api.akuari.my.id/downloader/gdrive2?link=${text}`);

            if (!gdm || !gdm.download) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: gdm.download },
                    mimetype: `${gdm.mimetype}`,
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
//----------------------------------------------------------------------------------------//

cmd({
            pattern: "playstore",
            alias :['gps','ps'],
            react: "🍄",
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

const response = await fetch(`https://rest-api.akuari.my.id/search/playstoresearch?query=${text}`);
  const gps = await response.json();
console.log(gps);
                    let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴 𝚂𝙷𝙴𝙰𝚁𝙲𝙷 ❯❯┉◉\n\n`;
      
        for (let i=1; i<16; i++){
  
textw +=`❒ TITLE : ${gps.hasil[i].title}\n`;
textw +=`❒ DEVELOPER : ${gps.hasil[i].developer}\n`;
textw +=`❒ APPID : ${gps.hasil[i].appId}\n\n`;
        }
                    
 return await citel.reply(textw);


})
//------------------------------------------------------------------------------------------------//

cmd(
    {
        pattern: "lexica",
        alias: ['lx'],
        category:"ai",
        react: "🎡",
        filename: __filename
    },
    async (Void, citel, text) => {

  if (!text) return

const webss = await fetchJson(`https://rest-api.akuari.my.id/ai/lexica?prompt=${text}`)

            citel.reply (`*lexica is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://rest-api.akuari.my.id/ai/lexica?prompt=${text}` ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)
