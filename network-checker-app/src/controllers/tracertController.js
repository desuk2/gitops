class TracertController {
    async runTracert(target) {
        const { exec } = require('child_process');

        return new Promise((resolve, reject) => {
            exec(`tracert ${target}`, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });
    }
}

module.exports = TracertController;