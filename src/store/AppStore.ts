import { configureStore } from '@reduxjs/toolkit';
import {AppReducer} from '@slices';

export const AppStore = configureStore({
  reducer: {
    app: AppReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
