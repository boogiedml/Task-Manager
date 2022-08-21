const mongoose = require("mongoose");

const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, "Enter a name"],
        trim: true,
        maxlength: [20, "Name too long"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task