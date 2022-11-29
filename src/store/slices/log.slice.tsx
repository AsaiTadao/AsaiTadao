import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

interface LogState {
  logs: Array<string>
}

const initialState:LogState = {
  logs:[],
};
const padL = (nr:number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

 
export const rootSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
      addLog: (state, action:PayloadAction<string>) => {
          const dt = new Date();
          state.logs.push(`${
            padL(dt.getMonth()+1)}/${
            padL(dt.getDate())}/${
            dt.getFullYear()} ${
            padL(dt.getHours())}:${
            padL(dt.getMinutes())}:${
            padL(dt.getSeconds())}`
            +'  '+action.payload);
      }
  },
});

export const { addLog } = rootSlice.actions;
export default rootSlice.reducer;