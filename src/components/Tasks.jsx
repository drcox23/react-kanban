import React, { Component } from "react";
import "../App.css";
// import {
//   getItemsFromFakeXHR,
//   addItemToFakeXHR,
//   deleteItemByIdFromFakeXHR
// } from "../db/data.js";
// import axios from "axios";

// function TaskList(props){
//   console.log("what is props??????: ", props)
//   return props.tasks.map( task => <IndTasks key={task.id} title={task.title}/>)
// }

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   axios
  //     .get("/tasks")
  //     .then(tasks => {
  //       // console.log("tasks", tasks);
  //       this.setState({ tasks: tasks.data });
  //     })
  //     .catch(err => {
  //       console.log("errors", err);
  //     });
  // }

  render() {
    // console.log("what can i see??? ", this.props);
    return (
      <div>
        <Cards key={this.props.id}
        title={this.props.title}
        priority={this.props.priority}
        status={this.props.status}
        assignedTo={this.props.assignedTo}/>
        {/* <QueueCards tasks={this.state.tasks} />
        <ProgressCards tasks={this.state.tasks} />
        <DoneCards tasks={this.state.tasks} /> */}
      </div>

      // <div className={this.state.status}>
      // {this.state.tasks.title}
      // </div>
    );
  }
}

// function CardList(props) {
//   console.log("what is this???", props);
//   return props.tasks.map(tasks => (
//     <Cards
//       key={tasks.id}
//       title={tasks.title}
//       priority={tasks.priority}
//       status={tasks.status}
//       assignedTo={tasks.assignedTo}
//     />
//   ));
// }

// // filter for cards with a Done status
// function DoneCards(props) {
//   const filteredArr = props.tasks.filter(tasks => {
//     return tasks.status === "Done";
//   });
//   console.log("DONE FILTER", filteredArr);
//   return filteredArr.map(tasks => {
//     return (
//       <Cards
//         key={tasks.id}
//         title={tasks.title}
//         priority={tasks.priority}
//         status={tasks.status}
//         assignedTo={tasks.assignedTo}
//       />
//     );
//   });
// }

// // filter for cards with a In Progress status
// function ProgressCards(props) {
//   const filteredArr = props.tasks.filter(tasks => {
//     return tasks.status === "In Progress";
//   });
//   console.log("In Progress FILTER", filteredArr);
//   return filteredArr.map(tasks => {
//     return (
//       <Cards
//         key={tasks.id}
//         title={tasks.title}
//         priority={tasks.priority}
//         status={tasks.status}
//         assignedTo={tasks.assignedTo}
//       />
//     );
//   });
// }

// // filter for cards with a In Queue status
// function QueueCards(props) {
//   // console.log("CAAARRRDS", props);
//   const filteredArr = props.tasks.filter(tasks => {
//     return tasks.status === "In Queue";
//   });
//   console.log("In Queue FILTER", filteredArr);
//   return filteredArr.map(tasks => {
//     return (
//       <Cards
//         key={tasks.id}
//         title={tasks.title}
//         priority={tasks.priority}
//         status={tasks.status}
//         assignedTo={tasks.assignedTo}
//       />
//     );
//   });
// }

function Cards(props) {
  // console.log("Check me out!!!", props)
  return (
    <div className={props.status}>
      {props.title}
      <br />
      Priority: {props.priority}
      <br />
      Assigned To: {props.assignedTo}
      <br />
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Tasks;
