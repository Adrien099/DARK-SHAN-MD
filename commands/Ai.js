const { cmd, fetchJson } = require('../lib');
const fetch = require('node-fetch')


cmd(
    {
        pattern: "ai",
        category: "test",
        react: "🌷",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please give me text.");
                return;
            }

            const gpt = await fetchJson(`https://api.vihangayt.me/tools/chatgpt?q=${text}`);

            if (!gpt || !gpt.data) {
                citel.reply("Failed to fetch ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    text: {q: gpt.data },
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);


/*cmd({
            pattern: "ai1",
            react: "🌺",
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

          if (!text) return citel.reply (`*_Please give me text example. ai hi*`);
const response = await fetch(`https://api.vihangayt.me/tools/chatgpt?q=${text}`);
  const gpt = await response.json();*/
