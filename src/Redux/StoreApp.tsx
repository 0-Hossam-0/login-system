import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './NotificationSlice';
import loadingReducer from './LoadingSlice';

export const storeApp = configureStore({
  reducer: {
    Notification: notificationReducer,
    LoadingLayout: loadingReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof storeApp.getState>;
export type HomeDispatch = typeof storeApp.dispatch;