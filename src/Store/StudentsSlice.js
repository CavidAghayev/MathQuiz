import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: []
};

export const studentsSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state,action) => {
      state.students = action.payload
    }
  },
});

export const { setStudents } = studentsSlice.actions
export default studentsSlice.reducer