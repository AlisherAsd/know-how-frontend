export const RegisterInfoBlock = () => {
  return (
    <div className="bg-[linear-gradient(145deg,#14b8a6,#0f172a)] p-8 text-white sm:p-10">
      <p className="text-sm uppercase tracking-[0.28em] text-white/70">После регистрации</p>
      <div className="mt-6 space-y-4">
        <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-3xl font-semibold">100 эфиров</p>
          <p className="mt-2 text-sm text-white/75">
            стартовый капитал, чтобы сразу купить первый курс
          </p>
        </div>
        <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-3xl font-semibold">2 сценария</p>
          <p className="mt-2 text-sm text-white/75">
            учиться самому и одновременно строить свою авторскую витрину
          </p>
        </div>
        <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-3xl font-semibold">1 экосистема</p>
          <p className="mt-2 text-sm text-white/75">
            в которой знания можно продавать, покупать и развивать
          </p>
        </div>
      </div>
    </div>
  );
};
