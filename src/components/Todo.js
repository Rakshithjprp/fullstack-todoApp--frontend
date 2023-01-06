import React from 'react'
import { deleteTodo } from '../ApiConnection/handleApi'

const Todo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <div className="icon" onClick={updateMode}>Edit</div>
            <div className="icon" onClick={deleteToDo}>Delete</div>
        </div>
    </div>
  )
}

export default Todo