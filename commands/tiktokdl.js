const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "tk",
        alias: ['kk'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const wamod = await fetchJson(`https://rest-api.akuari.my.id/downloader/tiktok?link=${text}`);

            if (!wamod.result || !wamod.result.nowm) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: wamod.result.url},
                    mimetype: "video/mp4",
                    caption:'┏━━━━━━━━━━━━━┓\n\n🐹 * DARK SHAN MD  ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🐹\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ*: kushansewmina\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ ɴᴜᴍʙᴇʀ*:  wa.me//+9477xxxxxx\n\n┗━━━━━━━━━━━━━┛\n\n*ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
