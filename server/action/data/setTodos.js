var setTodo = require('../../data/todos.js');

exports.execute = function (req, res) {
    setTodo.setTodos(req.query);
};