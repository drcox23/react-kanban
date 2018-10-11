import React, { Component } from "react";
import "./App.css";
import Tasks from './components/Tasks.jsx'


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
    // console.log("what is the state?: ", this.state);
    return (
      <div className="Boards">
        {this.state.boardsName.map( item => <div className="Categories" key={item.id}>{item.title}
        <Tasks />
        </div>)}

        
        {/* <BoardTitles items={this.state.items}/> */}
      </div>
    );
  }
}

  // function BoardTitles(props){
  //   console.log("how does this work?????: ", props)
  //   return props.boardsName.map( item => <div className={item.title}> <Boards key={item.id} title={item.title}/></div>)
  // }


export default Boards;
