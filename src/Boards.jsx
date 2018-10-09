import React, { Component } from "react";
import "./App.css";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardsName: [
        {
          title: "In Queue"
        },
        {
          title: "In Progress"
        },
        {
          title: "Done"
        }
      ]
    };
  }

  render() {
    console.log("what is the state?: ", this.state);
    return (
      <div className="Boards">
        {this.state.boardsName.map( item => <div className={item.title}>{item.title}</div>)}
      </div>
    );
  }
}

  function BoardTitles(props){
    // console.log("how does this work?????: ", props.title)
    return props.boardsName.map( item => <Boards key={item.id} title={item.title}/>)
  }


export default Boards;
