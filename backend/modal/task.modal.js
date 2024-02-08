const express = require('express')
const app = express()
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(express.json())

class TaskTodo{
    constructor(id,task,status){
        this.id = id,
        this.task = task,
        this.status = status
    }

    static GetAllTask(){
        return Todo
    }

    static addTodo(id, todo, status){
        const newTodo = new TaskTodo(id, todo, status)
        Todo.push(newTodo)
    }
}

const Todo = [
    new TaskTodo(1,'task 1',"false"),
    new TaskTodo(2,'task 2',"true"),
]



module.exports = TaskTodo