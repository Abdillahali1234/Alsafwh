import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import StudentSlice from "./slices/StudentSlice";
import FeedBackSlice from "./slices/FeedBackSlice";
import CourseSlice from "./slices/CourseSlice";
import SubjectSlice from "./slices/SubjectSlice";
import TeacherSlice from './slices/TeahcerSlice';
import YearSlice from "./slices/YearSlice";
export const Store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Student: StudentSlice,
    FeedBack: FeedBackSlice,
    Course: CourseSlice,
    Subject: SubjectSlice,
    Teacher: TeacherSlice,
    Year: YearSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
