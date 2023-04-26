import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exams: []
}

export const examsSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
        setExams: (state,action) => {
            state.exams = action.payload
        }
    }
})

export const { setExams } = examsSlice.actions
export default examsSlice.reducer