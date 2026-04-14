export const AuthInfoBlock = () => {
  return (
    <div className="bg-slate-950 p-8 text-white sm:p-10">
      <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Возвращайся в KnowHow</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight">
        Вход в платформу, где знания работают как актив
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
        Мы пока не подключаем настоящую авторизацию, но уже делаем экран, который выглядит как
        готовый продукт.
      </p>
      <div className="mt-8 space-y-4">
        <div className="rounded-[28px] bg-white/8 p-5">
          <p className="font-medium">Покупай мини-курсы за эфиры</p>
          <p className="mt-2 text-sm text-slate-300">
            Внутренняя экономика остается понятной даже для новичка.
          </p>
        </div>
        <div className="rounded-[28px] bg-white/8 p-5">
          <p className="font-medium">Создавай собственные курсы</p>
          <p className="mt-2 text-sm text-slate-300">
            После модерации знания превращаются в ценный контент.
          </p>
        </div>
      </div>
    </div>
  );
};
