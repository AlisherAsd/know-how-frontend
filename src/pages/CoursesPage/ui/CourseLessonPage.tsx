import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useCourseById } from "@/entities/courses/composables/useCourses";
import ReactMarkdown from "react-markdown";

export const CourseLessonPage = () => {
  useScrollTop();
  const { id, lessonId } = useParams();
  const courseId = Number(id);
  const currentStep = Number(lessonId);
  const { data: course } = useCourseById(Number.isFinite(courseId) ? courseId : undefined);
  const normalizedStep = Number.isFinite(currentStep) && currentStep > 0 ? currentStep : 1;
  const courseRoute = ROUTES.COURSE.replace(":id", String(courseId));

  return (
    <div className="space-y-8 py-8 sm:py-10">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to={courseRoute}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
        >
          <ArrowBackRoundedIcon fontSize="small" />
          Назад к курсу
        </Link>
        <div className="rounded-full bg-slate-950 px-4 py-3 text-sm font-medium text-white">
          Шаг {normalizedStep}
        </div>
      </section>

      <section className="grid gap-6">
        <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Материал курса</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            {course?.title ?? "Курс загружается"}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            {course?.description ??
              "Здесь будет описание курса, дополнительные материалы и практические блоки."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              Автор #{course?.authorId ?? "—"}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              Рейтинг {course?.rating ?? "—"}
            </span>
            <span className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950">
              {course?.price ?? "—"} эфиров
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-600">Основной контент</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">{course?.description}</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[28px] bg-slate-50 p-5">
            <p className="font-semibold text-slate-950">Описание</p>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-500">
              {course?.description}
            </div>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-5">
            <p className="font-semibold text-slate-950">Контент</p>
            <div className="markdown text-sm leading-7 text-slate-700 sm:text-base">
              <ReactMarkdown>
                {course?.courseText ?? "Контент курса пока не добавлен."}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
