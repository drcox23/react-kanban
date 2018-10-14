import axios from 'axios';

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';

export const getAllTasks = () => {
  return dispatch => {
    axios
        .get("/tasks")
        .then(response => {
          console.log("response****", response);
          dispatch({type: GET_ALL_TASKS, payload: response.data})
        })
        .catch(err => {
          dispatch({type: "DISPLAY_ERROR_NOTIFICATION", err});
        });
    }
  }

export const addNewTask = (task) => {
  console.log("TASSSKKK ACTION ", task)
  return dispatch => {
    axios
      .post("/new",task)
      .then(response => {
        console.log("see the response", response.data);
        dispatch({type: GET_ALL_TASKS, payload: response.data})
      })
      .catch(err => {
        console.log("errors in addItem axios call ", err);
      })
  }
}