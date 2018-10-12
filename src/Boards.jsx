import React, { Component } from "react";
import "./App.css";
import Tasks from './components/Tasks.jsx';
import axios from "axios"


class Boards extends Component {
  constructor(props) {
    super(props);
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

  render() {
    console.log("what is the state?: ", this.state);
    const daBoard = this.state.boardsName.title
    console.log("CHECK CHECK", daBoard)
    return (
      <div className="Boards">
        {this.state.boardsName.map( item => {
          // console.log(item)
          return (<div className="Categories" key={item.id}>{item.title}

          <div> 
            {/* if (item.title === "") {
              
            } */}
          </div>

          {/* {this.state.boardsName.map(item => {
            console.log("DAAA", item)
            return <CardPick status={this.state.boardsName}/>
          })} */}
          
          {/* {this.state.tasks.map( tasks => {
            console.log("HUHHHHHH", tasks)
            return <DoneCards tasks={this.state.tasks}/>
          })}
          <CardPick status={this.state.boardsName}/> */}
          </div>)
        })}

        
        {/* <BoardTitles items={this.state.items}/> */}
      </div>
    );
  }
}

function CardPick(props) {
  console.log("WHATTT", props)
  const status = props.status.title;
  if(status === "Done"){
    return <DoneCards />
  } else if (status === "In Queue") {
    return <QueueCards />
  } else if (status === "In Progress"){
    return <ProgressCards />
  }
}


// filter for cards with a In Progress status
function ProgressCards(props) {
  const filteredArr = props.tasks.filter(tasks => {
    return tasks.status === "In Progress";
  });
  console.log("In Progress FILTER", filteredArr);
  return filteredArr.map(tasks => {
    return (
      <Tasks Cards
        key={tasks.id}
        title={tasks.title}
        priority={tasks.priority}
        status={tasks.status}
        assignedTo={tasks.assignedTo}
      />
    );
  });
}

// filter for cards with a In Queue status
function QueueCards(props) {
  // console.log("CAAARRRDS", props);
  const filteredArr = props.tasks.filter(tasks => {
    return tasks.status === "In Queue";
  });
  console.log("In Queue FILTER", filteredArr);
  return filteredArr.map(tasks => {
    return (
      <Tasks Cards
        key={tasks.id}
        title={tasks.title}
        priority={tasks.priority}
        status={tasks.status}
        assignedTo={tasks.assignedTo}
      />
    );
  });
}

// filter for cards with a Done status
function DoneCards(props) {
  // console.log("PRRRROOOOPPP", props)
  const filteredArr = props.tasks.filter(tasks => {
    return tasks.status === "Done";
  });
  console.log("DONE FILTER", filteredArr);
  return filteredArr.map(tasks => {
    // console.log("TAAASSSSKKKS", tasks)
    return (
      <Tasks 
        key={tasks.id}
        title={tasks.title}
        priority={tasks.priority}
        status={tasks.status}
        assignedTo={tasks.assignedTo}
      />
    );
  });
}






export default Boards;
