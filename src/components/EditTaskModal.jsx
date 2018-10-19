import React, { Component } from "react";
import "../App.css";
import Modal from "react-modal";
import { connect } from 'react-redux';
import { editTask, getTaskByID } from "../actions/actions.js"

const editTaskModalStyles = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)"
};

const formStyle = {
  display: "inline-block"
};


// setting binding to header
Modal.setAppElement("#root");

class EditTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      title: this.title,
      priority: this.priority,
      details: this.details,
      status: this.status,
      assignedTo_UserID: this.assignedTo_UserID,
      createdBy_UserID: this.createdBy_UserID,

    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('SUBMITTED!!!!', this.state)
    const sendIt = {
      title: this.state.title,
      priority: this.state.priority,
      details: this.state.details,
      status: this.state.status,
      assignedTo_UserID: this.state.assignedTo_UserID,
      createdBy_UserID: this.state.createdBy_UserID
    }
    console.log("SUMBITTED DATA", sendIt)
    this.props.dispatch(editTask(sendIt))
    this.setState({ modalIsOpen: false });
    // return this.props.dispatch(getAllTasks())

  }

  handleChange = (e) => {
    // console.log("is this being called???")
    e.preventDefault()
    const { name, value } = e.target
    // console.log("checking the change", e.target)
    this.setState({
      [name] : value
    })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="edit-task-button">
        <div onClick={this.openModal}></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={editTaskModalStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add a Task</h2>
          <form className="addForm" style={formStyle} onSubmit={this.handleSubmit}>
            <label>
              <span>Title: </span>
              <input onChange={this.handleChange} type="text" name="title"/>
            </label>
            <br />
            <label>
            <span>Details: </span>
            <textarea rows="5" cols="30" name="details" type="text" placeholder="Details about this task" onChange={this.handleChange} required></textarea>
            
          </label>
          <br />
            <label>
            <span>Priority: </span>
              <select onChange={this.handleChange} name="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <br />
            <label>
              <span>Status: </span>
              <select onChange={this.handleChange} name="status">
                <option value="In Queue">In Queue</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <br />
            <label>
              <span>Assigned To: </span>
              <input onChange={this.handleChange} type="interger" name="assignedTo_UserID" />
            </label>
            <br />
            <label>
              <span>Created By: </span>
              <input onChange={this.handleChange} type="integer" name="createdBy_UserID" />
            </label>
            <br />
          <input type="submit" value="Submit" required />
          </form>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default connect()(EditTasks);
