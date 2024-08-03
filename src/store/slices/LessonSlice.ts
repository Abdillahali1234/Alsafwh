import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStateCourse {
  Lessons: [];
}

const initialState: IStateCourse = {
  Lessons: [],
};

const LessonSlice = createSlice({
  name: "Lesson",
  initialState,
  reducers: {},
});

export default LessonSlice.reducer;
