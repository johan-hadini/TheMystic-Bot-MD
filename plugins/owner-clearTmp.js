import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  unlinkSync,
  rmSync
} from 'fs'

let handler = async (m, { conn, __dirname, args }) => {

m.reply(`✅ تم تنظيف المجلد *tmp + sessions*`)
m.react(done)
const tmp = [tmpdir(), join(__dirname, '../tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
 
      
  return filename.map(file => {
    unlinkSync(file)
})

}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp)$/i
handler.owner = true

export default handler
