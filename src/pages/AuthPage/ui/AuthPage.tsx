import { ROUTES } from "@/app/providers/router/config";
import { AppButton } from "@/shared/ui/Button";
import { AuthHeader, AuthInfoBlock } from "@/widgets/AuthPage";
import { Link } from "react-router-dom";
import { useAuthPage } from "../bll";

export default function AuthPage() {
  const { user, setUser, isPending, handleLogin } = useAuthPage();

  return (
    <div className="grid min-h-[calc(100vh-200px)] items-center py-8 sm:py-12">
      <div className="grid overflow-hidden rounded-[40px] border border-white/70 bg-white/80 shadow-[0_35px_110px_-60px_rgba(15,23,42,0.45)] lg:grid-cols-[0.95fr_1.05fr]">
        <AuthInfoBlock />

        <div className="p-8 sm:p-10">
          <div className="mx-auto max-w-xl">
            <AuthHeader />

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input
                  value={user.username}
                  onChange={(e) => setUser((val) => ({ ...val, username: e.target.value }))}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>

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
                disabled={isPending}
                onClick={handleLogin}
                type="button"
                className="w-full justify-center"
              >
                Войти в аккаунт
              </AppButton>
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
