import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const Api = axios.create({
  baseURL: import.meta.env.VITE_SEVER_LINK,
  withCredentials: true,
});

Api.interceptors.request.use((config) => {
  const token = cookies.get("auhModel")?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Attempt to refresh the token
      try {
        const refreshToken = cookies.get("refreshToken");
        const { data } = await axios.get(
          `${import.meta.env.VITE_SEVER_LINK}/Auth/refreshToken`,
          {
            headers: {
              Cookie: `refreshToken=${encodeURIComponent(refreshToken)}`,
            },
            withCredentials: true,
          }
        );

        cookies.set("auhModel", data, {
          path: "/",
          expires: new Date(data.refreshTokenExpiresOn),
        });
        cookies.set("refreshToken", data.refreshToken, {
          path: "/",
          expires: new Date(data.refreshTokenExpiresOn),
        });

        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return Api(originalRequest);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        // Redirect to login or handle the error as needed
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
