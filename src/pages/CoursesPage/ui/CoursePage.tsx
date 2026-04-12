import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { mockCourses } from "@/shared/config/mockCourses";
import { AppButton } from "@/shared/ui/Button";
import { ROUTES } from "@/app/providers/router/config";
import { Link, useParams } from "react-router-dom";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

export const CoursePage = () => {
  useScrollTop();
  const { id } = useParams();
  const course = mockCourses.find((item) => String(item.id) === id) ?? mockCourses[0];

  return (
    <div className="space-y-8 py-8 sm:py-10">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[40px] bg-slate-950 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)]">
          <div className="grid gap-6 p-8 sm:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">{course.category}</span>
              <span className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950">
                {course.price} эфиров
              </span>
            </div>
            <div>
              <p className="text-sm text-slate-400">{course.author} · {course.role}</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{course.title}</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{course.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] bg-white/8 p-5">
                <p className="text-sm text-slate-400">Уроки</p>
                <p className="mt-2 text-3xl font-semibold">{course.lessons}</p>
              </div>
              <div className="rounded-[28px] bg-white/8 p-5">
                <p className="text-sm text-slate-400">Учеников</p>
                <p className="mt-2 text-3xl font-semibold">{course.students}</p>
              </div>
              <div className="rounded-[28px] bg-white/8 p-5">
                <p className="text-sm text-slate-400">Рейтинг</p>
                <p className="mt-2 text-3xl font-semibold">{course.rating}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)]">
          <img src={course.image} alt={course.title} className="h-64 w-full rounded-[28px] object-cover" />
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <StarRoundedIcon fontSize="small" />
              {course.reviews} отзывов формируют рейтинг автора
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <MenuBookRoundedIcon fontSize="small" />
              Доступ к материалам сразу после покупки
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <PlayCircleOutlineRoundedIcon fontSize="small" />
              Страница готова для будущих уроков, видео и блоков контента
            </div>
            <Link to={`/courses/${course.id}/lesson/1`} className="block">
              <AppButton className="mt-2 w-full">Купить курс за {course.price} эфиров</AppButton>
            </Link>
            <Link to={ROUTES.PROFILE} className="block">
              <AppButton variant="ghost" className="w-full">
                Добавить в избранное
              </AppButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-teal-600">Что внутри курса</p>
          <div className="mt-5 space-y-3">
            {course.lessonsPreview.map((lesson, index) => (
              <Link
                key={lesson}
                to={`/courses/${course.id}/lesson/${index + 1}`}
                className="flex items-center gap-4 rounded-[24px] bg-slate-50 px-4 py-4 transition hover:bg-slate-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-slate-950">{lesson}</p>
                  <p className="text-sm text-slate-500">Открыть урок {index + 1}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-teal-600">Результат обучения</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Что пользователь получит после прохождения</h2>
          <div className="mt-6 space-y-4">
            {course.learningPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-[24px] bg-slate-50 p-4">
                <TaskAltRoundedIcon className="mt-0.5 text-emerald-500" />
                <p className="leading-7 text-slate-600">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,#0f172a,#134e4a)] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Дальше сюда же</p>
            <p className="mt-3 text-lg leading-8 text-slate-200">
              Потом можно будет подключить реальные уроки, прогресс по темам, прохождение по шагам и отзывы без
              переделки всей визуальной оболочки.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
