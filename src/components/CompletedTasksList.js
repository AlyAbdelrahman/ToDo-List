import React from 'react';


import CompeleteTask from './CompletedTasks';


import { MyContext } from '../App'


class CompletedTasksList extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            text: ''
        }

        this.textInput = React.createRef();

    }

    render() {

        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>

                    <div className="panel finished" >
                                <div className="panel-header">
                                    <h1> Completed Tasks</h1>
                                </div>
                                <div className="stats">
                                    <p id="statDetails">Way To GO ^.^ !</p>
                                </div>
                                <div className="todoList">
                             
                            {
                                value.state.data.filter(c => (c.completed && !(c.deleted))).map(c => (<CompeleteTask key={c.id} taskname={c.text} id={c.id} />))

                            }
                   
                            </div>
                            </div>
                        </React.Fragment>
                    )
                }

            </MyContext.Consumer>
        )
    }
}

export default CompletedTasksList;

