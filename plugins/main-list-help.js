const imglist = './src/menu-owner.png'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => conn.sendFile(m.chat, imglist, 'menu-owner.png', `
❆╼━━❆ •﹝📜﹞• ❆━━╾❆

*❮ اوامر مطور'رافـاييـل'🤖 ❯*

*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏👑˹ قـسـم الـمــطـــور╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❒┇ add
❒┇ addgp
❒┇ addprem
❒┇ banchat
❒┇ chaton
❒┇ banlist
❒┇ ban
❒┇ unban
❒┇ bcc
❒┇ bc
❒┇ cleartmp
❒┇ delprem
❒┇ stats
❒┇ usercount
❒┇ join
❒┇ resetuser
❒┇ restart
❒┇ infobot
❒┇ adddi
❒┇ addxp
❒┇ database
❒┇ groups

*بــــــRAPHAELــــــوت*

❆╼━━❆ •﹝📜﹞• ❆━━╾❆
`.trim(), m)
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['بوتي','خادمي','dk','darkman','اوامري'] 
handler.owner = true

export default handler
