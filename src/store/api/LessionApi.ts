/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "@utilities/Api";
import { ILesson } from "@utilities/interfaces/PublicInterfce";

export const GetLessonsStudentApi = (courseId: string) => {
  return async (dispatch: Dispatch<PayloadAction<ILesson[]>>) => {
    try {
      const { data } = await Api.get(
        `Lession/getLessionsCourseStudent/${courseId}`
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };
};
