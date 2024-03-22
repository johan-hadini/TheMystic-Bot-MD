import fetch from 'node-fetch';
import fs from 'fs';
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default;

let handler = async (m, { conn, text }) => {
    const args = text.trim().split(/ +/);
    const command = `addgp`;
    if (command === 'addgp') {
        const count = parseInt(args[0]); // عدد المستخدمين لإضافتهم
        if (isNaN(count) || count <= 0) {
            return m.reply('يرجى تحديد عدد صحيح إيجابي للمستخدمين لإضافتهم.');
        }

        // قراءة قاعدة البيانات من الملف
        let database = {};
        try {
            const data = fs.readFileSync('./database.json', 'utf8');
            database = JSON.parse(data);
            console.log("database: " + database)
        } catch (err) {
            console.error('حدث خطأ في قراءة قاعدة البيانات:', err);
        }

        // جلب عناوين البريد الإلكتروني للمستخدمين من قاعدة البيانات
        const userEmails = Object.keys(database.users);

        // إضافة المستخدمين إلى المجموعة بالدورة التكرارية
        for (let i = 0; i < count; i++) {
            if (i >= userEmails.length) {
                break; // توقف إذا تم إضافة جميع المستخدمين المتاحين
            }

            const jid = userEmails[i];
            const response = await conn.query({
                tag: 'iq',
                attrs: {
                    type: 'set',
                    xmlns: 'w:g2',
                    to: m.chat,
                },
                content: [{
                    tag: 'add',
                    attrs: {},
                    content: [{ tag: 'participant', attrs: { jid } }]
                }]
            });

            // معالجة الرد
            const add = getBinaryNodeChild(response, 'add');
            const participant = getBinaryNodeChildren(add, 'participant');
            for (const user of participant.filter(item => item.attrs.error == 403)) {
                const jid = user.attrs.jid;
                const content = getBinaryNodeChild(user, 'add_request');
                const invite_code = content.attrs.code;
                const invite_code_exp = content.attrs.expiration;
                let teks = `✳️ لا يمكن إضافة المستخدم @${jid.split('@')[0]} إلى المجموعة: يمكن أن يتمتع بالإضافة فقط بواسطة جهات الاتصال.`;
                m.reply(teks, null, {
                    mentions: conn.parseMention(teks)
                });
            }

            // إضافة المستخدمين إلى جهات الاتصال
            try {
                await conn.contactAdd(jid.split('@')[0]); // إضافة المستخدم إلى جهات الاتصال باستخدام اسم المستخدم
            } catch (error) {
                console.error('حدث خطأ أثناء إضافة المستخدم إلى جهات الاتصال:', error);
            }
        }
    }
}

handler.help = ['addgp'];
handler.tags = ['group'];
handler.command = ['addgp'];
handler.group = true;
handler.owner = true;


export default handler;

