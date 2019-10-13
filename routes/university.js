const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    req.db.find().toArray((err,result)=>{
        res.json(result);
    })
})


module.exports = router;