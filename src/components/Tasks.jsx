import React, { Component } from "react";
import "../App.css";
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from '../db/data.js';


// function TaskList(props){
//   console.log("what is props??????: ", props)
//   return props.tasks.map( task => <IndTasks key={task.id} title={task.title}/>)
// }


class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  
  componentDidMount() {
    getItemsFromFakeXHR()
      .then( tasks => {
        // console.log("what am i getting??? ", items)
        this.setState({ tasks })
      }, function() {
        console.log('this.state updated', this.state)
      })
  }


  render() {
    console.log("what can i see??? ", this.state);
    return (

      <div>
        <CardList tasks={this.state.tasks}/>
        {/* <QueueCards tasks={this.state.tasks}/> */}
      </div>

      // <div className={this.state.status}>
      // {this.state.tasks.title}
      // </div>
    )}
}

function CardList(props) {
  console.log("what is this???", props.tasks)
  return props.tasks.map (tasks => <Cards key={tasks.id} title={tasks.title} priority={tasks.priority} status={tasks.status} assignedTo={tasks.assignedTo}/>)
}


function QueueCards(props) {
  console.log("CAAARRRDS", props.tasks)
  return props.tasks.filter((item => {
    return item.status === "In Queue"
  }).map(item => {
    return (<div className={item.status}><Cards /></div>)
  })
  )
}


function Cards(props) {
  // console.log("Check me out!!!", props)
  return <div className={props.status}>
  {props.title}<br></br>
  Priority: {props.priority}<br></br>
  Assigned To: {props.assignedTo}<br></br>
  <button>Edit</button>
  <button>Delete</button>
  </div>
    
}




export default Tasks;
