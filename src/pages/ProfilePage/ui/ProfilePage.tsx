import { useState } from "react";
import { BalanceModal } from "./BalanceModal";
import { AppButton } from "@/shared/ui/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { LogoutModal } from "./LogoutModal";

export const ProfilePage = () => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);
  const [isLoading] = useState(false);
  return (
    <>
      <BalanceModal open={isOpenBalance} handleClose={() => setIsOpenBalance(false)} />
      <LogoutModal open={isOpenLogout} handleClose={() => setIsOpenLogout(false)} />
      <div className="space-y-8 py-8 sm:py-10">
        {isLoading ? (
          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="animate-pulse sm:p-10 rounded-[40px] bg-gray-200" />
            <div className="animate-pulse sm:p-8 rounded-[40px] bg-gray-200" />
          </section>
        ) : (
          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
              <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Профиль автора</p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Алина Журавлева</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Frontend-разработчик и автор практичных курсов для тех, кто хочет быстро перейти от
                теории к первому результату.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div
                  className="rounded-[28px] bg-white/8 p-5"
                  onClick={() => setIsOpenBalance(true)}
                >
                  <p className="text-sm text-slate-400">На балансе</p>
                  <p className="mt-2 text-3xl font-semibold">264 эфира</p>
                </div>
                <div className="rounded-[28px] bg-white/8 p-5">
                  <p className="text-sm text-slate-400">Отзывы</p>
                  <p className="mt-2 text-3xl font-semibold">86</p>
                </div>
                <div className="rounded-[28px] bg-white/8 p-5">
                  <p className="text-sm text-slate-400">Рейтинг</p>
                  <p className="mt-2 text-3xl font-semibold">4.9</p>
                </div>
              </div>
              <div className="justify-end flex pt-5 pr-5">
                <AppButton
                  variant="danger"
                  className="flex gap-2 items-center"
                  onClick={() => setIsOpenLogout(true)}
                >
                  <LogoutIcon />
                  <div>Выйти</div>
                </AppButton>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Краткая сводка</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm text-slate-400">Статус</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">Активный автор</p>
                </div>
                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm text-slate-400">Роль</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">Пользователь</p>
                </div>
                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm text-slate-400">Курсов опубликовано</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">4</p>
                </div>
                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm text-slate-400">Курсов куплено</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">9</p>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,#14b8a6,#ccfbf1)] p-6 text-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-700">О себе</p>
                <p className="mt-3 leading-7">
                  Люблю объяснять сложные темы простым языком. В KnowHow хочу развивать курсы по
                  фронтенду и UI.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
