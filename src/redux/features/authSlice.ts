import Cookie from 'js-cookie'
import { LoginPayload } from '@/types/auth.type'
import AuthServices from '@/services/auth.service'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

type AuthState = {
  user: any
}

const initialState = {
  user: {},
} as AuthState

export const handleLoginAsync = createAsyncThunk(
  'auth/handleLogin',
  async (dataLogin: LoginPayload) => {
    // const response = await AuthServices.login(dataLogin)
    // Cookie.set('access-token', response.data.accessToken)
    Cookie.set('access-token', '123456')
    // return response.data
    return
  }
)

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      handleLoginAsync.fulfilled,
      (state: any, action: PayloadAction) => {
        state.user = action.payload
      }
    )
  },
})

export const {} = auth.actions
export default auth.reducer
