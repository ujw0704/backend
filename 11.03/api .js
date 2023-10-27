let express = require ("express");
const { MongoClient } = require("mongodb");
let app = express();
let url = "mongo://localhost:27017";


app.listen(9090,()=>console.log("server is running"));


MongoClient.connect(url,{useUrlParser:true})
.then(client=>{
    let db = client.db()
})