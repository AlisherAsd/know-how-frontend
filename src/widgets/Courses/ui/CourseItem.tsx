import type { FC } from "react";
import { Link } from "react-router-dom";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import type { CoursesResponseItem } from "@/entities/courses/types/courses.types";

type Props = {
  course: CoursesResponseItem;
};

export const CourseItem: FC<Props> = ({ course }) => {
  return (
    <>
      <article className="group overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-45px_rgba(15,23,42,0.45)]">
        <div className="relative h-56 overflow-hidden">
          <img
            src={
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            }
            alt={course.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full bg-slate-950/80 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              Программирование
            </span>
            <span className="rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-950 backdrop-blur-sm">
              100 эф.
            </span>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <p className="text-sm text-slate-500">
              {"Автор"} · {"Пользователь"}
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
              {course.title}
            </h3>
            {/* <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p> */}
          </div>

          {/* <div className="flex flex-wrap gap-2">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div> */}

          {/* <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-3">
              <div className="flex items-center gap-2">
                <AutoStoriesRoundedIcon fontSize="small" />
                {course.lessons} уроков
              </div>
              <p className="mt-2 text-xs text-slate-400">{course.duration}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <div className="flex items-center gap-2">
                <StarRoundedIcon fontSize="small" />
                {course.rating} рейтинг
              </div>
              <p className="mt-2 text-xs text-slate-400">{course.reviews} отзывов</p>
            </div>
          </div> */}

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <PersonRoundedIcon fontSize="small" />
                {"1"} учеников
              </p>
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <BoltRoundedIcon fontSize="small" />
                Уровень: {"1"}
              </p>
            </div>
            <div className="flex gap-2">
              {/* <button className="cursor-pointer rounded-full bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200">
                Быстрый просмотр
              </button> */}
              <Link
                to={`/courses/${course.id}`}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Открыть курс
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
