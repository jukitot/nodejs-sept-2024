const fs = require('node:fs')
const afs = require('node:fs/promises')
const readLine = require('node:readline/promises')
const path = require('node:path')

const start = async () => {

    sourceFilePath = path.join(process.cwd(), 'emails.txt')
    targetFilePath = path.join(process.cwd(), 'gmails .txt')

    const fileStream = fs.createReadStream(sourceFilePath, 'utf-8')
    const rl = readLine.createInterface({input: fileStream})

    try{
        for await (const line of rl){
            const email = line.split('\t').splice(-1)[0];
            const splitEmail = email.split('@')
            if (splitEmail.length !== 2) {
                continue
            }
            const domainName = email.split('@').splice(-1)[0];
            // if (domainName === 'gmail.com') {
            //
            //
            // // await afs.appendFile(targetFilePath, `${email}\n`)
            //
            // }
            targetFileName = `${domainName}.txt`
            await afs.appendFile(path.join(process.cwd(), 'emails', targetFileName), `${email}\n`)
        }
    }finally{
        await rl.close()
    }

}

start();


