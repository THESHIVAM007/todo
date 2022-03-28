const Todo = require("../models/Todo");

exports.getAllTodos = (req, res) => {
    Todo.find()
      .sort("-createdAt")
      .exec((err, todos) => {
        if (err || !todos) {
          return res.status(401).json({
            error: "Something went wrong",
          });
        }

        res.json(todos);
      });
  };




  exports.getTodo = (req, res) => {
   
    return res.json(req.todo);
  };






  exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);
  
   
    todo.save((err, task) => {
      if (err || !task) {
        return res.status(401).json({
          error: "something went wrong",
        });
      }
      
      res.json({ task });
    });
  };



  
  exports.deleteTodo = (req, res) => {
  
    const todo = req.todo;
    todo.remove((err, task) => {
      if (err || !task) {
        return res.status(401).json({
          error: "something went wrong",
        });
      }
      res.json({
        task_deleted: task,
        message: "Todo deleted successfully!",
      });
    });
  };