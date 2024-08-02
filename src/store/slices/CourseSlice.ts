import { IFilter } from "@pages/allcourses/components/Serach/Search";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourse } from "@utilities/interfaces/CourseInterface";

export interface IStateCourse {
  courses: ICourse[];
  count: number;
  coursesFilter: ICourse[];
  course: ICourse | null;
}

const initialState: IStateCourse = {
  courses: [],
  count: 0,
  coursesFilter: [],
  course: null,
};

const CourseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {
    getAllCourses: (state, action: PayloadAction<ICourse[]>) => {
      state.courses = action.payload;
      state.coursesFilter = action.payload;
    },
    getAllCoursesCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    Filter: (state, action: PayloadAction<IFilter>) => {
      const { Year, subject } = action.payload;
      state.coursesFilter = state.courses.filter((course) => {
        console.log(course.subject?.description);       
        const matchesYear = Year ? course.year.name === Year : true; 
        const matchesSubject = subject
          ? course.subject?.description.includes(subject)
          : true; 

        return matchesYear && matchesSubject;
      });
    },

    ClearFilter: (state) => {
      state.coursesFilter = [];
    },
    getSingleCourse: (state, action: PayloadAction<ICourse>) => {
      state.course = action.payload;
    },
  },
});

export const {
  getAllCourses,
  getAllCoursesCount,
  Filter,
  ClearFilter,
  getSingleCourse,
} = CourseSlice.actions;
export default CourseSlice.reducer;
