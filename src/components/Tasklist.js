import React from 'react';

import Task from './Task';
import uuidv4 from 'uuid/v4';
import { MyContext } from '../App'


class Tasklist extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      text: ''
    }


    this.textInput = React.createRef();

  }



  addTask = (inputvalue) => (e) => {

    const task = this.textInput.current.value;
    if (!task) return;
    const todo = {
      text: task, completed: false, deleted: false, id: uuidv4(),
    };
    console.log(inputvalue)
    inputvalue(todo)
  }

  render() {

    return (
      <MyContext.Consumer>
        {
          value => (
            <React.Fragment>


              <div className="panel">
                <div className="panel-header">
                  <h1> Todo List</h1>
                </div>
                <div className="stats">
                  <p id="statDetails">it's Time To do!</p>
                </div>

                <div className="controls">
                  <form name="frmTodoItem">
                    <input ref={this.textInput} type="text" name="tboxTodoItem" className="tboxTodoItem" />
                  </form>
                  <div onClick={this.addTask(value.addTodo)} id="submit" className="submit">Add</div>
                </div>
              </div>

              {
                value.state.data.filter(p => !(p.completed || p.deleted)).map(p => (<Task key={p.id} taskname={p.text} id={p.id} />))
              }
            </React.Fragment>
          )
        }

      </MyContext.Consumer>
    )
  }
}

export default Tasklist;






