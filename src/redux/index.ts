import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector