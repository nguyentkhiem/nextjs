import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import lngReducer from './features/lngSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    lngReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
