const express = require("express");
const srvr = require("./route/srvr");
const app = express();
app.use(express.json());
app.use('/srvr',srvr)

app.get('/',(req,res)=>{
    res.send("working!! JSJON token");
});

app.listen(8080,()=>{
    console.log("Server is connect to 8080...");
});