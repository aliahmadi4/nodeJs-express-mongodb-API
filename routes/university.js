const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;

router.get('/', (req, res) => {
    req.db.find().toArray((err, result) => {
        res.json(result);
    })
})

// router.get('/:zip', (req, res) => {
//     let zip = parseInt(req.params.zip)
//     req.db.findOne({ "address.Zip": zip }, (err, result) => {
//         res.json(result);
//     });

// })

router.get('/:zip', async (req, res,next) => {
    let zip = parseInt(req.params.zip)
    let result = await req.db.findOne({ "address.Zip": zip });
    if(result){
        res.json(result);
    }
    return next();
})
router.get('/:name',async(req,res)=>{
    let result = await req.db.findOne({name:req.params.name})
    res.json(result);
})

router.get('/nearme/:long/:lat', async (req, res) => {
    let long = parseInt(req.params.long);
    let lat = parseInt(req.params.lat);

    let result = await req.db.find({ location: { $near: [long, lat] } }).limit(1);

    result.toArray((err, doc) => {
        res.json(doc);
    })

})

router.post("/:id/teacher", async (req,res)=>{
    let data = await req.db.update({_id:ObjectId(req.params.id)}, {$push:{teachers:{...req.body}}});
    res.json({successful:1});
})

router.delete('/:id/teacher/:tid', async(req,res)=>{
    let tid = parseInt(req.params.tid);
    await req.db.update({_id:ObjectId(ObjectId(req.params.id))},{$pull:{teachers:{_id:tid}}});
    res.json({success:1})
})



module.exports = router;