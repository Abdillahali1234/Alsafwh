import MainLayout from "@layouts/MainLayout";
import ErrorPage from "@pages/error/ErrorPage";
import HomePage from "@pages/Home/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


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
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
