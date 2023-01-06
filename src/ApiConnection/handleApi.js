import axios from "axios";

const baseUrl = "https://fullstack-todoapp-backend.onrender.com"

//
const getAllTodo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data-->', data)
        setToDo(data)
    })
}

//
const addTodo = (text, setText, setToDo) => {

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateTodo = (toDoId, text, setText, setIsUpdating, setToDo) => {

    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))


}

const deleteTodo = (_id,setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}


export {addTodo, updateTodo, deleteTodo, getAllTodo}