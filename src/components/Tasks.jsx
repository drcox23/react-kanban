import React, { Component } from "react";
import "../App.css";
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from '../db/data.js';


// function TaskList(props){
//   console.log("what is props??????: ", props)
//   return props.tasks.map( task => <IndTasks key={task.id} title={task.title}/>)
// }

function IndTasks(props){
  return <div>{props.title}</div>

}

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  
  componentDidMount() {
    getItemsFromFakeXHR()
      .then( items => {
        // console.log("what am i getting??? ", items)
        this.setState({ items })
      }, function() {
        console.log('this.state updated', this.state)
      })
  }


  render() {
    console.log("what can i see??? ", this.state);
    return (

      <div>
        <Cards items={this.state.items}/>
      </div>

      // <div className={this.state.status}>
      // {this.state.tasks.title}
      // </div>
    )}
}

function Cards(props) {
  console.log("what is this???", props.tasks)
  return props.items.map (item => 
    <div>{item.title}</div>
    )
}

export default Tasks;
