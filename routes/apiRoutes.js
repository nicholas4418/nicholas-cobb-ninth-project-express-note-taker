const fs = require('fs');
const router = require("express").Router();

//this will be used to create unique ids
let uniqid = require('uniqid');
let data = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

//GET
router.get('/notes', (req, res) => {
        res.json(data);
});

//POST
router.post('/notes', (req, res) => {

        let newNote = {
                title: req.body.title,
                text: req.body.text,
                id: uniqid(),
        };
        
        data.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(data), function(err) {
            if (err) throw (err);
        });
        res.json(data);
});



module.exports = router;