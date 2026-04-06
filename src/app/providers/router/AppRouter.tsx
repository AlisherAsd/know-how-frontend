import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import { ROUTES } from "./config";
import { ModerationPage } from "@/pages/ModerationPage/ui/ModerationPage";
import { MyCoursesPage } from "@/pages/MyCoursesPage/ui/MyCoursesPage";
import { MyLearningPage } from "@/pages/MyLearningPage/ui/MyLearningPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AuthPage } from "@/pages/AuthPage";
import RegisterPage from "@/pages/RegisterPage/ui/RegisterPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.MY_LEARNING} element={<MyLearningPage />} />
      <Route path={ROUTES.MY_COURSES} element={<MyCoursesPage />} />
      <Route path={ROUTES.MODERATION} element={<ModerationPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.AUTH} element={<AuthPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};
