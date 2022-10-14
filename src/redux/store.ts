import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import {
  persistStore, persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import examOfficeReducer from 'src/redux/exam/examOffice';
import examineeReducer from 'src/redux/user/examinee';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
};

const rootReducer = combineReducers({
  exam: examOfficeReducer,
  user: examineeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;
export const useRootState = <T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) => {
  return useSelector(selector, equalityFn);
};

export const persistor = persistStore(store);
export default store;
