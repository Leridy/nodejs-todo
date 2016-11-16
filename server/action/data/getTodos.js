/**
 * Created by Leridy on 2016/11/16.
 */
var getTodo = require('../../data/todos.js');

exports.execute = function (req, res) {
    getTodo.getTodos(function (data) {
        res.send(data);
    });
};