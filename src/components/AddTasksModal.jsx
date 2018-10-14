import React, { Component } from "react";
import "../App.css";
import Modal from "react-modal";

const addTaskModalStyles = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)"
};

// setting binding to header
Modal.setAppElement("#root");

class AddTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      title: null,
      priority: null,
      details: null,
      status: null,

    };

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTED!!!!', this.state)
    this.props.addNewTask(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
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
      <div className="add-task-button">
        <div onClick={this.openModal}>+NEW TASK</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={addTaskModalStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <div>I am a modal</div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input onChange={this.handleChange} type="text" name="title"/>
            </label>
            <label>
            <textarea rows="5" cols="30" name="details" placeholder="Details about this task" required></textarea>
            <span>Details</span>
          </label>
            <label>
              Priority:
              <select onChange={this.handleChange} name="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <label>
              Status:
              <select onChange={this.handleChange} name="status">
                <option value="In Queue">In Queue</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <label>
              Assigned To:
              <input onChange={this.handleChange} type="text" name="assignedTo" />
            </label>
            <label>
              Created By:
              <input onChange={this.handleChange} type="text" name="createdBy" />
            </label>
          <input type="submit" value="Submit" required />
          </form>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default AddTasks;
