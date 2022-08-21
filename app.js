const express = require("express");
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config();

const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routes
app.use("/api/v1/tasks", tasks);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000, console.log("Server Started"));
        
    } catch (error) {
        console.log(error);
    }
}

start();