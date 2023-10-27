const {MongoClient} =require("mongodb");
const Url ="mongodb://localhost:27017";
const client =new MongoClient(Url);

 async function get(){
    let result = await client.connect();
    let collection = db.collection("employee")
    let response = await(collection.find({}).toArray());
    console.log(response);

}