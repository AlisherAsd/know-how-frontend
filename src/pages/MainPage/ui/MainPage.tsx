import { useEffect } from "react";
import s from "./MainPage.module.css";
import { ContentHeader } from "@/widgets/MainPage";
import { CoursesList } from "@/widgets/Courses";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";

export const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={s.container}>
      <ContentHeader />
      <hr />
      <div className={s.popularCourses}>
        <h3>Популярные курсы </h3>
        <ArrowDownwardIcon />
      </div>
      <CoursesList />
      <Button onClick={() => navigate(ROUTES.COURSES)}>Перейти ко всем курсам</Button>
    </div>
  );
};
