import { ContentHeader } from "@/widgets/MainPage";
import { CoursesList } from "@/widgets/Courses";
import { ROUTES } from "@/app/providers/router/config";
import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { Link } from "react-router-dom";
import { AppButton } from "@/shared/ui/Button";
import { useCourses } from "@/entities/courses/composables/useCourses";

export const MainPage = () => {
  useScrollTop();
  const { data, isPending } = useCourses();

  return (
    <div className="space-y-8 py-8 sm:py-10">
      <ContentHeader />

      <section className="rounded-[40px] border border-white/70 bg-white/70 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
        <CoursesList
          courses={data}
          isPending={isPending}
          subtitle="Здесь уже можно показать карточки так, чтобы у проекта появился свой продуктовый характер, а не просто учебная сетка."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={ROUTES.COURSES}>
            <AppButton>Перейти ко всему каталогу</AppButton>
          </Link>
          <Link to={ROUTES.MY_COURSES}>
            <AppButton variant="ghost">Посмотреть зону автора</AppButton>
          </Link>
        </div>
      </section>
    </div>
  );
};
