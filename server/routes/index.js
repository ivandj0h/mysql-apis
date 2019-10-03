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

module.exports = router;