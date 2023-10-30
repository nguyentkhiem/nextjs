import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LngState = {
  lng: string
}

const initialState = {
  lng: 'jp',
} as LngState

export const lng = createSlice({
  name: 'lng',
  initialState,
  reducers: {
    changeLng: (state: LngState, action: PayloadAction<string>) => {
      state.lng = action.payload
    },
  },
})

export const { changeLng } = lng.actions
export default lng.reducer
