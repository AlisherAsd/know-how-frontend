export const BlockFirst = () => {
  return (
    <div className="overflow-hidden rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-55px_rgba(15,23,42,1)] sm:p-10">
      <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-teal-200">
        Learn. Teach. Earn.
      </div>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        Обмен знаниями, в котором
        <span className="text-teal-300"> навыки действительно становятся валютой</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
        KnowHow помогает покупать мини-курсы за эфиры, делиться собственной экспертизой и превращать
        обучение в понятную и живую экономику знаний.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-white/8 p-5">
          <p className="text-3xl font-semibold">100</p>
          <p className="mt-1 text-sm text-slate-300">стартовых эфиров у нового пользователя</p>
        </div>
        <div className="rounded-3xl bg-white/8 p-5">
          <p className="text-3xl font-semibold">2 роли</p>
          <p className="mt-1 text-sm text-slate-300">автор и модератор в одном продукте</p>
        </div>
        <div className="rounded-3xl bg-white/8 p-5">
          <p className="text-3xl font-semibold">∞</p>
          <p className="mt-1 text-sm text-slate-300">
            возможностей учиться у одного, а продавать другому
          </p>
        </div>
      </div>
    </div>
  );
};
