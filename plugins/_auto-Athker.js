/*import cron from 'node-cron';
import { randomBytes } from 'crypto';

//let handler = async (m, { conn }) => {
export async function before(m, { conn }) {
  cron.schedule('*//*30 * * * * *', async () => { // تعديل هنا
    let groups = [];
    for (let [jid, chat] of Object.entries(conn.chats)) {
      if (jid.endsWith('@g.us')) {
        groups.push(jid);
      }
    }

    let teks = 'Testing ...';
    for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, `${teks} `), true).catch(_ => _)
  });
};

//export default handler;
/**/
