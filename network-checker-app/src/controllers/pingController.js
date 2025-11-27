class PingController {
    async runPing(req, res) {
        const { host } = req.body;

        if (!host) {
            return res.status(400).json({ error: 'Host is required' });
        }

        const { exec } = require('child_process');

        exec(`ping -c 4 ${host}`, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: stderr || error.message });
            }
            res.json({ result: stdout });
        });
    }
}

module.exports = PingController;