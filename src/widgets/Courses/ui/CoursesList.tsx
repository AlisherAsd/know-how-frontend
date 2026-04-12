import { courseCategories, mockCourses, type Course } from "@/shared/config/mockCourses";
import { CourseItem } from "./CourseItem";

type Props = {
  title?: string;
  subtitle?: string;
  activeCategory?: string | null;
  courses?: Course[];
};

export const CoursesList = ({
  title = "Популярные мини-курсы",
  subtitle = "Подборка курсов, которые уже хорошо выглядят в каталоге и показывают, как может жить ваш UI.",
  activeCategory,
  courses = mockCourses,
}: Props) => {
  const normalizedCategory =
    activeCategory && activeCategory !== "all" && activeCategory !== "Все категории" ? activeCategory : null;

  const filteredCourses = normalizedCategory
    ? courses.filter((course) => course.category.toLowerCase() === normalizedCategory.toLowerCase())
    : courses;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-teal-600">Каталог знаний</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {courseCategories.map((category) => {
            const isActive = category === (normalizedCategory ?? "Все категории");

            return (
              <span
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  isActive ? "bg-slate-950 text-white" : "bg-white/80 text-slate-500 ring-1 ring-slate-200"
                }`}
              >
                {category}
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
