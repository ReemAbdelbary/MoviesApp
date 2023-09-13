require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
const movie_router = require("./routes/movies");
const logger = require("./logger");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger);

mongoose.connect(process.env.CONNECTION_STRING,{}).then( ()=>{
    console.log("connected to mongoDB");
})
.catch((e)=>{
    console.log(e);
});

app.use('/movies', movie_router);

app.listen(PORT,()=>{console.log("server is up and running🚀")});