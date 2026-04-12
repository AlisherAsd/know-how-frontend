import { CoursesList } from "@/widgets/Courses";
import { useSearchParams } from "react-router-dom";
import { useScrollTop } from "@/shared/hooks/useScrollTop";

export const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  useScrollTop();

  const category = searchParams.get("category");

  return (
    <div className="space-y-8 py-8 sm:py-10">
      {/* <section className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Каталог KnowHow</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Выбирай курсы по навыкам, которые действительно хочется прокачать
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Здесь позже появятся реальные фильтры, поиск, сортировка и работа с данными. Пока мы собираем
          сильную визуальную основу каталога.
        </p>
      </section> */}

      <section className="rounded-[40px] border border-white/70 bg-white/70 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
        <CoursesList
          title={category ? `Подборка по категории: ${category}` : "Весь каталог курсов"}
          subtitle="Сетка собрана так, чтобы ее потом было легко связать с API, поиском и фильтрацией без переписывания UI."
          activeCategory={category}
        />
      </section>
    </div>
  );
};
