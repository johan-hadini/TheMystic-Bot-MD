let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

    if (!text) throw `للأستخدام
    ${usedPrefix + command} انت الأفضل.`
    let em = ['😀','😂','🍑','😍','🤤','🥵','😐','🙂','😎','👻','💩','🥴','🤑','🤓']

        let toM = a => '@' + a.split('@')[0]
        let ps = groupMetadata.participants.map(v => v.id)
        let a = ps.getRandom()
        let am = em.getRandom()
        await m.reply(`${toM(a)} *${text}*${am}`, null, {mentions: [a]})  
    }
    
    handler.command = handler.help = ['random','صفه','صفة']
    handler.tags = ['fun']
    handler.group = true

    export default handler
     