import { mockCourses } from "@/shared/config/mockCourses";
import { AppButton } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";

export const MyCoursesPage = () => {
  return (
    <div className="space-y-8 py-8 sm:py-10">
      <section className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Зона автора</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Мои курсы</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Здесь автор сможет видеть свои черновики, опубликованные мини-курсы, карточки статусов и базовую аналитику.
        </p>
        <div className="mt-6">
          <Link to={ROUTES.CREATE_COURSE}>
            <AppButton variant="secondary">Создать новый курс</AppButton>
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[32px] bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm text-slate-400">Опубликовано</p>
          <p className="mt-2 text-4xl font-semibold text-slate-950">3</p>
        </div>
        <div className="rounded-[32px] bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm text-slate-400">На модерации</p>
          <p className="mt-2 text-4xl font-semibold text-slate-950">1</p>
        </div>
        <div className="rounded-[32px] bg-teal-400 p-6 text-slate-950 shadow-[0_35px_110px_-65px_rgba(45,212,191,0.95)]">
          <p className="text-sm text-slate-700">Заработано</p>
          <p className="mt-2 text-4xl font-semibold">264 эфира</p>
        </div>
      </section>

      <section className="space-y-4">
        {mockCourses.slice(0, 3).map((course) => (
          <article
            key={`my-course-${course.id}`}
            className="grid gap-5 rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] lg:grid-cols-[240px_1fr_auto]"
          >
            <img src={course.image} alt={course.title} className="h-48 w-full rounded-[24px] object-cover" />
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  Опубликован
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {course.price} эфиров
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{course.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">{course.description}</p>
            </div>
            <div className="flex flex-col gap-3 lg:w-[210px]">
              <Link to={ROUTES.CREATE_COURSE}>
                <AppButton>Редактировать</AppButton>
              </Link>
              <Link to={ROUTES.PROFILE}>
                <AppButton variant="ghost">Посмотреть статистику</AppButton>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
