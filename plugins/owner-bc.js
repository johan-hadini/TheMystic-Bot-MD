import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = []
  for (let [jid, chat] of Object.entries(conn.chats)) {
    if (jid.endsWith('@g.us')) {
      groups.push(jid)
    }
  }

  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `✅ تم الإرسال *الإجمالي:* ${groups.length} مجموعة`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bcc|broadcastt|txx/i.test(teks) ? teks : `*تم البث, من مالك البوت*\n_____________________\n ${teks} ` ), true).catch(_ => _)
  m.reply('✅ تم البث لجميع المجموعات :)')
}
handler.help = ['tx']
handler.tags = ['owner']
handler.command = /^(broadcastt|bcc|txx)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
