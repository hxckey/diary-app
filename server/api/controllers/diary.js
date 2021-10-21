const express = require('express');
const router = express.Router();
const Entry = require('../models/diary')

// entries index route 
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.all
        res.json({entries})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(`hiiii ${req.body.name}`);
        const entry = await Entry.create(req.body.name, req.body.title,  req.body.entry);
        res.json(entry)
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;