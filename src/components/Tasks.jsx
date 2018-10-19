import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class Tasks extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // console.log("what can i see??? ", this.props);
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
  // console.log("Check me out!!!", props)
  return (
    <Router>
    <div className={props.status}>
      {props.title}
      <br />
      Priority: {props.priority}
      <br />
      Assigned To: {props.assignedTo}
      <br />
      <button><Link className="edit-button" to="/edit/123">Edit </Link><Route path="/edit/:id" component={() => "hello"} />
      </button>
      <button>Delete</button>

      

    </div>
    </Router>
  );
}



export default connect()(Tasks);
