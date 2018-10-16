import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTasks from "./components/AddTasksModal"



class Header extends Component {
  constructor(props) {
    super(props)
  }

  // showForm() {
  //   let addCardForm =
  //     document.getElementById('NewCardForm-container-show') ||
  //     document.getElementById('NewCardForm-container');
  //   if (addCardForm.id === 'NewCardForm-container') {
  //     addCardForm.id = 'NewCardForm-container-show';
  //   } else if (addCardForm.id === 'NewCardForm-container-show') {
  //     addCardForm.id = 'NewCardForm-container';
  //   }
  // }

  render() {
    console.log("can i see the state from header", this.props)
    return (
      <header className="Header" >
        <div className="Header-logo" >
          <img src={logo} alt="logo" />
        </div>
        <div className="Header-title">KANBAN</div>
        <AddTasks />
      </header>
    );
  }
}

export default Header;
