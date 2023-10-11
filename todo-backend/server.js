const express =require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const { getTodos, createTodo, updateTodo, deleteTodo } = require('./controllers/todoController')

// App config
const app = express()
const port = process.env.PORT || 8000

const connectionURL = process.env.MONGO_URI

// Middleware
// conver to json format
app.use(express.json())
app.use(cors())

// DB Config
mongoose.connect(connectionURL)
    .then(() => {
        app.listen(port, () => console.log(`Running on port ${port}`))
    })
    .catch((err) => {
        console.log(err)
    })

// API endpoints

// Get todos list
app.get('/todos', getTodos)

// Create a new Todo
app.post('/todos/', createTodo)

// Update a new Todo
app.put('/todos/:id', updateTodo)

// Delete a Todo
app.delete('/todos/:id', deleteTodo)

