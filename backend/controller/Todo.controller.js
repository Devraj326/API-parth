const TaskTodo = require('../modal/task.modal')

class TodoController{
    GetAllTask(req,res){
        return res.send(TaskTodo.GetAllTask())
    }

    addTodo(req,res){
        const {id, todo, status} = req.body
        TaskTodo.addTodo(id, todo, status)
        return res.send('Todo added successfully')
    }
}

module.exports = new TodoController()