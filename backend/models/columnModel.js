const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter title"],
    },
    description: {
      type: String,
    },
    subTasks: {
      type: Array,
    },
    status: {
      type: String,
      //   required: true,
    },
    doneTask: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

// static add Todo method
todoSchema.statics.addTodo = async function (
  title,
  description,
  subTasks,
  status,
  doneTask
) {
  const todo = await this.create({
    title,
    description,
    subTasks,
    status,
    doneTask,
  });

  return todo;
};

module.exports = mongoose.model("Todo", todoSchema);
