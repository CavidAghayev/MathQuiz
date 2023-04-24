import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "../Slices/Slice";
export const store = configureStore({
  reducer: {
    getData : studentsSlice
  },
});

