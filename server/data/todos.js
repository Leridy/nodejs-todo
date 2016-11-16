var toDoList = [
    {"checked":false, "todo": "今天晚上吃什么？1"},
    {"checked":true, "todo": "今天晚上吃什么？2"},
    {"checked":false, "todo": "今天晚上吃什么？"},
    {"checked":true, "todo": "明天睡觉"},
    {"checked":false,"todo":"不能睡觉的说"}
    ];

exports.getTodos = function (callback) {
    callback(toDoList);
};