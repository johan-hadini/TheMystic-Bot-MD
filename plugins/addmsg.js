const { proto } = (await import('@adiwajshing/baileys')).default;

let handler = async (m, { conn, text, command, usedPrefix }) => {
    let M = proto.WebMessageInfo;
    if (!m.quoted) throw `الرجاء الرد على الرسالة باستخدام الأمر *${usedPrefix + command}*`;
    if (!text) throw `استخدم: ${usedPrefix + command} <النص>\n\nمثال:\n${usedPrefix + command} اختبار`;
    let msgs = global.db.data.msgs;
    if (text in msgs) throw `'${text}' مُسجلة بالفعل في قائمة الرسائل`;
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON();
    m.reply(`تمت إضافة ${text} إلى قائمة الرسائل بنجاح.\n\nيمكن الوصول إليها عن طريق كتابة اسمها`.trim());
};

handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + ' <النص>');
handler.tags = ['database'];
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/;

export default handler;
