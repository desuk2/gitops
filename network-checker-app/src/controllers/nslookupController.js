class NslookupController {
    async runNslookup(domain) {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(`nslookup ${domain}`, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });
    }
}

module.exports = NslookupController;