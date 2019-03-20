import React from 'react';



import DeletedTask from './DeletedTasks';

import { MyContext } from '../App'


class DeletedTasksList extends React.Component {
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
                                    <h1> Deleted Tasks</h1>
                                </div>
                                <div className="stats">
                                    <p id="statDetails">Retrive Task!</p>
                                </div>
                                <div className="todoList">

                            {
                                value.state.data.filter(c => ((c.deleted))).map(c => (<DeletedTask key={c.id} taskname={c.text} id={c.id} />))

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

export default DeletedTasksList;

