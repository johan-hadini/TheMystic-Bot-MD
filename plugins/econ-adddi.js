//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0];
    else who = m.chat;
    if (!who) throw '✳️ من فضلك قم بإشارة المستخدم';
    let txt = text.replace('@' + who.split`@`[0], '').trim();
    if (!txt) throw '✳️ من فضلك أدخل الكمية من *الألماس* التي تريد إضافتها';
    if (isNaN(txt)) throw '🔢 يمكنك فقط إدخال أرقام';
    let dmt = parseInt(txt);
    let diamond = dmt;
    
    if (diamond < 1) throw '✳️ الحد الأدنى *1*';
    let users = global.db.data.users;
    users[who].diamond += dmt;

    await m.reply(`≡ *💎 تمت الإضافة*
┌──────────────
▢ *المجموع:* ${dmt}
└──────────────`);
   conn.fakeReply(m.chat, `▢ هل تم استلامك \n\n *+${dmt}* ألماس`, who, m.text);
}

handler.help = ['adddi <@المستخدم>'];
handler.tags = ['اقتصاد'];
handler.command = ['adddi']; 
handler.owner = true;

export default handler;
