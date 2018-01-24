// a reducer takes in two things:

// 1. an action (info about what happened)
// 2. copy of current state

// function posts(state = [], action) {
//   console.log(state);
//   switch(action.type) {
//     case 'INCREMENT_LIKES' :
//       return [
//         ...state.slice(0, action.index),
//         {...state[action.index], likes: state[action.index].likes + 1},
//         ...state.slice(action.index + 1)
//       ]
//     default:
//       return state;
//   }
// }
// }
//
function posts(state = [], action) {
  let newState = [...state];
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      newState[action.index].likes++;
      return newState;
    default:
      return state;
  }
}﻿

export default posts;
