import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'

const uuid = require('uuid');
class App extends Component{

  state = {
    todos: [

      {
        id: uuid.v4(),
        title: "Go to Gym",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Have a good diet breakfast",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Prepare for Office",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "clean Car",
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
  }
    render(){
      return (
        <Router>
            <div className="App">
            <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      );
    }
}
export default App;
 