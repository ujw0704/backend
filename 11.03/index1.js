const express = require('express');
const path =require('path');

const app =express();
const publicpath = path.join(__dirname,'public')

app.get( '/help',(__,resp)=>{
    resp.sendFile(`${publicpath}/help.html`);

})


app.listen(5000);