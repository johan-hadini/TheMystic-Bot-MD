//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '✳️ قم بإشارة المستخدم';
  let txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '✳️ أدخل كمية *نقاط الخبرة (XP)* التي تريد إضافتها';
  if (isNaN(txt)) throw ' 🔢 فقط الأرقام مسموحة';
  let xp = parseInt(txt);
  let exp = xp;
  
  if (exp < 1) throw '✳️ الحد الأدنى *1*';
  let users = global.db.data.users;
  users[who].exp += xp;

  await m.reply(`≡ *XP تمت الإضافة*
┌──────────────
▢  *المجموع:* ${xp}
└──────────────`);
 conn.fakeReply(m.chat, `▢ هل تم استلامك \n\n *+${xp} XP*`, who, m.text);
}

handler.help = ['addxp <@المستخدم>'];
handler.tags = ['اقتصاد'];
handler.command = ['addxp']; 
handler.owner = true;

export default handler;
