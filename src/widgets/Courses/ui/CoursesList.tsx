import { CourseItem } from "./CourseItem";
import type { CoursesResponseItem } from "@/entities/courses/types/courses.types";
import type { FC } from "react";
import { CoursesSkeleton } from "./CoursesSkeleton";
import { useTags } from "@/entities/tags/composables/useTags";
import { Link } from "react-router-dom";

type Props = {
  title?: string;
  subtitle?: string;
  activeCategory?: string | null;
  courses?: CoursesResponseItem[];
  isPending?: boolean;
};

export const CoursesList: FC<Props> = ({
  title = "Популярные мини-курсы",
  subtitle = "Подборка курсов, которые уже хорошо выглядят в каталоге и показывают, как может жить ваш UI.",
  activeCategory,
  courses = [],
  isPending = false,
}: Props) => {
  const { data: tags = [] } = useTags();
  const normalizedCategory =
    activeCategory && activeCategory !== "all" && activeCategory !== "Все категории"
      ? activeCategory
      : null;
  const availableTags = ["Все категории", ...tags];
  const filteredCourses = normalizedCategory
    ? courses.filter((course) => course.tags.includes(normalizedCategory))
    : courses;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-teal-600">
            Каталог знаний
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((category) => {
            const isActive = category === (normalizedCategory ?? "Все категории");

            return (
              <Link
                key={category}
                to={category === "Все категории" ? "/courses" : `/courses?category=${encodeURIComponent(category)}`}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "bg-white/80 text-slate-500 ring-1 ring-slate-200"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>

      {!isPending ? (
        filteredCourses.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div>Данных нет(</div>
        )
      ) : (
        <CoursesSkeleton />
      )}
    </section>
  );
};
