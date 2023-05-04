import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "../Store/StudentsSlice";
import  examsSlice  from "../Store//ExamsSLice";
import  darkModeSlice  from "../Store/DarkModeSlice";

export const store = configureStore({
  reducer: {
    students: studentsSlice,
    exams: examsSlice,
    darkMode : darkModeSlice
  },
});
