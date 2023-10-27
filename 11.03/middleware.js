const express = require("express");
const app = express()


const reFilter =(req,resp,next)=>{
    if(! resp,query,age){
        resp.send("please enter yor age");
    }
else{
    next();
}

}
app.use(reFilter)

app.get("/",(req,resp)=>{
    
 resp.send("plese enter your age")
});
app.listen(7000);
    


