import { createSlice } from '@reduxjs/toolkit'
import { userRegistration } from '../api'

const initialState = {}
export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state, action) => {})
  }
})
