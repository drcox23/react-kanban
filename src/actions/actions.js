import axios from 'axios';

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const GET_ALL_BOARDS = 'GET_ALL_BOARDS'

export const getAllTasks = () => {
  return dispatch => {
    axios
      .get("/tasks")
      .then(response => {
        console.log("TASKS response****", response);
        dispatch({
          type: GET_ALL_TASKS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        });
      });
  }
}

export const getAllBoards = () => {
  return dispatch => {
    axios
      .get("/boards")
      .then(response => {
        console.log("BOARDS response****", response);
        dispatch({
          type: GET_ALL_BOARDS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        });
      });
  }
}


// export const addNewTask = (task) => {
//   console.log("TASSSKKK ACTION ", task)
//   let data
//   return dispatch => {
//   axios
//     .post("/new", task)
//     .then(response => {
//       console.log("see the response", response.data);
//       data = response.data
//       dispatch({
//         type: ADD_TASK,
//         payload: data
//       })
//     })
//     .catch(err => {
//       console.log("errors in addItem axios call ", err);
//       dispatch({
//         type: "ANOTHER_ERROR_ADD"
//       })
//     })

//   }
// }



export const addNewTask = (task) => {
  console.log("TASSSKKK ACTION ", task)
  let data
  axios
    .post("/new", task)
    .then(response => {
      console.log("see the response", response.data);
      data = response.data
      return dispatch => {
        console.log("ADDDDDDDDDD", data)
        dispatch({
          type: ADD_TASK,
          payload: data
        })
      }
    })
    .catch(err => {
      console.log("errors in addItem axios call ", err);
    })
  // return dispatch => {
  //   console.log("ADDDDDDDDDD", data)
  //   dispatch({
  //     type: ADD_TASK,
  //     payload: data
  //   })
  // }
}