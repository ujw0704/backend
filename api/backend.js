let express = require('express');
let app = express();
let mongoClient = require('mongodb').MongoClient;
let durl =  'mongodb://localhost:27017';

app.listen(9000,()=>console.log("server is running"));

app.use(express.json());
 
 /*mongoClient.connect(durl,{useNewUrlParser:true})
.then(client=>{
    let db = client.db('mydbs')
   db.collection("employeee").find().forEach(doc => console.log(doc))
    .catch(err=>console.log(err))
    .finally(()=>client.close());
        
    
})
.catch(err=> console.log(err));

*/

app.get("/employeee",(request,response)=>{
    let arry =[];
    mongoClient.connect(durl,{useNewUrlParser:true})
.then(client=>{
    let db = client.db('mydbs')
   db.collection("employeee").find()(doc => arry.push(doc))
    .catch(err=>console.log(err))
    
    .finally(()=>{
        response.json(arry);
        client.close();

    });
    
        
    
})
  .catch(err=> console.log(err));  
});

app.post("/employeee",(resquest,respond)=>{
let data = resquest.body;
mongoClient.connect(durl,{newUrlParser:true})
.then(client=>{
    let db = client.db("mydbs")
    db.collection("employeee").insertOne(data)
    .then((result)=>respond.json(result))


    .catch(err=>respond.json({"error":"sorry failed"}))
    .finally(()=>client.close());

})
.catch(err=>console.log(err));
});