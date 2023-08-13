const Todo = require("../models/todoModel");

// getAllToDo
exports.getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({
      status: "success",
      results: todo.length,
      data: todo,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

//createToDo
exports.createTodo = async (req, res) => {
  const { nameColumn, title, description, subTasks, status, date } = req.body;

  try {
    const todo = await Todo.addTodo(
      nameColumn,
      title,
      description,
      subTasks,
      status,
      date
    );
    res.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

//createColumn
exports.createColumn = async (req, res) => {
  const { nameColumn } = req.body;

  try {
    const column = await Todo.addColumn(nameColumn);
    res.status(200).json({
      status: "success",
      data: column,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getToDo
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

// updateToDo
exports.updateTodo = async (req, res) => {
  const taskId = req.params.id;
  const data = req.body;
  try {
    const column = await Todo.findOne({ "tasks._id": taskId });

    if (!column) {
      return res
        .status(404)
        .json({ status: "fail", message: "card not found" });
    }

    const findTask = column.tasks.find(
      (task) => task._id.toString() === taskId
    );
    const taskIndex = column.tasks.indexOf(findTask);

    column.tasks[taskIndex].title = data.title;
    column.tasks[taskIndex].description = data.description;
    column.tasks[taskIndex].date = data.date;
    column.tasks[taskIndex].subTasks = data.subTasks;
    column.tasks[taskIndex].status = data.status;

    await column.save();

    res.status(200).json({
      status: "success",
      data: findTask,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
// deleteToDo
exports.deleteTodo = async (req, res) => {
  const taskId = req.params.id;

  try {
    const column = await Todo.findOne({ "tasks._id": taskId });

    if (!column) {
      return res
        .status(404)
        .json({ status: "fail", message: "card not found" });
    }

    const findTask = column.tasks.find(
      (task) => task._id.toString() === taskId
    );

    const taskIndex = column.tasks.indexOf(findTask);
    column.tasks.splice(taskIndex, 1);
    await column.save();

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

// const Todo = require("../models/todoModel");

// // getAllToDo
// exports.getAllTodo = async (req, res) => {
//   try {
//     const todo = await Todo.find();
//     res.status(200).json({
//       status: "success",
//       results: todo.length,
//       data: { todo },
//     });
//   } catch (error) {
//     res.status(404).json({ status: "fail", message: error.message });
//   }
// };

// //createToDo
// exports.createTodo = async (req, res) => {
//   const {
//     nameColumn,
//     tasks,
//     title,
//     description,
//     subTasks,
//     status,
//     date,
//     task,
//     done,
//   } = req.body;

//   try {
//     const todo = await Todo.addTodo(
//       nameColumn,
//       tasks,
//       title,
//       description,
//       subTasks,
//       status,
//       date,
//       task,
//       done
//     );
//     res.status(200).json({
//       status: "success",
//       data: { todo },
//     });
//   } catch (error) {
//     res.status(400).json({ status: "fail", error: error.message });
//   }
// };

// // getToDo
// exports.getTodo = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     res.status(200).json({
//       status: "success",
//       data: { todo },
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };

// // updateToDo
// exports.updateTodo = async (req, res) => {
//   try {
//     const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       status: "success",
//       data: { todo },
//     });
//   } catch (error) {
//     res.status(404).json({ status: "fail", message: error.message });
//   }
// };
// // deleteToDo
// exports.deleteTodo = async (req, res) => {
//   try {
//     await Todo.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       status: "success",
//       data: null,
//     });
//   } catch (error) {
//     res.status(404).json({ status: "fail", message: error.message });
//   }
// };
