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
import rtkStudentReducer from 'features/Student/studentSlice';
import cartReducer from 'features/Cart/cartSlice';

// Ref: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers
const rootReducer = {
  todos: todoReducer,
  students: studentReducer,
  rtkStudents: rtkStudentReducer,
  counter: counterReducer,
  cart: cartReducer,
};

export default rootReducer;
