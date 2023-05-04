import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false
//   localStorage.getItem('darkmode') === 'false' ? false : true
};

export const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
        // localStorage.setItem('darkmode',!state.darkMode )
    //   state.darkMode = !state.darkMode
    state.darkMode = action.payload
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
