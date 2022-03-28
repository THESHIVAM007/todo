const express = require("express");
const router = express.Router();


const {
    createTodo,
   
    getTodo,
    deleteTodo,
    getAllTodos,
  } = require("../controller/Todo");
  
 
  
  router.get("/todos/", getAllTodos);
  
  router.get("/todo/:todoId/", getTodo);
  
  router.post("/todo/create/", createTodo);

  router.delete("/todo/:todoId/delete", deleteTodo);
  
  module.exports = router;