const express = require ("express");
const refer = require("./middlewar3");
const app = express();
const route =express.Router();






route.get("/",refer,(req,resp)=>{
    resp.send("Hello world")

});




app.listen(65000);