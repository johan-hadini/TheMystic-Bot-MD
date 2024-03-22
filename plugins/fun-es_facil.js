let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

    let em = ['😀','😂','🍑','😍','🤤','🥵','😐','🙂','😎','👻','💩','🥴','🤑','🤓']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let am = em.getRandom()
    m.reply(`ولاكن ليس بقدر ${toM(a)}`, null, {mentions: [a]})
}

handler.customPrefix = /^(سهل|إنه سهل|انه سهل|هو سهل|هي سهل|قوي|قويه|قوية|قوى|افضل|انا افضل منك|انا قوي|افضل واحد|اكثر متفاعل|اكثر متهور|اكثر مشاكل|اكبر مشكلة|اكبر مشكله|اقل واحد|اقل|متفاعل|يتفاعلو)/i
handler.command = new RegExp
handler.tags = ['fun']

export default handler
