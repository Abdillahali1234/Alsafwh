import MainLayout from "@layouts/MainLayout";
// import ErrorPage from "@pages/error/ErrorPage";
import HomePage from "@pages/Home/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./../pages/error/ErrorPage";
import { MantineProvider } from "@mantine/core";
// import AllCourses from "@pages/allcourses/AllCourses";
import SigninUser from "@pages/signinUser/SigninUser";
import LoginUser from "@pages/loginUser/LoginUser";
import AboutUs from "@pages/aboutUs/AboutUs";
import SingleCourse from "@pages/singleCourse/SingleCourse";
import AllTeacher from "@pages/allTeacher/AllTeacher";
import StudentPage from "./../pages/studentPage/StudentPage";
import AllCourses from "@pages/allcourses/AllCourses";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/all-teacher",
          element: <AllTeacher />,
        },
        {
          path: "/signin",
          element: <SigninUser />,
        },
        {
          path: "/login",
          element: <LoginUser />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/single-course",
          element: <SingleCourse />,
        },
        {
          path: "/all-courses",
          element: <AllCourses />,
        },
        {
          path:"/student-page",
          element:<StudentPage/>
        },

      ],
    },
  ]);

  return (
    <MantineProvider>
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  );
}
