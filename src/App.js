import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Tasklist from './components/Tasklist';
import CompletedTasksList from './components/CompletedTasksList'
import DeletedTasksList from './components/DeletedTasksList'
export const MyContext = React.createContext( );



class App extends React.Component {
  state={
          data:[]
        }


addTodo=(todo)=>{
  const {data}=this.state;

  this.setState({data: data.concat(todo)});
  console.log(data.concat(todo)  )

}

completeTodo=(tocompelete)=>{
  const {data}=this.state;
  const matchedIdElement = data.find((item) => item.id ===tocompelete);
  matchedIdElement.completed = true;
  this.setState( {state:data})
}

ReAddTodo=(ReAddTask)=>{
  const {data}=this.state;
  const matchedIdTask = data.find((item) => item.id ===ReAddTask);
  matchedIdTask.completed = false;
  this.setState( {state:data})
}
deletedToDo=(ReAddTask)=>{
  const {data}=this.state;
  const matchedIdTask = data.find((item) => item.id ===ReAddTask);
  matchedIdTask.deleted = true;
  this.setState( {state:data})
}

Recycle=(Recycle)=>{
  const {data}=this.state;
  const matchedIdTask = data.find((item) => item.id ===Recycle);
  matchedIdTask.deleted = false;
  this.setState( {state:data})
}




    render() {
    const value={
      state:this.state,
      addTodo:this.addTodo,
      compeleteTodo:this.completeTodo,
      ReAddTodo :this.ReAddTodo,
      deletToDo:this.deletedToDo,
      Recycle:this.Recycle
    };
    return (
      <MyContext.Provider value={value}>
  
      <div className="App">
      <div className ="tasklist">
      <Tasklist/>
      </div>
      <div className="CompletedTask">
      <CompletedTasksList/>
      </div>
      <div className="DeletedTask">
      <DeletedTasksList/>
      </div>
      </div>
    
      </MyContext.Provider>
    )
  }
}

export default App;
