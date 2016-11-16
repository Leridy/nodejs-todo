var EventEmitter = require('events').EventEmitter;
var queryString = require('queryString');
class Deposit_TodoList extends EventEmitter {
    setTodo(item) {
        var self = this;
        var query = queryString.stringify(item);
        fetch(
            "/data/setTodos/?"+query
        )
            .then(function(res) {
                if (res.ok) {
                    console.log("ok your todo had been submit");
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });
    }
}

module.exports = new Deposit_TodoList();