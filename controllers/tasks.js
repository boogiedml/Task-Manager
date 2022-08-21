const Task = require("../models/task")



const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    }catch(err){
        res.status(500).json({ msg: err })
    }
}


const addTask = async (req, res) => {
   try {
        const task = new Task(req.body)
        await task.save();
        res.status(201).json({ task })
   } catch(err) {
        res.status(500).json({ msg: err })
   }
}


const getTask = async (req, res) => {
    try {
        const {id : taskID} = req.params
        const task = await Task.findOne({_id: taskID})

        if(!task){
            return res.status(404).json({ msg: `Task with the id of ${taskID} is not available` })
        }

        res.status(200).json({ task }) 
   } catch(err) {
        res.status(500).json({ msg : err })
   }
}


const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})

        if(!task){
            return res.status(404).json({ msg: `Task with the id of ${taskID} is not available` })
        }
    }catch {
        res.status(500).json({ msg: err })
    }
    res.send("delete")  
}


const updateTask = async (req, res) => {
    try{
        const {id: taskID} = req.params;
        const task =  await Task.findByIdAndUpdate({_id: taskID}, req.body, { new: true, runValidators: true })

        if(!task){
            return res.status(404).json({ msg: `Task with the id of ${taskID} is not available` })
        }
        res.status(200).json({ task })
    }catch(err){
        res.status(500).json({ msg: err })
    }
}

module.exports = {
    getAllTasks,
    addTask,
    getTask,
    updateTask,
    deleteTask
}