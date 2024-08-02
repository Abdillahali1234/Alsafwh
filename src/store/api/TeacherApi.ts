/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getAllTeacher } from "@store/slices/TeahcerSlice";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";

export const GetAllTeacherApi = () => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.get("Teacher/getteachers");
      dispatch(getAllTeacher(data));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};
