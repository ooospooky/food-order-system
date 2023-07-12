import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './features/cartSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
export const store = configureStore({
  reducer: {cartSliceReducer},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector