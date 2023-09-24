import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice'
import { userApi } from './services/user.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { locationApi } from './services/location.service'
// ...

export const store = configureStore({
  reducer: {
    users: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer // thêm  reducer đc tạo từ api
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, locationApi.middleware)
})

//Optional nhưng bắt buộc nếu muốn dùng refetchOnFocus, refetchOnReconnect
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
