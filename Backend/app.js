const mongoose = require("mongoose");
const express = require("express");

const mongoDbUrl = "mongodb+srv://shresthasabeen016:mybookstore@cluster0.nwyh71g.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const router = require("./routes/book-routes")

//MiddleWares
app.use(express.json())
app.use("/books", router)



mongoose.connect(mongoDbUrl)
    .then(() => console.log("DataBase Connection Successfull !!!"))
    .then(() => { app.listen(2000) })
    .catch((err) => console.log(err));



