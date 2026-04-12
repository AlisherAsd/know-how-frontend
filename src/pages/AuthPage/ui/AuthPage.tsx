import { ROUTES } from "@/app/providers/router/config";
import { AppButton } from "@/shared/ui/Button";
import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="grid min-h-[calc(100vh-200px)] items-center py-8 sm:py-12">
      <div className="grid overflow-hidden rounded-[40px] border border-white/70 bg-white/80 shadow-[0_35px_110px_-60px_rgba(15,23,42,0.45)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Возвращайся в KnowHow</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">Вход в платформу, где знания работают как актив</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            Мы пока не подключаем настоящую авторизацию, но уже делаем экран, который выглядит как готовый продукт.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-[28px] bg-white/8 p-5">
              <p className="font-medium">Покупай мини-курсы за эфиры</p>
              <p className="mt-2 text-sm text-slate-300">Внутренняя экономика остается понятной даже для новичка.</p>
            </div>
            <div className="rounded-[28px] bg-white/8 p-5">
              <p className="font-medium">Создавай собственные курсы</p>
              <p className="mt-2 text-sm text-slate-300">После модерации знания превращаются в ценный контент.</p>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <div className="mx-auto max-w-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Авторизация</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Снова в деле</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Пока это только верстка, поэтому поля декоративные. Но структура уже готова для `react-hook-form`.
            </p>

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Пароль</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>

              <Link to={ROUTES.MAIN} className="block">
                <AppButton type="button" className="w-full justify-center">
                  Войти в аккаунт
                </AppButton>
              </Link>
            </form>

            <p className="mt-6 text-sm text-slate-500">
              Еще нет аккаунта?{" "}
              <Link to={ROUTES.REGISTER} className="font-semibold text-slate-950">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
