import { AppButton } from "@/shared/ui/Button";
import type { CoursesResponseItem } from "@/entities/courses/types/courses.types";
import { useApproveCourse, useRejectCourse } from "@/entities/courses/composables/useCourses";

type Props = {
  courses?: CoursesResponseItem[];
};

export const ModerationCoursesList = ({ courses = [] }: Props) => {
  const { mutate: approveCourse, isPending: isApprovePending } = useApproveCourse();
  const { mutate: rejectCourse, isPending: isRejectPending } = useRejectCourse();

  return (
    <div className="space-y-4">
      {courses.length ? (
        courses.map((course) => (
          <article
            key={`moderation-${course.id}`}
            className="grid gap-5 rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] lg:grid-cols-[220px_1fr_auto]"
          >
            <img
              src={
                course.image ??
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              }
              alt={course.title}
              className="h-48 w-full rounded-[24px] object-cover lg:h-full"
            />

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700">
                  На проверке
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {course.tags[0] ?? "Без тега"}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {course.price} эфиров
                </span>
              </div>

              <div>
                <p className="text-sm text-slate-500">{course.username ?? "Автор"} · Автор курса</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">{course.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-slate-600">{course.description}</p>
              </div>

              <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-slate-400">Тегов</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{course.tags.length}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-slate-400">Рейтинг</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{course.rating}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-slate-400">Автор</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">#{course.authorId}</p>
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
                <AppButton
                  variant="success"
                  className="w-full"
                  disabled={isApprovePending || isRejectPending}
                  onClick={() => approveCourse({ id: course.id })}
                >
                  Одобрить
                </AppButton>
                <AppButton
                  variant="danger"
                  className="w-full"
                  disabled={isApprovePending || isRejectPending}
                  onClick={() => rejectCourse({ id: course.id })}
                >
                  Отклонить
                </AppButton>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p>Нет курсов для модерации</p>
      )}
    </div>
  );
};
