import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import navbarReducer from '../features/navbar/navbarSlice';
import destinationReducer from '../features/destination/destinationSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    navbar: navbarReducer,
    destination:destinationReducer
  },
});
