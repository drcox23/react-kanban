import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux';


class Tasks extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("what can i see??? ", this.props);
    return (
      <div>
        <Cards key={this.props.id}
        title={this.props.title}
        priority={this.props.priority}
        status={this.props.status}
        assignedTo={this.props.assignedTo}/>
       
      </div>


    );
  }
}

function Cards(props) {
  console.log("Check me out!!!", props)
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



export default connect()(Tasks);
