//1-Dependency
const express = require('express');
const mongoClient = require('mongodb').MongoClient;

//2-Instantiation
const app = express();
const client = mongoClient('mongodb://localhost:27017');
let db;

//3-Configuration

//4-Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
    if (!db) {
        await client.connect()
        const db = client.db('universities');
        req.db = db.collection('universities');
        return next();
    } else {
        req.db = db.collection('universities');
        return next();
    }
})


//5-Routing
app.use('/university', require('./routes/university'));
app.all('*', (req, res) => {
    res.json({ msg: "Page Not Found" });
})
//6-Error Handler

//7-Bootup
app.listen(4000, () => console.log('server started!'))