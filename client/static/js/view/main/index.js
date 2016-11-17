var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../../store/main');
var deposit = require('../../deposit/main');
var deleteTodo = require('../../delete/main');

//
class TodoItems extends React.Component {
    render() {
        var todoPanel = this.props.entries;

        function creatTasks(item) {
            return <li className="todo-item" key={item.key}>{item.todo}
                <span className="todo-cancel" title="取消"
                      onClick={item.option.bind(this, item.key)}>X</span></li>
        }

        var listItems = todoPanel.map(creatTasks);
        return (
            <ul className="todo-list">
                {listItems}
            </ul>
        )
    }
}

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };

        this.getData();
    }

    addItem(e) {
        var toDoListArr = this.state.items;
        var item = {
            todo: this._inputElement.value,
            key: Date.now(),
            option: this.deleteItem
        };
        if(item.todo === ""){
            item = null;
        }else{
            toDoListArr.push(item);
        }


        this.setState({
            items: toDoListArr
        });


        this._inputElement.value = '';
        e.preventDefault();
        deposit.setTodo(item);

    }

    deleteItem(key) {
        deleteTodo.deleteTodos(key);
        location.reload();
    };

    getData() {
        var self = this;
        store
            .getAllData(function (data) {
                var i = 0;
                var len = data.length;
                var toDoListArr = [];
                for (; i < len; i++) {
                    toDoListArr.push(
                        {
                            todo: data[i].todo,
                            key: data[i].key,
                            option: self.deleteItem
                        }
                    );
                }

                self.setState(
                    {
                        items: toDoListArr
                    });
            });
    }

    render() {
        return (<div>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text" className="todo-input" placeholder="TO DO 输入并回车 :-)"
                           ref={(a) => this._inputElement = a}/>
                </form>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoList/>,
    document.getElementById('main-container')
);