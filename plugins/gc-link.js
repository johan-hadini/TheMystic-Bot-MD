let handler = async (m, { conn, args }) => {
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
conn.reply(m.chat, link, m, {detectLink: true})
//conn.sendMessage(m.chat, { text: link }, { quoted: m, detectLink: true })
}
handler.command = /^اللينك(gro?up)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
