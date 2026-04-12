import s from "./MainPage.module.css";
import { ContentHeader } from "@/widgets/MainPage";
import { CoursesList } from "@/widgets/Courses";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";
import { useScrollTop } from "@/shared/hooks/useScrollTop";

export const MainPage = () => {
  const navigate = useNavigate();
  useScrollTop();
  return (
    <div className={s.container}>
      <ContentHeader />
      <hr />
      <div className={s.courses}>
        <h3>Курсы для вас</h3>
        <CoursesList />
      </div>
      <Button onClick={() => navigate(ROUTES.COURSES)}>Перейти ко всем курсам</Button>
    </div>
  );
};
