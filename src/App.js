import './App.css';
import { useEffect, useState } from "react"
import { addTodo, getAllTodo, deleteTodo, updateTodo } from './ApiConnection/handleApi';
import Todo from './components/Todo';

function App() {

  const [todo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllTodo(setToDo)
  },[])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Welcome To Your ToDo Tasks</h1>
        <div className="top">
          <input type="text" placeholder="Add todos..." value={text} onChange={(e) => setText(e.target.value)}/>
          <div 
          className="add"
          onClick={isUpdating ? () => updateTodo(toDoId, text, setToDo, setText, setIsUpdating) : () => addTodo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          
          </div>
        
        </div>
        <div className="list">
            {todo.map((item) => <Todo key={item._id} text={item.text} updateMode = {() => updateMode(item._id, item.text)} deleteToDo = {() => deleteTodo(item._id, setToDo)} />)}
          </div>
      </div>
    </div>
  );
}

export default App;
