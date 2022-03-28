const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.listen(5000,()=>{
    console.log("listening on port 5000")
})
mongoose
  .connect("mongodb://127.0.0.1:27017/todoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });


const todoRoutes = require("./routes/Todo");
app.use("/api", todoRoutes);
