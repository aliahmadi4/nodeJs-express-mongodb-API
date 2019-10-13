const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.db.find().toArray((err, result) => {
        res.json(result);
    })
})

router.get('/:zip', (req, res) => {
    let zip = parseInt(req.params.zip)
    req.db.findOne({ "address.Zip": zip }, (err, result) => {
        res.json(result);
    });

})

router.get('/nearme/:long/:lat', (req, res) => {
    let long = parseInt(req.params.long);
    let lat = parseInt(req.params.lat);

    req.db.find({ location: { $near: [long, lat] } }).limit(2).toArray((err, doc) => {
        res.json(doc)
    })
})


module.exports = router;