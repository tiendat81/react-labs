// import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;

// setup new store with redux toolkit
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
