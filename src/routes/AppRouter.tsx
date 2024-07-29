import MainLayout from "@layouts/MainLayout";
import HomePage from "@pages/Home/HomePage";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./../pages/error/ErrorPage";
import { MantineProvider } from "@mantine/core";
import SigninUser from "@pages/signinUser/SigninUser";
import LoginUser from "@pages/loginUser/LoginUser";
import AboutUs from "@pages/aboutUs/AboutUs";
import SingleCourse from "@pages/singleCourse/SingleCourse";
import AllTeacher from "@pages/allTeacher/AllTeacher";
import StudentPage from "./../pages/studentPage/StudentPage";
import AllCourses from "@pages/allcourses/AllCourses";
import AllMaterials from "@pages/allMaterials/AllMaterials";
import SingleMaterial from "@pages/singleMaterial/SingleMaterial";
import ContactUsPage from "@pages/contact-us/ContactUsPage";
import TeacherPage from "@pages/teacherpage/TeacherPage";
import TeacherCourses from "@pages/teacherpage/components/Teachercourses/TeacherCourses";
import ContentCourse from "./../pages/contentCourse/ContentCourse";
import AllFeedback from "./../pages/allFeedback/AllFeedback";
import TeachersStudent from "./../pages/teachersStudent/TeachersStudent";
import LessonDetailsTeacher from "@pages/lession-details/LessonDetailsTeacher";
import Exam from "@pages/exam/Exam";
import ExamPage from "@pages/examPage/ExamPage";
import ConfirmEmail from "@pages/ConfirmEmail/ConfirmEmail";
import { useSelector } from "react-redux";
import { RootState } from "@store/Store";
import AddQuestion from "@pages/addQuestion/AddQuestion";
import FeedbackCourse from "@pages/feedbackCourse/FeedbackCourse";
import CoursesForStudent from "@pages/coursesForStudent/CoursesForStudent";
import ForgetPassword from "@pages/forgetPassword/ForgetPassword";
import ResetPassword from "@pages/resetPassowrd/ResetPassword";

export default function AppRouter() {
  const { IsConfirmed, AuthModel } = useSelector(
    (state: RootState) => state.Auth
  );

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
          element: AuthModel ? <Navigate to={"/"} /> : <SigninUser />,
        },
        {
          path: "/login",
          element: AuthModel ? <Navigate to={"/"} /> : <LoginUser />,
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
          path: "/student-page/:StudentId",
          element: <StudentPage />,
        },
        {
          path: "/all-materials",
          element: <AllMaterials />,
        },
        {
          path: "/single-material",
          element: <SingleMaterial />,
        },
        {
          path: "/contact-us",
          element: <ContactUsPage />,
        },
        {
          path: "/teacher-profile",
          element: <TeacherPage />,
        },
        {
          path: "/teacher-courses",
          element: <TeacherCourses />,
        },
        {
          path: "/content-course",
          element: <ContentCourse />,
        },
        {
          path: "/all-feedback",
          element: <AllFeedback />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "/teacher-student",
          element: <TeachersStudent />,
        },
        {
          path: "/lesson-details/:id",
          element: <LessonDetailsTeacher />,
        },
        {
          path: "/add-exam/:lessonId",
          element: <Exam />, // 404 page
        },
        {
          path: "/exam-page",
          element: <ExamPage />,
        },
        {
          path: "/confirm-email",
          element: !IsConfirmed ? <ConfirmEmail /> : <Navigate to={`/`} />,
        },
        {
          path: "/add-question",
          element: <AddQuestion />,
        },
        {
          path: "/feedback-course",
          element: <FeedbackCourse />,
        },
        {
          path: "/courses-student",
          element: <CoursesForStudent />,
        },
      ],
    },
  ]);
//comment
  return (
    <MantineProvider>
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  );
}
