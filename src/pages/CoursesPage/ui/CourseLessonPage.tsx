import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { mockCourses } from "@/shared/config/mockCourses";
import { AppButton } from "@/shared/ui/Button";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

export const CourseLessonPage = () => {
  useScrollTop();
  const { id, lessonId } = useParams();
  const course = mockCourses.find((item) => String(item.id) === id) ?? mockCourses[0];
  const lessonIndex = Math.max(0, Number(lessonId ?? "1") - 1);
  const lessonTitle = course.lessonsPreview[lessonIndex] ?? course.lessonsPreview[0];

  return (
    <div className="space-y-8 py-8 sm:py-10">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to={ROUTES.COURSE.replace(":id", String(course.id))}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
        >
          <ArrowBackRoundedIcon fontSize="small" />
          Назад к курсу
        </Link>
        <div className="rounded-full bg-slate-950 px-4 py-3 text-sm font-medium text-white">
          Урок {lessonIndex + 1} из {course.lessons}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Страница урока</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{lessonTitle}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Это шаблон отдельного урока внутри курса. Здесь позже можно подключить видео, markdown-контент,
            домашние задания, прогресс и блок обсуждения.
          </p>

          <div className="mt-8 overflow-hidden rounded-[32px] bg-white/8">
            <div className="flex h-[320px] items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.35),_rgba(15,23,42,0.9))]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <PlayCircleOutlineRoundedIcon sx={{ fontSize: 42 }} />
                </div>
                <div>
                  <p className="text-xl font-semibold">Место под видео или интерактивный материал</p>
                  <p className="mt-2 text-sm text-slate-300">Пока это демо-экран без логики, но уже с правильной композицией</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Навигация по курсу</p>
            <div className="mt-5 space-y-3">
              {course.lessonsPreview.map((lesson, index) => {
                const isActive = index === lessonIndex;

                return (
                  <Link
                    key={lesson}
                    to={`/courses/${course.id}/lesson/${index + 1}`}
                    className={`flex items-center gap-4 rounded-[24px] px-4 py-4 transition ${
                      isActive ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                      isActive ? "bg-white/10 text-white" : "bg-white text-slate-950"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{lesson}</p>
                      <p className={`text-sm ${isActive ? "text-slate-300" : "text-slate-400"}`}>Урок курса</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Материалы урока</p>
            <div className="mt-5 space-y-3">
              <div className="rounded-[24px] bg-slate-50 p-4">
                <p className="flex items-center gap-3 font-medium text-slate-950">
                  <MenuBookRoundedIcon className="text-sky-500" />
                  Конспект урока
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">Текстовый материал, шпаргалка и основные тезисы.</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 p-4">
                <p className="flex items-center gap-3 font-medium text-slate-950">
                  <TaskAltRoundedIcon className="text-emerald-500" />
                  Практическое задание
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">Позже сюда можно поставить кнопку сдачи или чеклист.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={ROUTES.MY_LEARNING}>
                <AppButton>Отметить как пройденный</AppButton>
              </Link>
              <Link
                to={`/courses/${course.id}/lesson/${Math.min(lessonIndex + 2, course.lessonsPreview.length)}`}
              >
                <AppButton variant="ghost">Следующий урок</AppButton>
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-600">Ниже можно развивать</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">Блок контента урока</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[28px] bg-slate-50 p-5">
            <p className="font-semibold text-slate-950">Теоретический материал</p>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Поддержка markdown, кодовых блоков, изображений и структурированных заметок.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-5">
            <p className="font-semibold text-slate-950">Интерактив и прогресс</p>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Прогресс-бар, чекпоинты прохождения, заметки ученика и состояние завершения.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-5">
            <p className="font-semibold text-slate-950">Обратная связь</p>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Вопросы по уроку, короткие комментарии и будущий блок отзывов на курс.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
