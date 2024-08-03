/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllCourses,
  getAllCoursesCount,
  getModernCourses,
  getSingleCourse,
} from "@store/slices/CourseSlice";
import { Api } from "@utilities/Api";
import { ICourse } from "@utilities/interfaces/CourseInterface";
import { toast } from "react-toastify";

export const GetAllCoursesApi = (page: number, take: number) => {
  return async (dispatch: Dispatch<PayloadAction<ICourse[]>>) => {
    try {
      const { data } = await Api.get(`Course/getAll?page=${page}&take=${take}`);
      dispatch(getAllCourses(data));
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in get All Courses");
    }
  };
};

export const GetCountCoursesApi = () => {
  return async (dispatch: Dispatch<PayloadAction<number>>) => {
    try {
      const { data } = await Api.get(`Course/getCountToAllCourses`);

      dispatch(getAllCoursesCount(data.count));
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in get Count Courses");
    }
  };
};

export const GetSingleCourse = (id: string) => {
  return async (dispatch: Dispatch<PayloadAction<ICourse>>) => {
    try {
      const { data } = await Api.get(`Course/getById/${id}`);

      dispatch(getSingleCourse(data));
    } catch (error: any) {
      toast.error(error.response.data.message || "حدث خطا اثناء تحميل البينات");
    }
  };
};

export const GetCourseModern = () => {
  return async (dispatch: Dispatch<PayloadAction<ICourse[]>>) => {
    try {
      const { data } = await Api.get(
        `Course/getAll?page=${1}&take=${4}&sort=true`
      );
      dispatch(getModernCourses(data));
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in get All Courses");
    }
  };
};
