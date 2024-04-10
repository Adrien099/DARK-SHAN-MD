const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "pk",
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
          const cap `🎶 *DARK SHAN MD TIKTOK DOWNLOADER* 🎶

◎ *TIKTOK PLAYER*◎

┎▸▹▸▹▸▹▸▹▸▹▸▹▸◆┉┄◉┄┉◆◂◃◂◃◂◃◂◃◂◃◂┒
📋 *TITLE* - ${key.result.info_video.title}

®️ *REGION* - ${key.result.info_video.region}



📉 *DURATION* - ${key.result.info_video.duration}

📥 ${key.result.info_video.total_download} *DOWNLOADS*

💽 ${key.result.info_video.total_download}

╭╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶ ╮

𝙍𝙀𝙋𝙇𝙔 𝘼 🔢 𝙉𝙐𝙈𝘽𝙀𝙍𝙎

*1  :   VIDEO 🎞️*

*2  :   AUDIO 🎧*

╰╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶ ╯`
Void.sendMessage(citel.chat, {image: {url: key.result.info_video.thumbnail}, caption: cap}, { quoted: citel });
                  } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
