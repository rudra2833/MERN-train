import express from "express";


import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname;

app.use(bodyParser.urlencoded({extended: true}));

function brandnamegen(req,res,next){
  // console.log("Hellooooo my my my hey hey hey!!")
  var street = req.body.street;
  var pet = req.body.pet;
  bandname = street + pet;
  next();
}

app.use(brandnamegen);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
}); 

app.post("/submit", (req,res)=>{
  res.send(`<h1>Band-Name Generator👌</h1><h2>Your band name is:${bandname}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
