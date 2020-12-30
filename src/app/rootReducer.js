// import studentReducer from 'features/Student/reducer';
// import todoReducer from 'features/Todo/reducer';
// import { combineReducers } from 'redux';

// // Ref: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers
// const rootReducer = combineReducers({
//   todos: todoReducer,
//   students: studentReducer,
// });

// export default rootReducer;

// setup with Redux toolkit
import studentReducer from 'features/Student/reducer';
import todoReducer from 'features/Todo/reducer';
import { combineReducers } from 'redux';
import counterReducer from 'features/Counter/counterSlice';

// Ref: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers
const rootReducer = {
  todos: todoReducer,
  students: studentReducer,
  counter: counterReducer,
};

export default rootReducer;
