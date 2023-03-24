const path = require('path');
//need router
const router = require("express").Router();

    //routing for notes
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    //routing for index
    //USE / INSTEAD OF *
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

 
module.exports = router;