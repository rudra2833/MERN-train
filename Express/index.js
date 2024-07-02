import express from "express";

const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to the MERN training");
})

app.get("/givemegridpage",(req,res)=>{

    // code
    res.send("Happy to play valorant!!!");
    console.log("heellooo")
    var a = 10
    var b = 20
    var c= a+b
    console.log(c)
    res.sendFile("index.html");
    

})

app.get("/second",(req,res)=>{
    res.send("happy to lplay valorant with lav!!! the sage!!");
})

app.post("/third",(req,res)=>{
    res.send("Server has successfully received the data of the new!!");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

