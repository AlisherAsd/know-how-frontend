import { mockCourses } from "@/shared/config/mockCourses";
import { AppButton } from "@/shared/ui/Button";
import { ROUTES } from "@/app/providers/router/config";

export const MyLearningPage = () => {
  return (
    <div className="space-y-8 py-8 sm:py-10">
      <section className="rounded-[40px] border border-white/70 bg-white/80 p-8 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-600">Личный кабинет ученика</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Мое обучение</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
          Это экран, где потом удобно показывать прогресс, пройденные уроки, оставленные отзывы и быстрый возврат к материалам.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {mockCourses.slice(0, 4).map((course, index) => (
          <article
            key={`learning-${course.id}`}
            className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]"
          >
            <img src={course.image} alt={course.title} className="h-52 w-full rounded-[24px] object-cover" />
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-slate-950">{course.title}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {25 + index * 18}%
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{course.author}</p>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#14b8a6,#0f172a)]"
                  style={{ width: `${25 + index * 18}%` }}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to={`/courses/${course.id}/lesson/1`}>
                  <AppButton>Продолжить обучение</AppButton>
                </Link>
                <Link to={ROUTES.COURSE.replace(":id", String(course.id))}>
                  <AppButton variant="ghost">Оставить отзыв</AppButton>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
import { Link } from "react-router-dom";
