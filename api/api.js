let express = require('express');
let app = express();
let mongoClient = require('mongodb').MongoClient;
let dbURL = 'mongodb://localhost:27017';
let cors = require("cors");
app.listen(9045, () => console.log('server is running in 9090'));

app.use(express.json());
app.use(cors());

app.get("/employeee", (request, response) => {
    let arr = [];
    mongoClient.connect(dbURL, {useNewUrlParser:true})
    .then(client => {
        let db = client.db('mydbs')
        db.collection("employeee").find().forEach(doc => arr.push(doc))
        .catch(err => console.log(err))
        .finally(() => {
            response.json(arr);
            client.close();
        });
    })
    .catch(err => console.log(err));
 });

app.post("/employee", (request, response) => { 
    let data = request.body;
    // use mongodb library insertOne() to store the data and respond with some status 
    // whether data stored/not
    mongoClient.connect(dbURL, {useNewUrlParser:true})
    .then(client => {
        let db = client.db("mydbs");
        db.collectio("employeee").insertOne(data)
        .then((result) => response.json(result))
        .catch(err => response.json({"error":"Sorry failed to store"}))
        .finally(() => client.close());
    })
    .catch(err => console.log(err));
});
// fetching the records based on the id
app.get('/employeee/:id', (request, response) => {
    let id = parseInt(request.params.id)
    mongoClient.connect(dbURL, {useNewUrlParser:true})
    .then(client => {
        let db = client.db("mydbs");
        db.collection("employeee").findOne({_id: id})
        .then(value => {
            if(value != null) {
                response.json(value)
            } else {
                response.json({"error":`Sorry ${id} not found`})
            }
        })
        .catch(err => console.log(err))
        .finally(() => client.close())
    })
    .catch(err => console.log(err))
})