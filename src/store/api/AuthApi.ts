/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  ConfirmEmail,
  SignIn,
  LogIn,
  changePassword,
} from "@store/slices/AuthSlice";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { getStudent } from "@store/slices/StudentSlice";
import {
  IChangePassword,
  IResetPassword,
  ITeacher,
} from "@utilities/interfaces/PublicInterfce";
import { GetOneTeacher } from "@store/slices/TeahcerSlice";
export const SignInApi = (Data: FormData) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      dispatch(SignIn({ IsLoading: true, IsRegistered: false }));
      const { data } = await Api.post("Auth/register", Data);
      dispatch(SignIn({ IsLoading: false, IsRegistered: true }));
      toast.success(data);
    } catch (error: any) {
      dispatch(SignIn({ IsLoading: false }));
      if (Array.isArray(error?.response.data)) {
        if (error?.response.data[0].description) {
          let errorMessage = "";
          error?.response.data.forEach(
            (element: { code: string; description: string }) => {
              console.log(element);

              errorMessage += element.description;
            }
          );
          toast.error(errorMessage);
          return;
        }
        toast.error(error?.response.data.join(", "));
        return;
      }
      toast.error(error?.response.data.message);
    }
  };
};

export const verifyEmail = (token: string, email: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post(`/Auth/confirmEmail`, {
        token: token,
        email: email,
      });
      console.log(data.message);
      dispatch(ConfirmEmail({ status: true, message: data.message }));
    } catch (error: any) {
      dispatch(
        ConfirmEmail({ status: true, message: error?.response.data.message })
      );

      toast.error(error?.response.data.message);
    }
  };
};

export const LoginApi = (email: string, password: string, en: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post(`/Auth/login`, { email, password });
      const cookies = new Cookies();
      const expires = new Date(data.refreshTokenExpiresOn);
      if (isNaN(expires.getTime())) {
        throw new Error(
          `Invalid expiration date: ${data.refreshTokenExpiresOn}`
        );
      }

      cookies.set("refreshToken", data.refrashToken, {
        path: "/",
        expires: expires,
      });

      cookies.set("authModel", JSON.stringify(data), {
        path: "/",
        expires: expires,
      });
      dispatch(LogIn(data));
      toast.success(
        en == "ar"
          ? "تم تسجيل الدخول بنجاح"
          : "You have successfully logged in."
      );
    } catch (error: any) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };
};

export const LogOut = (lang: string) => {
  return async (
    dispatch: Dispatch<PayloadAction<boolean | ITeacher | null>>
  ) => {
    try {
      const cookies = new Cookies();
      const data = cookies.get("authModel");
      cookies.remove("RefreashToken", { path: "/" });
      cookies.remove("refreshToken", { path: "/" });
      cookies.remove("authModel", { path: "/" });

      if (data.roles[0] === "Student") {
        localStorage.removeItem("student");
        dispatch(getStudent(null));
      } else if (data.roles[0] === "Teacher") {
        localStorage.removeItem("teacher");
        dispatch(GetOneTeacher(null));
      }
      dispatch(LogIn(null));
      toast.success(
        lang == "ar"
          ? "تم تسجيل الخروج بنجاح"
          : "You have successfully logged out."
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const ForgetPasswordApi = (email: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post("Auth/forgetpassword", { email: email });
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Error in ForgetPassword");
    }
  };
};

export const ResetPasswordApi = (obj: IResetPassword) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post("Auth/resetpassword", obj);
      toast.success(data.message);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "فشل اعاده تعيين كلمه السر"
      );
    }
  };
};

export const ChangePasswordApi = (obj: IChangePassword) => {
  return async (
    dispatch: Dispatch<
      PayloadAction<{ IsLoading: boolean; isChanged: boolean }>
    >
  ) => {
    try {
      dispatch(changePassword({ IsLoading: true, isChanged: false }));

      const { data } = await Api.post("Auth/ChangePassword", obj);
      toast.success(data.statusMessage);
      console.log(data);
      dispatch(changePassword({ IsLoading: false, isChanged: data.status }));
    } catch (error: any) {
      console.log(error?.response);
      dispatch(changePassword({ IsLoading: false, isChanged: false }));
      toast.error(error?.response?.data?.messsage || "فشل تغيير كلمه المرور");
    }
  };
};