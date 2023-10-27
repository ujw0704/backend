const express = require("express")
const {MongoClient}= require("mongodb")
const url ="mongodb://localhost:27017";
const database = "mydbs";
const client = new MongoClient(url);
 express.listen(9090,()=>console.log("srver is running"))
 const  getUser=  async() =>{
    const result =   await client.connect();
    db=result.db(database)
   const collection= db.collection("employeee")
    let response = await collection.find({}).toArray();
    console.log(response);

}
getUser();