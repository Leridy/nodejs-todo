/**
 * Created by Leridy on 2016/11/16.
 */
var deleteTodo = require('../../data/todos.js');

exports.execute = function (req,res) {
    deleteTodo.deleteTodos(req.query);
    res.send("ok");
};
