const mongoose = require('mongoose');
const Todos = require('../dbTodos');

// Get Todos List
const getTodos = async (req, res) => {
    try{
        const allTodos = await Todos.find({}).sort({ createdAt: -1})
        res.status(200).send(allTodos)
    } catch(error){
        res.status(400).send(error.message)
    }
}
// Create Todo
const createTodo = async (req, res) => {
    const dbTodo = req.body
    try{
        const newTodo = await Todos.create(dbTodo)
        res.status(200).send(newTodo)
    } catch(error){
        res.status(400).send(error.message)
    }
}

// Update Todo
const updateTodo = async (req, res) => {
    const { id } = req.params
    
    try{
        // Check if id is valid
        if(!mongoose.isValidObjectId(id)){
            return res.status(404).send(`There is todo with the ID: ${id}`)
        }

        const updateTodo = await Todos.findOneAndUpdate({ _id: id }, { completed: true})

        if(!updateTodo){
            res.status(404).send(`There is todo with the ID: ${id}`)
        }
        
        res.status(200).send(updateTodo)
    } catch(error){
        res.status(400).send(error.message)
    }
}

// Delete a Todo
const deleteTodo = async (req, res) => {
    const { id } = req.params
    try{
        // Check if id is valid
        if(!mongoose.isValidObjectId(id)){
            return res.status(404).send(`There is todo with the ID: ${id}`)
        }
        
        
        const deleteTodo = await Todos.findOneAndDelete({_id: id})
        res.status(200).send(deleteTodo)
    } catch(error){
        res.status(400).send(error.message)
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}