import { configureStore } from '@reduxjs/toolkit';
import goalsreducer from './redux/goalSlice'

const store = configureStore({
  reducer: {
    goals: goalsreducer, // Add the slice reducer to the store
  },
});

export default store;
