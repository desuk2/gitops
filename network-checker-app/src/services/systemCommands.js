const { exec } = require('child_process');

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
}

async function runNmap(target) {
    const command = `nmap ${target}`;
    return await runCommand(command);
}

async function runNslookup(domain) {
    const command = `nslookup ${domain}`;
    return await runCommand(command);
}

async function runPing(target) {
    const command = `ping ${target}`;
    return await runCommand(command);
}

async function runTracert(target) {
    const command = `tracert ${target}`;
    return await runCommand(command);
}

module.exports = {
    runNmap,
    runNslookup,
    runPing,
    runTracert
};