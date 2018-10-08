import React, { Component } from "react";
import "./App.css";

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
      ]
    };
  }

  render() {
    console.log("what is the state?: ", this.state);
    return (
      <div className="Boards">
        <h1> Lets hope this renders
        </h1>
      </div>
    );
  }
}

  function BoardTitles(props){
    console.log("how does this work?????: ", props.title)
    return <div> {props.title}</div>
  }


export default Boards;
