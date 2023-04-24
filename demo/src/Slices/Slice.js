import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};
export const studentsSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getData: (students) => {
      students.value = action.payload
    }
  },
});

export const { getDatacd } = getData.studentsSlice.actions