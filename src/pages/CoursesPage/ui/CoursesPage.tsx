import s from "./CoursesPage.module.css";
import { CoursesList } from "@/widgets/Courses";
import { useSearchParams } from "react-router-dom";
import { useScrollTop } from "@/shared/hooks/useScrollTop";

export const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  useScrollTop();

  const category = searchParams.get("category");
  return (
    <div className={s.container}>
      <h2>{category}</h2>
      <CoursesList />
    </div>
  );
};
