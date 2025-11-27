const express = require('express');
const NmapController = require('../controllers/nmapController');
const NslookupController = require('../controllers/nslookupController');
const PingController = require('../controllers/pingController');
const TracertController = require('../controllers/tracertController');

const router = express.Router();

const nmapController = new NmapController();
const nslookupController = new NslookupController();
const pingController = new PingController();
const tracertController = new TracertController();

router.post('/nmap', async (req, res) => {
    try {
        const result = await nmapController.runNmap(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/nslookup', async (req, res) => {
    try {
        const result = await nslookupController.runNslookup(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/ping', async (req, res) => {
    try {
        const result = await pingController.runPing(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/tracert', async (req, res) => {
    try {
        const result = await tracertController.runTracert(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;