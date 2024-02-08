const express = require('express')
const app = express()
const TodoController = require('./controller/Todo.controller')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors'); 

app.use(cors());

app.get('/',TodoController.GetAllTask)

app.post('/add-todo',TodoController.addTodo)

app.listen(5000,(err)=>{
    if(err){
        return console.log('asdfghjkl')
    }
    console.log('Server is running on port 5000')
})

// const express = require('express');
// const cors = require('cors'); // Import cors package
// const app = express();
// const TodoController = require('./controller/Todo.controller');

// app.use(cors()); // Use cors middleware

// app.get('/', TodoController.GetAllTask);

// app.post('/add-todo', TodoController.addTodo);

// app.listen(5000, (err) => {
//     if (err) {
//         return console.log('asdfghjkl')
//     }
//     console.log('Server is running on port 5000'); // Corrected port number
// });
