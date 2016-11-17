var EventEmitter = require('events').EventEmitter;
var queryString = require('queryString');
class Delete_TodoList extends EventEmitter {
    deleteTodos(item) {
        var itemObj = {
            key: item
        };
        var query = queryString.stringify(itemObj);
        fetch(
            "/data/deleteTodos/?" + query
        ).then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    self.allData = data;
                    callback(self.allData);
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, function (e) {
            console.log("Fetch failed!", e);
        });
    }
}


module.exports = new Delete_TodoList();