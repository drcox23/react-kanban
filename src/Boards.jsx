import React, { Component } from "react";
import "./App.css";
import Tasks from "./components/Tasks.jsx";
import axios from "axios";
import { connect } from 'react-redux';

class Boards extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log("what is the state?: ", this.props);
    const daBoard = this.props.state.boardsName;
    // console.log("CHECK CHECK", daBoard);
    return (
      
      // adding cards based on title of the board
      <div className="Boards">
        {daBoard.map(item => {
          // console.log("Board", item);
          if (item.title === "Done") {
            return (
              <div className="Categories" key={item.id}>
                {item.title}

                <DoneCards tasks={this.props.state.tasks} />
              </div>
            );
          } else if (item.title === "In Progress"){
            return (
              <div className="Categories" key={item.id}>
                {item.title}

                <ProgressCards tasks={this.props.state.tasks} />
              </div>
            );
          } else if (item.title === "In Queue"){
            return (
              <div className="Categories" key={item.id}>
                {item.title}

                <QueueCards tasks={this.props.state.tasks} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}


// filter for cards with a In Progress status
function ProgressCards(props) {
  const filteredArr = props.tasks.filter(tasks => {
    return tasks.status === "In Progress";
  });
  // console.log("In Progress FILTER", filteredArr);
  return filteredArr.map(tasks => {
    return (
      <Tasks
        Cards
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
  // console.log("In Queue FILTER", filteredArr);
  return filteredArr.map(tasks => {
    return (
      <Tasks
        Cards
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
  // console.log("DONE FILTER", filteredArr);
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

const mapStateToProps = state => {
  return {
    tasks: state,
    // lol: 'omgIjustEnteredAPropInThisComponent'
  }
}


export default connect(mapStateToProps)(Boards);
