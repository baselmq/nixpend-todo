const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    nameColumn: {
      type: String,
      unique: true,
      required: true,
    },
    tasks: [
      {
        title: {
          type: String,
          // required: [true, "Please Enter title"],
        },
        description: {
          type: String,
        },
        subTasks: {
          type: [{ task: { type: String }, done: { type: Boolean } }],
        },
        status: {
          type: String,
        },
        date: {
          type: String,
        },
      },
    ],
  },

  { timestamps: true }
);

// static add Todo method
todoSchema.statics.addTodo = async function (
  nameColumn,
  title,
  description,
  subTasks,
  status,
  date
) {
  const column = await this.findOne({ nameColumn });
  if (!column) {
    throw Error("Column not found");
  }
  const newTask = {
    nameColumn,
    title,
    description,
    subTasks,
    status,
    date,
  };
  column.tasks.push(newTask);
  await column.save();

  return column;
};

todoSchema.statics.addColumn = async function (nameColumn) {
  const exist = await this.findOne({ nameColumn });

  if (exist) {
    throw Error("Column Already in use");
  }

  const column = await this.create({ nameColumn });

  return column;
};

module.exports = mongoose.model("Todo", todoSchema);
