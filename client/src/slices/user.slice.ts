import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  id: string
}

const initialState: UserState = {
  id: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
  // extraReducers:
})

const userReducer = userSlice.reducer

export default userReducer
