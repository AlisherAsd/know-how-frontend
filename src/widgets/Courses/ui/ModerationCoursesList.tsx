import { mockCourses } from "@/shared/config/mockCourses";
import { AppButton } from "@/shared/ui/Button";
import { Link } from "react-router-dom";

export const ModerationCoursesList = () => {
  return (
    <div className="space-y-4">
      {mockCourses.slice(0, 4).map((course) => (
        <article
          key={`moderation-${course.id}`}
          className="grid gap-5 rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] lg:grid-cols-[220px_1fr_auto]"
        >
          <img src={course.image} alt={course.title} className="h-48 w-full rounded-[24px] object-cover lg:h-full" />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700">
                На проверке
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {course.category}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {course.price} эфиров
              </span>
            </div>

            <div>
              <p className="text-sm text-slate-500">{course.author} · {course.role}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">{course.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">{course.description}</p>
            </div>

            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-400">Уроков</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{course.lessons}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-400">Ожидаемые отзывы</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{course.reviews}+</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-400">Уровень</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{course.level}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 lg:w-[210px]">
            <div className="rounded-[24px] bg-slate-950 p-4 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-teal-300">Модератор</p>
              <p className="mt-2 text-sm text-slate-300">
                Тут позже появятся реальные причины отклонения, статусы и действия.
              </p>
            </div>
            <div className="flex gap-3 lg:flex-col">
              <Link to={`/courses/${course.id}`}>
                <AppButton variant="success" className="w-full">
                  Одобрить
                </AppButton>
              </Link>
              <Link to={`/courses/${course.id}`}>
                <AppButton variant="danger" className="w-full">
                  Отклонить
                </AppButton>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
