const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
let gis = require("async-g-i-s")
const axios = require('axios')
const fetch = require('node-fetch')
cmd({
    pattern: "apk",
    alias: ["downapk","playstore"],
    desc: "download playstore app",
    react: "📥",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, { 
        image: {
            url: icon,
        }, 
        caption: `
        \n ✧ *DARK SHAN MD  DOWNLOADER*
        \n━━━━━━━━━━━━━━━━━━
        
        \n 📚 *ᴀᴘᴘ ɴᴀᴍᴇ:* ${getname}
        
        \n ⬆️ *ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ:* ${lastupdate}
        
        \n 💻 *ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ:* ${packagename}
        
        \n 📊 *ꜰɪʟᴇ ꜱɪᴢᴇ:* ${size}`,
    })
    return Void.sendMessage(citel.chat, { 
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
        caption: `👑 *DARKSHAN-MD V1*`,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(` *❌ An error occurred while processing your request. Please try again later.* ${err}`);
  }
})
  //---------------------------------------------------------------------------//

(function(_0x2e8ba9,_0x281849){const _0x106111=_0x2e8ba9();function _0x4e4234(_0x3381e3,_0x26ce1e,_0x3fd659,_0x1cbd70){return _0x2766(_0x1cbd70- -0x275,_0x26ce1e);}function _0xd6bd88(_0x24048b,_0x1551fd,_0x37096f,_0x2d74c9){return _0x2766(_0x24048b-0x382,_0x2d74c9);}while(!![]){try{const _0x51e793=-parseInt(_0x4e4234(-0xe8,-0xf8,-0xf5,-0xed))/(-0x7aa+0x12ba+-0x95*0x13)+parseInt(_0x4e4234(-0x15c,-0x110,-0x119,-0x137))/(0x655*-0x1+-0x57*-0x12+0x39)+parseInt(_0xd6bd88(0x4e4,0x4c5,0x4e6,0x4ed))/(-0x3*0x941+0x1*0x189d+0x329)*(parseInt(_0x4e4234(-0xfc,-0xca,-0x105,-0xe3))/(0x590*0x1+0xdc9+0x2c3*-0x7))+-parseInt(_0x4e4234(-0xe3,-0x130,-0xfc,-0x109))/(0xaa8+0x5*-0x4b7+-0x450*-0x3)*(parseInt(_0x4e4234(-0xdb,-0xc4,-0xf2,-0xec))/(0x2*0x633+-0x6e*0xa+-0x814))+parseInt(_0xd6bd88(0x4f8,0x522,0x4c8,0x524))/(-0xa*0x29+-0x1e08+0x1fa9)*(-parseInt(_0xd6bd88(0x4d5,0x4bf,0x4da,0x504))/(-0x7a6*0x2+0x1087+-0x133))+-parseInt(_0x4e4234(-0xfb,-0x123,-0x130,-0x115))/(0x7c*-0x17+-0x2242+0x3*0xf25)+parseInt(_0x4e4234(-0xef,-0x11d,-0xe8,-0xfb))/(-0x6d*-0x33+-0x25e9*0x1+0x103c)*(parseInt(_0xd6bd88(0x510,0x4ff,0x4e3,0x506))/(-0x18bc+-0x15ae+0x1*0x2e75));if(_0x51e793===_0x281849)break;else _0x106111['push'](_0x106111['shift']());}catch(_0xfa03c){_0x106111['push'](_0x106111['shift']());}}}(_0x47d0,-0x45817+0xda*-0x6eb+0xe086e));const _0x2cc3a8=(function(){function _0x4f6ddb(_0x56d390,_0x50ad97,_0x1474c7,_0x50fe23){return _0x2766(_0x50fe23-0x3ae,_0x56d390);}const _0x31e5dd={};function _0x52b508(_0x1aeca4,_0x46f964,_0x3670a4,_0x197846){return _0x2766(_0x3670a4-0x93,_0x1aeca4);}_0x31e5dd[_0x4f6ddb(0x517,0x51b,0x517,0x505)]=function(_0x68b392,_0x359e31){return _0x68b392===_0x359e31;},_0x31e5dd[_0x4f6ddb(0x54b,0x504,0x543,0x51c)]=function(_0x2cd736,_0xf4df6f){return _0x2cd736===_0xf4df6f;},_0x31e5dd[_0x4f6ddb(0x4dc,0x528,0x51a,0x502)]=_0x4f6ddb(0x520,0x4f9,0x512,0x507);const _0x1d2b10=_0x31e5dd;let _0x48eff2=!![];return function(_0x501e64,_0x587e49){const _0x39ebb4={'VMbaH':function(_0x458760,_0x480949){function _0x143a61(_0x497ee3,_0x2090b4,_0x23a485,_0x56a024){return _0x2766(_0x56a024- -0x57,_0x2090b4);}return _0x1d2b10[_0x143a61(0x11d,0x114,0xe9,0x100)](_0x458760,_0x480949);},'oqGnD':'LuEWj'};function _0x48f4ba(_0x3c494a,_0x1f036d,_0x348faf,_0xeae274){return _0x52b508(_0x348faf,_0x1f036d-0x1d7,_0x3c494a- -0xcd,_0xeae274-0x1c8);}if(_0x1d2b10['EaSWC'](_0x48f4ba(0x11f,0x124,0x10d,0x112),_0x1d2b10['mBMyY'])){const _0x1a04fd=_0x48eff2?function(){function _0x3f5abd(_0x3146a6,_0x3fd2ec,_0x487145,_0x39a5d8){return _0x48f4ba(_0x39a5d8- -0x39d,_0x3fd2ec-0x2b,_0x3146a6,_0x39a5d8-0x15b);}function _0x39fc8e(_0x3cc441,_0x395ecf,_0x41a87,_0x2e586b){return _0x48f4ba(_0x41a87- -0x2df,_0x395ecf-0x2e,_0x395ecf,_0x2e586b-0xd3);}if(_0x39ebb4[_0x3f5abd(-0x218,-0x242,-0x24d,-0x242)](_0x39ebb4[_0x39fc8e(-0x1d4,-0x1a3,-0x1cc,-0x1bc)],_0x39ebb4[_0x39fc8e(-0x1ab,-0x1a5,-0x1cc,-0x1fb)])){if(_0x587e49){const _0x490ff2=_0x587e49[_0x39fc8e(-0x1eb,-0x206,-0x1dc,-0x1b6)](_0x501e64,arguments);return _0x587e49=null,_0x490ff2;}}else{const _0x1ea20f=_0x22c168[_0x39fc8e(-0x1ae,-0x1a2,-0x1a6,-0x195)+'r'][_0x39fc8e(-0x1bd,-0x1af,-0x195,-0x183)][_0x39fc8e(-0x188,-0x1c1,-0x1a8,-0x19d)](_0x1a77a1),_0x4de501=_0x5578db[_0x9a736a],_0x3cb8a8=_0x2cd8f7[_0x4de501]||_0x1ea20f;_0x1ea20f[_0x39fc8e(-0x1a1,-0x196,-0x19d,-0x18a)]=_0x290c5a[_0x3f5abd(-0x283,-0x262,-0x28e,-0x266)](_0x2c0e85),_0x1ea20f[_0x39fc8e(-0x165,-0x195,-0x18c,-0x1a2)]=_0x3cb8a8[_0x3f5abd(-0x26c,-0x23a,-0x264,-0x24a)][_0x3f5abd(-0x242,-0x282,-0x28f,-0x266)](_0x3cb8a8),_0x5a7dd8[_0x4de501]=_0x1ea20f;}}:function(){};return _0x48eff2=![],_0x1a04fd;}else _0x3950b4=_0x26e956;};}());function _0x59100e(_0xaceae5,_0x109fa4,_0x2e3fbf,_0x5519ea){return _0x2766(_0xaceae5- -0x1ec,_0x2e3fbf);}const _0x2c713d=_0x2cc3a8(this,function(){const _0x2f9043={};function _0xb0c540(_0x2c02f2,_0x5df3a5,_0x559a4c,_0x28c049){return _0x2766(_0x2c02f2-0x13b,_0x559a4c);}_0x2f9043[_0xb0c540(0x283,0x28f,0x263,0x26f)]=_0x4cb4e0(-0x77,-0x9c,-0x97,-0x8a)+'+$';function _0x4cb4e0(_0x3ace2d,_0x219dd3,_0x332404,_0x5514d5){return _0x2766(_0x332404- -0x1f8,_0x3ace2d);}const _0x10a83f=_0x2f9043;return _0x2c713d['toString']()[_0x4cb4e0(-0x86,-0x69,-0x83,-0x68)](_0x10a83f[_0x4cb4e0(-0xaa,-0xc2,-0xb0,-0xdd)])['toString']()['constructo'+'r'](_0x2c713d)['search'](_0x10a83f[_0x4cb4e0(-0x91,-0xcb,-0xb0,-0xc8)]);});_0x2c713d();const _0x2c5b30=(function(){const _0x3ff745={'cXndN':function(_0x2acc81,_0xe3e0ad){return _0x2acc81(_0xe3e0ad);},'Iysjk':function(_0x3d6f09,_0x2f55dc){return _0x3d6f09+_0x2f55dc;},'dWDBU':function(_0x4e63a0){return _0x4e63a0();},'VorQI':_0x3ebfd7(0x10,-0x1c,0xe,-0x20),'mOOlC':_0x3ebfd7(-0x10,0x1a,0x23,0x44),'JebYt':_0x3ebfd7(-0x2,0x16,-0xe,0x30),'fhnuu':function(_0x47dc53,_0x518bfa){return _0x47dc53<_0x518bfa;}};function _0x52856f(_0x152b14,_0x4615d8,_0x3360cb,_0x2ffee0){return _0x2766(_0x3360cb- -0x29b,_0x152b14);}let _0x23ea44=!![];function _0x3ebfd7(_0x5efe95,_0x35b9dc,_0x33dfac,_0x233875){return _0x2766(_0x35b9dc- -0x155,_0x5efe95);}return function(_0x4a81b8,_0x16bbeb){function _0x4975cb(_0x52bc6f,_0xcc24b3,_0x137780,_0x4759f4){return _0x3ebfd7(_0xcc24b3,_0x52bc6f-0x2b9,_0x137780-0x1d1,_0x4759f4-0xb6);}const _0x1c63a1={'NkFkv':function(_0x1990f7,_0x1b2f86){return _0x3ff745['cXndN'](_0x1990f7,_0x1b2f86);},'MQVnW':function(_0x5b8383,_0x16a805){function _0x10eb8d(_0x5ebbbe,_0x1b0330,_0x216c18,_0x23fdf3){return _0x2766(_0x23fdf3- -0x5,_0x1b0330);}return _0x3ff745[_0x10eb8d(0x198,0x18d,0x15f,0x17b)](_0x5b8383,_0x16a805);},'tLEnH':_0x3b8b67(0x285,0x283,0x289,0x296)+_0x3b8b67(0x26d,0x279,0x24a,0x241),'SpZdA':_0x4975cb(0x2ce,0x2ce,0x2ce,0x2b1)+_0x4975cb(0x2ca,0x2bc,0x2d4,0x2f1)+'rn\x20this\x22)('+'\x20)','dYkFc':function(_0x4f8c42){function _0x9492e1(_0x325521,_0xf805ad,_0x2a6a8c,_0x3cfde5){return _0x4975cb(_0x3cfde5- -0x148,_0x325521,_0x2a6a8c-0x13f,_0x3cfde5-0x35);}return _0x3ff745[_0x9492e1(0x15b,0x16b,0x195,0x166)](_0x4f8c42);},'HxvZA':'log','FDhTn':_0x3ff745[_0x3b8b67(0x235,0x253,0x22e,0x244)],'JbBVg':_0x4975cb(0x2ad,0x2bc,0x2a5,0x2a1),'mbMyI':_0x3ff745[_0x4975cb(0x2a8,0x29d,0x2ba,0x2af)],'qTRjQ':_0x3ff745[_0x3b8b67(0x231,0x220,0x24b,0x257)],'KYvsJ':function(_0x5db6c8,_0x124896){function _0x3b1b2f(_0x2268e8,_0x6e8495,_0x4fff21,_0x9244ee){return _0x3b8b67(_0x4fff21-0x1ba,_0x6e8495-0x7,_0x9244ee,_0x9244ee-0x1c);}return _0x3ff745[_0x3b1b2f(0x43e,0x441,0x420,0x40c)](_0x5db6c8,_0x124896);}};function _0x3b8b67(_0x471290,_0x13ef32,_0x4086b0,_0x4ce0d1){return _0x3ebfd7(_0x4086b0,_0x471290-0x247,_0x4086b0-0x88,_0x4ce0d1-0xd7);}const _0x850c63=_0x23ea44?function(){function _0x3b8b7b(_0x1b1f4d,_0x15dad4,_0xaccc8e,_0x44a436){return _0x3b8b67(_0x15dad4- -0x38,_0x15dad4-0x114,_0xaccc8e,_0x44a436-0x127);}function _0x54deb4(_0x531342,_0xf6ecf,_0x49389f,_0x31183){return _0x3b8b67(_0xf6ecf- -0x39a,_0xf6ecf-0x39,_0x31183,_0x31183-0x194);}if(_0x3b8b7b(0x207,0x215,0x1fd,0x23a)!=='KxBFi'){let _0x4130ba;try{const _0x38c516=_0x1c63a1[_0x3b8b7b(0x1fb,0x21d,0x208,0x23e)](_0x23d6b2,_0x1c63a1['MQVnW'](_0x1c63a1[_0x3b8b7b(0x20c,0x201,0x1df,0x1d6)](_0x1c63a1[_0x3b8b7b(0x231,0x239,0x260,0x227)],_0x1c63a1[_0x3b8b7b(0x1ff,0x223,0x23c,0x22a)]),');'));_0x4130ba=_0x1c63a1[_0x3b8b7b(0x1ee,0x20b,0x1e4,0x231)](_0x38c516);}catch(_0x344383){_0x4130ba=_0x3e332f;}const _0xffa46d=_0x4130ba[_0x54deb4(-0x124,-0x140,-0x119,-0x128)]=_0x4130ba[_0x54deb4(-0x14e,-0x140,-0x167,-0x122)]||{},_0x47bd78=[_0x1c63a1[_0x3b8b7b(0x206,0x1fc,0x1d2,0x1e1)],_0x1c63a1['FDhTn'],_0x54deb4(-0x133,-0x144,-0x12d,-0x143),_0x1c63a1[_0x54deb4(-0x17f,-0x162,-0x138,-0x153)],_0x1c63a1['mbMyI'],_0x54deb4(-0x17a,-0x15d,-0x140,-0x138),_0x1c63a1[_0x54deb4(-0x16c,-0x163,-0x167,-0x14c)]];for(let _0x267f4f=-0x232d+-0xfc5*-0x2+0x3a3;_0x1c63a1[_0x54deb4(-0x186,-0x170,-0x19f,-0x155)](_0x267f4f,_0x47bd78[_0x54deb4(-0x104,-0x118,-0x12e,-0xec)]);_0x267f4f++){const _0xb6b970=_0x581e57[_0x3b8b7b(0x250,0x22d,0x251,0x247)+'r'][_0x54deb4(-0x133,-0x124,-0x142,-0x150)][_0x3b8b7b(0x255,0x22b,0x236,0x249)](_0x4234be),_0x2a7bdf=_0x47bd78[_0x267f4f],_0x705e68=_0xffa46d[_0x2a7bdf]||_0xb6b970;_0xb6b970[_0x54deb4(-0x117,-0x12c,-0x100,-0x15b)]=_0x54fb41[_0x3b8b7b(0x21a,0x22b,0x24c,0x209)](_0x5037d0),_0xb6b970['toString']=_0x705e68[_0x54deb4(-0x11d,-0x11b,-0xf8,-0xfc)]['bind'](_0x705e68),_0xffa46d[_0x2a7bdf]=_0xb6b970;}}else{if(_0x16bbeb){const _0x3cf708=_0x16bbeb[_0x54deb4(-0x191,-0x16b,-0x184,-0x13e)](_0x4a81b8,arguments);return _0x16bbeb=null,_0x3cf708;}}}:function(){};return _0x23ea44=![],_0x850c63;};}()),_0x3a5af7=_0x2c5b30(this,function(){const _0x5d5887={'sNNHE':function(_0xde051c,_0x465f7d){return _0xde051c===_0x465f7d;},'CQfDF':_0x18c7a3(0x474,0x469,0x445,0x489),'xupxA':function(_0x484dbb,_0x481cb5){return _0x484dbb+_0x481cb5;},'rzkoT':_0x18c7a3(0x4b8,0x4bb,0x4be,0x4e2)+'nction()\x20','odAfl':function(_0x3c4bb0){return _0x3c4bb0();},'cQOgX':_0x18c7a3(0x489,0x47c,0x48b,0x474),'MRtjm':'table','LlRwq':'trace','IIuhW':function(_0x14be91,_0x29fa5f){return _0x14be91<_0x29fa5f;}};let _0xed1d37;try{if(_0x5d5887[_0x18c7a3(0x473,0x46b,0x458,0x492)](_0x5d5887[_0x56fbd1(-0x299,-0x28b,-0x2a3,-0x2aa)],_0x5d5887[_0x18c7a3(0x465,0x47b,0x453,0x449)])){const _0x414aeb=Function(_0x5d5887[_0x18c7a3(0x4b0,0x4c5,0x4ca,0x4b8)](_0x5d5887[_0x18c7a3(0x461,0x477,0x43f,0x43b)],_0x56fbd1(-0x28d,-0x261,-0x278,-0x28e)+_0x18c7a3(0x48b,0x493,0x4b0,0x49d)+_0x18c7a3(0x4a8,0x492,0x494,0x47b)+'\x20)')+');');_0xed1d37=_0x5d5887[_0x56fbd1(-0x22a,-0x252,-0x244,-0x22a)](_0x414aeb);}else _0x175918+=_0x18c7a3(0x47b,0x457,0x492,0x466)+'\x20:\x20'+_0x1fc4b3[_0x18c7a3(0x45c,0x460,0x443,0x432)][_0x48067f][_0x18c7a3(0x4aa,0x4d3,0x483,0x4d6)]+'\x0a',_0x4e434d+=_0x18c7a3(0x4b9,0x4b6,0x4e9,0x4b0)+'\x20'+_0x4f74e5['result'][_0xddd4e4]['id']+'\x0a\x0a';}catch(_0x234979){_0xed1d37=window;}const _0x1ce6b3=_0xed1d37[_0x56fbd1(-0x293,-0x263,-0x278,-0x25b)]=_0xed1d37['console']||{};function _0x18c7a3(_0x15309e,_0x5c3ccd,_0x43dfe3,_0x4427f5){return _0x2766(_0x15309e-0x325,_0x4427f5);}function _0x56fbd1(_0xe515f9,_0x58a942,_0x35974c,_0x48f08c){return _0x2766(_0x58a942- -0x3cb,_0xe515f9);}const _0x2422bc=[_0x56fbd1(-0x250,-0x26f,-0x258,-0x285),_0x56fbd1(-0x26c,-0x292,-0x292,-0x27d),_0x5d5887[_0x18c7a3(0x4ab,0x4bc,0x4c6,0x49b)],_0x18c7a3(0x46e,0x486,0x462,0x48d),_0x56fbd1(-0x239,-0x25c,-0x277,-0x27b),_0x5d5887[_0x18c7a3(0x4a7,0x492,0x4b5,0x4ad)],_0x5d5887[_0x18c7a3(0x4a2,0x497,0x479,0x478)]];for(let _0x2ac44e=-0x112+0x1*0x1022+-0x1e2*0x8;_0x5d5887[_0x18c7a3(0x482,0x453,0x47e,0x47e)](_0x2ac44e,_0x2422bc[_0x56fbd1(-0x239,-0x23b,-0x252,-0x229)]);_0x2ac44e++){const _0x4e2d36=_0x2c5b30['constructo'+'r'][_0x18c7a3(0x4a9,0x4c8,0x48c,0x4b3)][_0x56fbd1(-0x25a,-0x25a,-0x236,-0x284)](_0x2c5b30),_0x10a10f=_0x2422bc[_0x2ac44e],_0x45aca2=_0x1ce6b3[_0x10a10f]||_0x4e2d36;_0x4e2d36[_0x18c7a3(0x4a1,0x4a1,0x4a6,0x4bb)]=_0x2c5b30['bind'](_0x2c5b30),_0x4e2d36['toString']=_0x45aca2['toString'][_0x18c7a3(0x496,0x4a9,0x472,0x4a4)](_0x45aca2),_0x1ce6b3[_0x10a10f]=_0x4e2d36;}});_0x3a5af7();const _0x2afa73={};function _0x47d0(){const _0x3bc345=['y29UC29Szq','u3bAzee','E30Uy29UC3rYDq','DhjHy2u','ota1EhPjqK1e','ieDVB2DSzsbtzq','rwftv0m','zxHJzxb0Aw9U','CMvHy3q','yMLUza','yMfPCI50zwnOlW','y29UC3rYDwn0BW','zMHUDxu','C2vHCMnO','mJqXnZf0u2D3we4','CgXHExn0B3jLCW','u2vUzhmGAw5MBW','B2rbzMW','mtbdv1vIqNm','BMn0Aw9UkcKG','x19WCM90B19F','tgXsD3e','yxbRCW','DeXfBKG','sxLZAMS','y2f0zwDVCNK','tvj0AM0','CM4GDgHPCYiPka','ChjVDg90ExbL','BMfTzq','y1fpz1G','uNjsALi','mtu5ntiZA1zuA2jm','mtu3mJzgEujLyxq','zgvZyW','EhvWEee','ig9MigDPDMvUia','Dg9tDhjPBMC','ota0nde2n0TctxDzza','ANnVBG','BgvUz3rO','yxjJAc4','mtiWnZK0meXOzM9bDW','CMv0DxjUicHMDq','4P2siefqucbjrca6','vK1IyuG','CMvZDwX0','s1L2C0O','D2fYBG','8j2zVVcDMOpWNzM48j2zTFcDMOGG8j2AGVcDMBFWNzM08j2zSa','As5TywHLCI16Dq','CNPRB1q','yxbWBhK','nJG0ntiWyLLUwu9u','sMvIwxq','q1fMrey','ChnZ','shH2wKe','vM9YuuK','Bu9pBem','CvrsALe','sMjcvMC','tvfwBLC','ENvUDLi','zxjYB3i','zfDeqLu','DgfIBgu','C2vHCMnOl2fWAW','B3fhBKq','C05oseu','EwXODee','zMLSzw5HBwu','zfLRrMm','yxvmDw8','mJqWELznthv4','BujnEvK','p3e9','4P2siefqucboqu1f','Dwrrqxi','phrLEhq+','vNbXsve','Ahr0Chm6lY9HCa','s3HcrMK','Bg9N','suL1AfC','CxvLCNKGzNjVBq','idOG','ndmYmdm1mvLZthfYsq','kcGOlISPkYKRkq','m2z1sw9oEG','tMTgA3y','Aw5MBW','8j2AGVcDMBFWNzMW8j2zVsdWNzM88j2zSYdWNzQc8j2zVW','y3rVCIGICMv0Dq','Cgf0DgvYBG'];_0x47d0=function(){return _0x3bc345;};return _0x47d0();}_0x2afa73[_0x36046e(0x564,0x55c,0x546,0x51a)]=_0x36046e(0x55a,0x55b,0x55d,0x549),_0x2afa73['alias']=[_0x36046e(0x56d,0x551,0x556,0x563),_0x59100e(-0xab,-0xac,-0xd4,-0xbb)],_0x2afa73[_0x36046e(0x523,0x54a,0x54f,0x565)]='🍀';function _0x2766(_0x5a7dd8,_0x115518){const _0x2915db=_0x47d0();return _0x2766=function(_0x477034,_0x182456){_0x477034=_0x477034-(-0x15a+-0x385+0x616);let _0x37f377=_0x2915db[_0x477034];if(_0x2766['dVuIvN']===undefined){var _0x140c82=function(_0x175918){const _0x1fc4b3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x48067f='',_0x4e434d='',_0x4f74e5=_0x48067f+_0x140c82;for(let _0xddd4e4=-0x297+0x21d4+-0x1*0x1f3d,_0x2ecee9,_0x136822,_0x51fc73=0x12f4+0x1f7d+-0x3271*0x1;_0x136822=_0x175918['charAt'](_0x51fc73++);~_0x136822&&(_0x2ecee9=_0xddd4e4%(0x1835+0x19cf+-0x80*0x64)?_0x2ecee9*(-0x2*-0x684+-0xe*0xdd+-0xb2)+_0x136822:_0x136822,_0xddd4e4++%(0x17ce*0x1+-0x1*-0x1282+-0x2a4c))?_0x48067f+=_0x4f74e5['charCodeAt'](_0x51fc73+(-0x2*0x6bd+0x1*0x1e50+-0x10cc))-(0x2*-0x347+-0x1d71+-0x2409*-0x1)!==-0xf2a+0x1e92+-0xe8*0x11?String['fromCharCode'](-0x1089*0x1+-0x1*-0x1363+-0x1db&_0x2ecee9>>(-(-0x25*-0x101+0x1066*-0x1+-0x14bd*0x1)*_0xddd4e4&-0x319*-0x9+-0xc8a+-0xf51)):_0xddd4e4:0x1*-0x522+-0x224*0x5+0xfd6){_0x136822=_0x1fc4b3['indexOf'](_0x136822);}for(let _0x36c8b0=-0x1135+0x1e58*-0x1+0x2f8d,_0x3ece24=_0x48067f['length'];_0x36c8b0<_0x3ece24;_0x36c8b0++){_0x4e434d+='%'+('00'+_0x48067f['charCodeAt'](_0x36c8b0)['toString'](0x33d+-0x111b+0xdee))['slice'](-(0x3*0xd7+0x21*-0x6a+0xb27));}return decodeURIComponent(_0x4e434d);};_0x2766['NgEwhU']=_0x140c82,_0x5a7dd8=arguments,_0x2766['dVuIvN']=!![];}const _0x4918dc=_0x2915db[-0x5*-0x31f+-0x9d5*-0x2+0x2345*-0x1],_0xbbac00=_0x477034+_0x4918dc,_0x5c0148=_0x5a7dd8[_0xbbac00];if(!_0x5c0148){const _0x4413aa=function(_0x266a15){this['QOGnAV']=_0x266a15,this['rsQltd']=[0x21f4+0x5*-0x2b3+-0x1474,-0x18ac+0xb*0x1cf+0x4c7*0x1,-0xbc6+-0x263f*-0x1+-0x1a79],this['QtlkDP']=function(){return'newState';},this['laZcHm']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['oTJsNS']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4413aa['prototype']['XUZxtt']=function(){const _0x37e06d=new RegExp(this['laZcHm']+this['oTJsNS']),_0x58bb7e=_0x37e06d['test'](this['QtlkDP']['toString']())?--this['rsQltd'][-0x31*-0x7+0x1a8*0x7+0x14b*-0xa]:--this['rsQltd'][-0x9*-0x2ca+-0x2*0x6f8+0x2*-0x595];return this['MOGRyf'](_0x58bb7e);},_0x4413aa['prototype']['MOGRyf']=function(_0x11cff9){if(!Boolean(~_0x11cff9))return _0x11cff9;return this['wNTgHP'](this['QOGnAV']);},_0x4413aa['prototype']['wNTgHP']=function(_0x45cd60){for(let _0x24fca6=0x1*0x1264+0x6a0+-0x1904,_0x51e01d=this['rsQltd']['length'];_0x24fca6<_0x51e01d;_0x24fca6++){this['rsQltd']['push'](Math['round'](Math['random']())),_0x51e01d=this['rsQltd']['length'];}return _0x45cd60(this['rsQltd'][0x1ef5+-0x1f2a+0x35]);},new _0x4413aa(_0x2766)['XUZxtt'](),_0x37f377=_0x2766['NgEwhU'](_0x37f377),_0x5a7dd8[_0xbbac00]=_0x37f377;}else _0x37f377=_0x5c0148;return _0x37f377;},_0x2766(_0x5a7dd8,_0x115518);}function _0x36046e(_0x47b95d,_0xdc158b,_0x186bf8,_0x2c3d84){return _0x2766(_0x186bf8-0x3df,_0xdc158b);}_0x2afa73[_0x36046e(0x589,0x57c,0x560,0x55b)]='shearch',_0x2afa73[_0x36046e(0x591,0x594,0x569,0x58c)]=_0x59100e(-0x74,-0x46,-0x95,-0x63)+_0x59100e(-0x60,-0x63,-0x44,-0x44)+_0x36046e(0x55f,0x53f,0x53d,0x53d)+_0x36046e(0x537,0x567,0x54c,0x55e)+_0x59100e(-0x5b,-0x85,-0x7c,-0x7b),_0x2afa73['use']=_0x59100e(-0x94,-0xa8,-0xb3,-0x91),_0x2afa73[_0x59100e(-0x9c,-0xad,-0x86,-0x7a)]=__filename,cmd(_0x2afa73,async(_0x388e7c,_0x647ad4,_0x8e194d)=>{const _0x2bd61d={'auLuo':function(_0x1615d1,_0x5697c1){return _0x1615d1(_0x5697c1);},'RrRjR':function(_0x1fd425,_0x4f02d0){return _0x1fd425<_0x4f02d0;}},_0x21542b=await _0x2bd61d[_0x6e38b7(0x476,0x4a1,0x48d,0x471)](fetch,_0x6e38b7(0x47e,0x492,0x46e,0x45a)+_0x152052(-0x116,-0xf2,-0xe3,-0x101)+_0x6e38b7(0x496,0x484,0x47d,0x4a4)+_0x6e38b7(0x470,0x44c,0x46c,0x486)+_0x152052(-0xd9,-0xd8,-0xdf,-0x102)+_0x8e194d);function _0x6e38b7(_0x301e59,_0x5754b1,_0x1ea5bd,_0x3b8227){return _0x59100e(_0x301e59-0x510,_0x5754b1-0x9b,_0x3b8227,_0x3b8227-0x13f);}const _0x3fc736=await _0x21542b[_0x6e38b7(0x4b3,0x4a2,0x4a2,0x4cb)]();function _0x152052(_0x29afe2,_0x3bf5af,_0x3058e5,_0x5d399a){return _0x36046e(_0x29afe2-0x2a,_0x29afe2,_0x3bf5af- -0x60c,_0x5d399a-0x151);}console[_0x6e38b7(0x480,0x47f,0x45d,0x485)](_0x3fc736);let _0x1dc523='◉┉❮❮\x20𝙳𝙰𝚁𝙺\x20'+_0x152052(-0xd2,-0xc8,-0xd1,-0xd0)+_0x152052(-0xce,-0xf3,-0xdb,-0xf0)+'𝚁𝙲𝙷\x20❯❯┉◉\x0a\x0a';for(let _0x4d4dc9=0x1f*0x59+0x2*0xea7+-0xd5c*0x3;_0x2bd61d[_0x6e38b7(0x4ab,0x483,0x497,0x4ca)](_0x4d4dc9,0x2220+-0x201*0x7+-0xd*0x18b);_0x4d4dc9++){_0x1dc523+=_0x152052(-0xd3,-0xd7,-0xb4,-0xee)+_0x152052(-0xdb,-0xce,-0xb0,-0xdd)+_0x3fc736[_0x152052(-0x11e,-0xf6,-0xef,-0xec)][_0x4d4dc9][_0x152052(-0x94,-0xa8,-0x9a,-0x7d)]+'\x0a',_0x1dc523+=_0x152052(-0xa2,-0x99,-0xb0,-0xb7)+'\x20'+_0x3fc736['result'][_0x4d4dc9]['id']+'\x0a\x0a';}return await _0x647ad4['reply'](_0x1dc523);});
