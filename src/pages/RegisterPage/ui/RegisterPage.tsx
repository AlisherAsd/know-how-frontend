import { ROUTES } from "@/app/providers/router/config";
import { AppButton } from "@/shared/ui/Button";
import { RegisterInfoBlock } from "@/widgets/RegisterPage";
import { Link } from "react-router-dom";
import { useRegisterPage } from "../bll";

export default function RegisterPage() {
  const { user, setUser, isPending, handleRegister, handleGenerateData } = useRegisterPage();

  return (
    <div className="grid min-h-[calc(100vh-200px)] items-center py-8 sm:py-12">
      <div className="grid overflow-hidden rounded-[40px] border border-white/70 bg-white/80 shadow-[0_35px_110px_-60px_rgba(15,23,42,0.45)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 sm:p-10">
          <div className="mx-auto max-w-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Регистрация</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Создай профиль и получи первые 100 эфиров
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              В этом интерфейсе уже заложен правильный тон продукта: дружелюбный, современный и
              мотивирующий.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Имя</span>
                <input
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser((val) => ({ ...val, username: e.target.value }))}
                  placeholder="Полина"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser((val) => ({ ...val, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>

              {/* <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">О себе</span>
                <textarea
                  placeholder="Расскажите, чему хотите учиться и чем готовы делиться"
                  rows={4}
                  className="w-full resize-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label> */}

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Пароль</span>
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser((val) => ({ ...val, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>

              <AppButton
                onClick={handleRegister}
                disabled={isPending}
                className="mt-1 w-full justify-center"
              >
                Создать аккаунт
              </AppButton>
              <AppButton disabled={isPending} onClick={handleGenerateData} className="w-full justify-center">Сгенериросать данные</AppButton>
            </form>

            <p className="mt-6 text-sm text-slate-500">
              Уже зарегистрирован?{" "}
              <Link to={ROUTES.AUTH} className="font-semibold text-slate-950">
                Войти
              </Link>
            </p>
          </div>
        </div>

        <RegisterInfoBlock />
      </div>
    </div>
  );
}
