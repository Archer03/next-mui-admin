import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// https://redux-toolkit.js.org/tutorials/quick-start#usage-summary
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export { store };

// https://redux-toolkit.js.org/usage/usage-with-typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector