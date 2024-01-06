const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rishitsrivastava43:cyjptxI2gG3WydtM@cluster0.ujqzsu8.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}