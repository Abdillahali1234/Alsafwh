import { createSlice } from "@reduxjs/toolkit";
import {IUser } from "@utilities/interfaces/PublicInterfce";
import { IStudent } from "@utilities/interfaces/StudentInterfce";


export interface IStartState {
  student: IStudent | null;
}

const initialState:IStartState = {
  student: null,
};

const StudentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    getStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { getStudent } = StudentSlice.actions;

export default StudentSlice.reducer;
