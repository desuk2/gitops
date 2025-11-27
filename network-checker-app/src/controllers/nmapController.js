class NmapController {
    async runNmap(req, res) {
        const { target } = req.body;

        if (!target) {
            return res.status(400).json({ error: 'Target is required' });
        }

        const { exec } = require('child_process');

        exec(`nmap ${target}`, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: stderr || 'An error occurred while executing nmap' });
            }
            res.json({ result: stdout });
        });
    }
}

module.exports = NmapController;