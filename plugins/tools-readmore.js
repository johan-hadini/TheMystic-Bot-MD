let handler = async (m, { conn, text }) => {
    let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['readmore <نص1>|<نص2>'] 
handler.tags = ['tools']
handler.command = ['leermas', 'readmore','المزيد'] 

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
