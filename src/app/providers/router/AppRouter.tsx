import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import { ROUTES } from "./config";
import { ModerationPage } from "@/pages/ModerationPage/ui/ModerationPage";
import { MyCoursesPage } from "@/pages/MyCoursesPage/ui/MyCoursesPage";
import { MyLearningPage } from "@/pages/MyLearningPage/ui/MyLearningPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AuthPage } from "@/pages/AuthPage";
import RegisterPage from "@/pages/RegisterPage/ui/RegisterPage";
import { CourseLessonPage, CoursePage, CoursesPage, CreateCoursePage } from "@/pages/CoursesPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={ROUTES.MAIN} />} />
      <Route path={"*"} element={<Navigate to={ROUTES.MAIN} />} />
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.COURSES} element={<CoursesPage />} />
      <Route path={ROUTES.COURSE} element={<CoursePage />} />
      <Route path={ROUTES.COURSE_LESSON} element={<CourseLessonPage />} />
      <Route path={ROUTES.MY_LEARNING} element={<MyLearningPage />} />
      <Route path={ROUTES.MY_COURSES} element={<MyCoursesPage />} />
      <Route path={ROUTES.CREATE_COURSE} element={<CreateCoursePage />} />
      <Route path={ROUTES.MODERATION} element={<ModerationPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.AUTH} element={<AuthPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};
