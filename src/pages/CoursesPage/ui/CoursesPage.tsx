import { useEffect } from "react";
import s from "./CoursesPage.module.css";

export const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <div className={s.container}>CoursesPage</div>;
};
