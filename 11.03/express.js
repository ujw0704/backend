let express = require("express");
let app = express();

   let port = 9090;
   
  

app.get("/greet",(res,resp)=>{
    resp.json({"messge":"hello get"})

})

app.post("/post",(res,req)=>{
    req.json({"message":"hello post"})
})

app.get("/employ",(res,req)=>{
    let x =parseInt(req,params.id);
    req.json("x:id");
}) 
app.listen(9090);
    