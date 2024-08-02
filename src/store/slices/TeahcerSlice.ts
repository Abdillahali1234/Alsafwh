import { createSlice } from "@reduxjs/toolkit";
import { ITeacher } from "@utilities/interfaces/PublicInterfce";

export interface IStateTeacher {
  teachers: ITeacher[];
}

const initialState: IStateTeacher = {
  teachers: [],
};

const TeacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    getAllTeacher: (state, action) => {
      state.teachers = action.payload;
    },
  },
});

export const { getAllTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;
