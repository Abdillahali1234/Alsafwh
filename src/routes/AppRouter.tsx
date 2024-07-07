import MainLayout from "@layouts/MainLayout";
// import ErrorPage from "@pages/error/ErrorPage";
import HomePage from "@pages/Home/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./../pages/error/ErrorPage";
import { MantineProvider } from "@mantine/core";
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
          path: "/all-courses",
          element: <AllCourses />,
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
