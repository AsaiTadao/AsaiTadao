import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

interface RootState {
  theme: boolean
}

const initialState:RootState = {
  theme:false,
};
 
export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
      setTheme: (state) => {
          state.theme = !state.theme;
      }
  },
});

export const { setTheme } = rootSlice.actions;
export default rootSlice.reducer;