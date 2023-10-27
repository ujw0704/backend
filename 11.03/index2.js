const express =require('express');
const  path  = require('path');

const app = express();
const publicpath =path.join(__dirname,'public');
 
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
})
app.listen(5000);