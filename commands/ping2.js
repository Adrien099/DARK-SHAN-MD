const Secktor = require('../lib')

Secktor.cmd({
        pattern: "kushan",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { speed } = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴅᴀʀᴋ sʜᴀɴ ᴍᴅ..```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       const pingMsg await Void.sendMessage(citel.chat, {text: '_𝐷𝐴𝑅𝐾 𝑆𝐻𝐴𝑁 𝑃𝑂𝑁𝐺_\n *' + (final - inital) + ' ms* ', edit: speed});
    


 await Void.relayMessage(citel.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        
      }
   }) 
 } );
