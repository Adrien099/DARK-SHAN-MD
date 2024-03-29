const { cmd } = require('../lib')
const { IOSNEWS } = require('ios-news')

cmd({
        pattern: "ios",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
      const data = await IOSNEWS()
      const ios = data.latest()
      

      const kushan = `🗞️ *DARK SHAN MD IOS NEWS*\n
      ⌨️ TITLE ${data.ios.title}\n\n
      💎 DESCRIPTION ${data.ios.desc}\n\n
      🎗️ LINK ${data.ios.link}\n\n
©️ POWER BY DARK SHAN MD`

    await Void.sendMessage(citel.chat, { image: { url: data.ios.images }, caption: kushan }, { quoted: citel })

    })
