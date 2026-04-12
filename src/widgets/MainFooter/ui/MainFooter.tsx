export const MainFooter = () => {
  return (
    <footer className="mt-12 pb-4 pt-8">
      <div className="rounded-[28px] border border-white/70 bg-white/75 px-6 py-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950">KnowHow</p>
            <p className="text-sm text-slate-500">
              Платформа, где знания превращаются в ценность, а эфиры помогают двигаться дальше.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <span>UI-концепт для workshop MVP</span>
            <span>Внутренняя валюта: эфиры</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
