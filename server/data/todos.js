var toDoList = [
    {"key":1, "todo": "今天晚上吃什么？1"},
    {"key":2, "todo": "今天晚上吃什么？2"},
    {"key":3, "todo":"不能睡觉的说"}
    ];

exports.getTodos = function (callback) {
    callback(toDoList);
};
exports.setTodos = function (ele){
    toDoList.push(ele)
};

exports.deleteTodos = function (keyObj) {
    var key = keyObj.key;
    toDoList.forEach(function (ele,index,arr) {
        if(ele.key == key){
            arr.splice(index,1);
        }
    });
};