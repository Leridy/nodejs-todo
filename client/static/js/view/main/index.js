var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../../store/main');

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
        };
        this.getData();
    }

    render() {
        var self = this;
        var messages = this.state.toDoList;
        var arr = [];

        messages
            .forEach(function(em) {
                arr.push(<li className="todo-item" key={em[0]}>
                    <input type="checkbox"
                           className="todo-checkbox"
                           checked={em[1]}/>
                    {em[0]} <span className="todo-cancel" title="取消">X</span></li>);
            });
        return (
            <div>
                <input type="text" className="todo-input" placeholder="TO DO 输入并回车 :-)" />
                <ul className="todo-list" >
                    {arr}
                </ul>
            </div>
        )

    }

    getData() {
        var self = this;
        store
            .getAllData(function (data) {
                var i = 0;
                var len = data.length;
                var toDoListArr = [];
                var stateArr = [];
                for(; i<len; i++) {
                    toDoListArr[i] = [data[i].todo,data[i].checked];
                }

                self.setState({toDoList: toDoListArr});
                console.log(self.state.messageList);
            })
    }
}

ReactDOM.render(
<TodoList />,
    document.getElementById('main-container')
);