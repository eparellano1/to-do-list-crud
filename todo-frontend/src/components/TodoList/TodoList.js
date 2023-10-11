import axios from 'axios'
import { ListContainer, Row, Text, DeleteIcon } from './styles'

function TodoList({todos, fetchData}) {
  console.log(todos, 'hi  TODOLIST')

  const updateTodo = async (id) => {
    try{
      const response = await axios.put(`http://localhost:3001/todos/${id}`, {
        id,
      })
      fetchData()
      return response.data.json
    }catch(err){
      console.error(err.message)
    }
  }

  const deleteTodo = async (id) => {
    try{
      const response = await axios.delete(`http://localhost:3001/todos/${id}`, {
        id,
      })
      fetchData()
      console.log(`id: ${id} is deleted`)
      return response.data.json
    }catch(err){
      console.error(err.message)
    }
  }

  return (
    <div>
      <ListContainer>
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text 
              onClick={() => updateTodo(todo._id)}
              isCompleted={todo.completed}
            >
              {todo.text}
            </Text>
            <DeleteIcon
              onClick={() => deleteTodo(todo._id)}
            >X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  )
}

export default TodoList
