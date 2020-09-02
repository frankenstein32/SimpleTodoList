import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
class App extends Component{

  state = {
    todos: [

      {
        id: 1,
        title: "Go to Gym",
        completed: false
      },
      {
        id: 2,
        title: "Have a good diet breakfast",
        completed: false
      },
      {
        id: 3,
        title: "Prepare for Office",
        completed: false
      },
      {
        id: 4,
        title: "clean Car",
        completed: false
      },
      {
        id: 5,
        title: "Check all car-documents",
        completed: false
      },

    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id == id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
  }
    render(){
      return (
        <div className="App">
           <Header/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      );
    }
}
export default App;
 