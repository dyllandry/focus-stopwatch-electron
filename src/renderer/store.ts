import { configureStore } from '@reduxjs/toolkit';
import focusStopwatchReducer from './focusStopwatchSlice';

const store = configureStore({
  reducer: {
    focusStopwatch: focusStopwatchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
