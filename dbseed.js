const mongoClient = require('mongodb').MongoClient;
const client = mongoClient('mongodb://localhost:27017');

// client.connect((err)=>{
//     if(err) console.log('could not connect to db');
//     const db = client.db('universities');
//     const col = db.collection('universities');
//     col.insert({
//         name: "MUM",
//         year: 1984,
//         address:{
//             country: "US",
//             state:"Iowa",
//             city: "Fairfield",
//             street:"1000N 4St",
//             Zip:52557,
//         },
//         students:[
        
//         ],
//         teachers:[
//             {_id:1,name:"Asaad"}
//         ],
//         location: [-91.9665342,41.017654]
//     },(err,result)=>{
//         console.log(`inserted successfully ${result}`);
//     })
// })

client.connect((err)=>{
    if(err) console.log('could not connect to db');
    const db = client.db('universities');
    const col = db.collection('universities');
    col.insert({
        name: "Stanford",
        year: 1984,
        address:{
            country: "US",
            state:"California",
            city: "San Fransisco",
            street:"450 Serra Mall",
            Zip:94305,
        },
        students:[
        
        ],
        teachers:[
            
        ],
        location: [-122.171178, 37.427014]
    },(err,result)=>{
        console.log(`inserted successfully ${result}`);
    })
})