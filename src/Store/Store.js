import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "../Store/StudentsSlice";

export const store = configureStore({
  reducer: {
    students: studentsSlice,
  },
});
