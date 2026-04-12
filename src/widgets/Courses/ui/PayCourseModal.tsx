import { AppModal } from "@/shared/ui/Modal";
import type { Course } from "@/shared/config/mockCourses";
import { AppButton } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
};

export const PayCourseModal = ({ isOpen, onClose, course }: Props) => {
  return (
    <AppModal open={isOpen} onClose={onClose} title="Быстрый просмотр курса">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-[28px]">
            <img src={course.image} alt={course.title} className="h-64 w-full object-cover" />
          </div>
          <div>
            <p className="text-sm text-slate-500">{course.author} · {course.role}</p>
            <h4 className="mt-2 text-3xl font-semibold text-slate-950">{course.title}</h4>
            <p className="mt-3 leading-7 text-slate-600">{course.description}</p>
          </div>
        </div>

        <div className="space-y-5 rounded-[28px] bg-slate-50 p-6">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-white p-4">
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <AutoStoriesRoundedIcon fontSize="small" />
                Уроки
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">{course.lessons}</p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <QueryBuilderRoundedIcon fontSize="small" />
                Длительность
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">{course.duration}</p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <StarRoundedIcon fontSize="small" />
                Рейтинг
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">
                {course.rating} <span className="text-sm font-normal text-slate-400">({course.reviews} отзывов)</span>
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-teal-600">Чему научится ученик</p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              {course.learningPoints.map((point) => (
                <li key={point} className="rounded-2xl bg-white px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-slate-950 p-5 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Цена автора</p>
            <p className="mt-2 text-4xl font-semibold">{course.price} эфиров</p>
            <p className="mt-2 text-sm text-slate-300">
              Пока это только UI, поэтому покупка ничего не списывает и нужна для демонстрации дизайна.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to={`/courses/${course.id}`} onClick={onClose}>
              <AppButton>Перейти на страницу курса</AppButton>
            </Link>
            <Link to="/courses" onClick={onClose}>
              <AppButton variant="ghost">Вернуться в каталог</AppButton>
            </Link>
          </div>
        </div>
      </div>
    </AppModal>
  );
};
