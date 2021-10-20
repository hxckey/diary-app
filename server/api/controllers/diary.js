const express = require('express');
const router = express.Router();
// const db = connect("mongodb://localhost:27017/diaries")
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

router.post('/', async (req, res) => {
    try {
        console.log(`hiiii ${req.body.name}`);
        const entry = await Entry.create(req.body.name, req.body.title,  req.body.entry);
        // tried using line 21 to store new entry in db permanently 
        // db.diaries.insertOne({name: req.body.name, title: req.body.title, entry: req.body.entry })
        res.json(entry)
    } catch(err) {
        escape.status(500).json({err})
    }
})

module.exports = router;