import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Boards from './Boards.jsx';
import { connect } from 'react-redux';
import { getAllTasks, getAllBoards } from './actions/actions';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardsName: [
        {
          id: 1,
          title: "In Queue"
        },
        {
          id: 2,
          title: "In Progress"
        },
        {
          id: 3,
          title: "Done"
        }
      ],
      tasks: []
    };
  }

    componentDidMount() {
      // axios
      //   .get("/tasks")
      //   .then(tasks => {
      //     // console.log("tasks", tasks);
      //     this.setState({ tasks: tasks.data });
      //   })
      //   .catch(err => {
      //     console.log("errors", err);
      //   });
      console.log('this.props when component mounts', this.props)
      // this.props.dispatch(getAllBoards())
      this.props.dispatch(getAllTasks())
    }

    // addNewTask(tasks){
    //   axios
    //   .post("/new",tasks)
    //   .then(tasks => {
    //     console.log("tasks", tasks);
    //     this.setState({tasks: tasks.data})
    //   })
    //   .catch(err => {
    //     console.log("errors",err);
    //   })
    // }



  render() {
    // console.log("are we rendering?")
    return (
      <div className="App" id="root">
        <Header state={this.state}/>
        <Boards boards={this.state}/>
        
      </div>

    );
}

}

export default connect()(App);