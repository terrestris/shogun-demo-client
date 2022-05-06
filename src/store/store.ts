import {
  configureStore
} from '@reduxjs/toolkit';

import drawer from './drawer';
import header from './header';

export const store = configureStore({
  reducer: {
    drawer,
    header
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
