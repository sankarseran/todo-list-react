import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos.jsx';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo.jsx';
import About from './components/pages/about';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      { id: uuid.v4(), title: 'Go to shop', status: false },
      { id: uuid.v4(), title: 'Buy some chocolate', status: false }
    ],
    completed: [
      { id: uuid.v4(), title: 'Purchase sweet', status: true }
    ]
  }

  checkAsMarked = (id, status) => {
    if (status) {
      const item = this.state.todos.find(todo => todo.id === id);
      item.status = true;
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)],
        completed: [...this.state.completed, item]
      });
    } else {
      const item = this.state.completed.find(todo => todo.id === id);
      item.status = false;
      this.setState({
        completed: [...this.state.completed.filter(todo => todo.id !== id)],
        todos: [...this.state.todos, item]
      });
    }
  }

  removeTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
      completed: [...this.state.completed.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, { id: uuid.v4(), title: title, status: false}]
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <div><h3>Todos</h3></div>
                <Todos todos={this.state.todos} checkAsMarked={this.checkAsMarked} removeTodo={this.removeTodo}/>
                <div><h3 style={{marginTop: '10px'}}>Completed</h3></div>
                <Todos todos={this.state.completed} checkAsMarked={this.checkAsMarked} removeTodo={this.removeTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} 
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
