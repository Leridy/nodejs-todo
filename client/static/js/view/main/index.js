var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../../store/main');
var deposit = require('../../deposit/main');

//
class TodoItems extends React.Component {
    render() {
        var todoPanel = this.props.entries;

        function creatTasks(item) {
            return <li className="todo-item" key={item.key}>{item.todo} <span className="todo-cancel" title="取消">X</span></li>
        }

        var listItems = todoPanel.reverse().map(creatTasks);
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
        var itemArray = this.state.items;
        var item = {
            todo: this._inputElement.value,
            key: Date.now()
        };

        itemArray.push(item);

        this.setState({
            items: itemArray
        });

        this._inputElement.value = '';


        e.preventDefault();
        deposit.setTodo(item);
    }

    getData() {
        var self = this;
        store
            .getAllData(function (data) {
                var i = 0;
                var len = data.length;
                var toDoListArr = [];
                for(; i<len; i++) {
                    toDoListArr.push(
                        {
                            todo: data[i].todo,
                            key:data[i].key
                        }
                    );
                }

                self.setState(
                    {
                        items : toDoListArr
                    });

                console.log('Getdata run')
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