




const dbconnect = require("./mongo");
const express = require("express");
const app =express();



app.get("./",async (res,resp)=>{
    
   resp.send({name:"ujwal"})
   
    }),



app.listen(5100)