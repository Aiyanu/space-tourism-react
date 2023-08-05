import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import navbarReducer from '../features/navbar/navbarSlice';
import destinationReducer from '../features/destination/destinationSlice';
import crewReducer from "../features/crew/crewSlice"
import techReducer from "../features/technology/technologySlice"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    navbar: navbarReducer,
    destination: destinationReducer,
    crew: crewReducer,
    technology:techReducer
  },
});
