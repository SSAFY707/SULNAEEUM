import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import drinkSlice from './drinkSlice';
import searchSlice from './searchSlice';
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    // slice 삽입. slice의 name을 key값으로 사용
    drink : drinkSlice,
    search: searchSlice,
    user:userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;