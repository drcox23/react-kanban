import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditTaskModal from "./EditTaskModal";




class Tasks extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("what can i see??? ", this.props);
    return (
      <div>
        <Cards 
        key={this.props.tasks_id}
        tasks_id={this.props.tasks_id}
        title={this.props.title}
        priority={this.props.priority}
        status={this.props.status}
        assignedTo_UserID={this.props.assignedTo_UserID}
        createdBy_UserID={this.props.createdBy_UserID}
        />
       
      </div>


    );
  }
}

function Cards(props) {
  // console.log("Check me out!!!", props)

  return (
    <Router>
    <div className={props.status} key={props.task_id}>
      {props.title}
      <br />
      Priority: {props.priority}
      <br />
      Assigned To: {props.assignedTo}
      <br />
      <button><Link className="edit-button" to="/edit/">Edit </Link><Route path="${/edit/:id}" component={ () => <EditTaskModal state={props}/>}/>
      </button>
      <button>Delete</button>

      

    </div>
    </Router>
  );
}



export default connect()(Tasks);
