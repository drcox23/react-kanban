import {
  GET_ALL_TASKS,
  ADD_TASK,
  GET_ALL_BOARDS
} from '../actions/actions.js';


const taskReducer = (state = [], action) => {
  console.log('REDUCER ACTION: ', action)
  console.log('CURRENT STATE: ', state)

  switch (action.type) {
    case GET_ALL_TASKS:
      console.log("action.payload in GET_ALL_TASKS reducer", action.payload)
      return action.payload
    case GET_ALL_BOARDS:
      console.log("action.payload in GET_ALL_BOARDS reducer", action.payload)
      return action.payload
    case ADD_TASK:
      console.log("action.payload in ADD_TASKS reducer", action.payload)
      return [...state, action.payload]
    default:
      return state
  }
}

export default taskReducer