import { ModerationCoursesList } from "@/widgets/Courses/ui/ModerationCoursesList";

export const ModerationPage = () => {
  return (
    <div className="space-y-8 py-8 sm:py-10">
      {/* <section className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Панель модератора</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Курсы, ожидающие решения</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Экран собран как административная зона: спокойно, чисто и с сильным контрастом между контентом и действиями.
        </p>
      </section> */}

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[32px] bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm text-slate-400">На проверке</p>
          <p className="mt-2 text-4xl font-semibold text-slate-950">12</p>
        </div>
        <div className="rounded-[32px] bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm text-slate-400">Одобрено сегодня</p>
          <p className="mt-2 text-4xl font-semibold text-slate-950">7</p>
        </div>
        <div className="rounded-[32px] bg-amber-300 p-6 text-slate-950 shadow-[0_35px_110px_-65px_rgba(251,191,36,0.95)]">
          <p className="text-sm text-slate-700">Требуют внимания</p>
          <p className="mt-2 text-4xl font-semibold">3</p>
        </div>
      </section>

      <section>
        <ModerationCoursesList />
      </section>
    </div>
  );
};
