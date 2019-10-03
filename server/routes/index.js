const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let result = db.all();
        res.json(result);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let result = db.one(req.params.id);
        res.json(result);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;