import React from 'react';


import { MyContext } from '../App'


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    CompeleteTask = (inputvalue) => (e) => {
        console.log(this.props.id)
        inputvalue.compeleteTodo(this.props.id)

    }
    DeleteTask = (inputvalue) => (e) => {
        console.log(this.props.id)
        inputvalue.deletToDo(this.props.id)
    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>

                            <div className="panel">
                                <div className="todoList">
                                    <div className="todoItem">
                                        <div className="todoItemText">{this.props.taskname}</div>
                                        <div className="itemControls">
                                            <div onClick={this.CompeleteTask(value)} id="complete" className="complete">
                                                <i className="fa fa-check fa-lg"></i>
                                            </div>
                                            <div id="delete" onClick={this.DeleteTask(value)} className="delete">
                                                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </React.Fragment>
                    )
                }
            </MyContext.Consumer>




        )
    }
}


export default Task;




