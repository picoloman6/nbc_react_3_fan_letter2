import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import letters from './letters';
import user from './users';

const store = configureStore({
  reducer: {
    letters,
    user
  }
});

// useSelector와 useDispatch의 타입
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// 타입을 적용한 useSelector와 useDispatch
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
