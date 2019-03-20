import React from 'react';


import { MyContext } from '../App'

class DeletedTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.Recycle = this.Recycle.bind(this);
    }


    Recycle = (inputVlaue) => (e) => {
        inputVlaue.Recycle(this.props.id)

    }
    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>


                            <div className="todoList">
                                <div className="todoItem">
                                    <div className="todoItemText">{this.props.taskname}</div>
                                    <div className="itemControls">
                                        <div onClick={this.Recycle(value)} id="complete" className="complete">
                                            <i className="fa fa-check fa-lg"></i>
                                        </div>

                                    </div>
                                </div>
                                </div>

                        </React.Fragment>
                            )
                        }
            </MyContext.Consumer>
                    )
                };
            };
            
            
            
            
            export default DeletedTask;
            
            
            
            
