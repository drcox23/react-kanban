import React, {
  Component
}
from 'react';
import './App.css';
import './Boards.jsx'
import axios from "axios"
// import Boards from './Boards.jsx';
// import '.Header.jsx'
import Header from './Header';
import Boards from './Boards.jsx';




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
      axios
        .get("/tasks")
        .then(tasks => {
          // console.log("tasks", tasks);
          this.setState({ tasks: tasks.data });
        })
        .catch(err => {
          console.log("errors", err);
        });
    }

    addNewTask(tasks){
      axios
      .post("/new",tasks)
      .then(tasks => {
        console.log("tasks", tasks);
        this.setState({tasks: tasks.data})
      })
      .catch(err => {
        console.log("errors",err);
      })
    }



  render() {
    // console.log("are we rendering?")
    return (
      <div className="App" id="root">
        <Header state={this.state}/>
        <Boards state={this.state}/>
        
      </div>

    );
}

}

export default App;