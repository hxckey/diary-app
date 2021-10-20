const express = require('express');
const router = express.Router();

const Entry = require('../models/diary')

// entries index route 
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.all
        res.json({entries})
    } catch(err) {
        escape.status(500).json({err})
    }
})

module.exports = router;