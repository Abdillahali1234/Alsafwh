import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getStudent } from "@store/slices/StudentSlice";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";

//TDO go to handling dropdown
export const GetStudentApi = (studentId: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.get(`Student/getstudent/${studentId}`);      
      dispatch(getStudent(data));
    } catch (error) {
      toast.error("Failed to fetch student!");
    }
  };
};
