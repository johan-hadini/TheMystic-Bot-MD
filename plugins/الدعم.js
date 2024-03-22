شlet handler = async (m, { conn, command, text }) => {
let love = `
*═════⊹⊱≼≽⊰⊹═════*

*『 ️👾 』⇦ ❮ قناتي اليوتيوب ❯*

https://youtube.com/channel/UCje6LXC2-TJYAf86HDcTS_g

 *═════⊹⊱≼≽⊰⊹═════*

*『 ️👾 』⇦ ❮ لين شاتي 1  ❯*

https://wa.me/+201553631779

 *═════⊹⊱≼≽⊰⊹═════*

*『 ️👾 』⇦ ❮ لينك شاتي 2 ❯*

https://wa.me/+201278133936

 *═════⊹⊱≼≽⊰⊹═════*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
