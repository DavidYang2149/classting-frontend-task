import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import examOfficeReducer from 'src/redux/exam/examOffice';
import examineeReducer from 'src/redux/user/examinee';

const store = configureStore({
  reducer: {
    exam: examOfficeReducer,
    user: examineeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;
export const useRootState = <T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) => {
  return useSelector(selector, equalityFn);
};

export default store;
