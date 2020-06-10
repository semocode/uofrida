const frida = require('frida')
const regedit = require('regedit')
const process = require('process')
const fs = require('fs')
const ps = require('ps-node')

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function processExists(pid) {
    return new Promise((resolve, reject) => {
        ps.lookup({ pid: pid }, (err, resultList ) => {
            if (err) {
                reject(err)
            }
            var process = resultList[0];
            if (process) {
                resolve(true)      
            } else {
                resolve(false)
            }
        })
    })
}

async function getUODir() {
    const uosaRegistryKey = 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\GameUX\\Games\\{30E124D7-B515-4778-91C5-4714CB238907}'
    return new Promise((resolve, reject) => {
        regedit.list(uosaRegistryKey, async (err, result) => {
            const uosaDir = result[uosaRegistryKey].values.ConfigApplicationPath.value
            resolve(uosaDir)
        })
    })
}
async function main() {
    const uosaDir = await getUODir()
    console.log('Located UOSA in ' + uosaDir)

    const blackmageDir = __dirname + '/../build/bundle.js'
    console.log('Located uo-blackmage in ' + blackmageDir)

    process.chdir(uosaDir)
    const pid = await frida.spawn(["UOSA.exe"])
    console.log('\n-- Spawned UOSA.exe with pid ' + pid + '. Loading uo-blackmage..\n')
    const session = await frida.attach(pid)

    const bundle = fs.readFileSync(blackmageDir, 'utf8')
    const script = await session.createScript(bundle)
    script.message.connect(message => {
        console.log(message);
    });
    await script.load()
    console.log("\n-- Successfully loaded uo-blackmage. Resuming execution..\n")
    await frida.resume(pid)

    while(await processExists(pid)) {
        await sleep(500)
    }

    console.log("\n-- UOSA.exe with pid " + pid + " no longer exists. Exiting..\n")
    console.log("You can make your own changes to this tool by editing the javascript code in the src/ directory.")
    console.log("To update the code, you need to install nodejs and npm and then run 'npm install' followed by 'npm run build'.\n")
    console.log("Thank you for using uo-blackmage!")
}

main()
  .catch(e => {
    console.error(e);
  });