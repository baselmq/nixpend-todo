const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

// ----------------- todo route -----------------
router
  .route("/")
  .get(todoController.getAllTodo)
  .post(todoController.createTodo);

router
  .route("/:id")
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

router.route("/column").post(todoController.createColumn);
module.exports = router;
