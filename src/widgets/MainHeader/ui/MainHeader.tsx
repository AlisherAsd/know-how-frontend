import { ROUTES } from "@/app/providers/router/config";
import { AppButton } from "@/shared/ui/Button";
import { Link, NavLink } from "react-router-dom";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const navItems = [
  { to: ROUTES.COURSES, label: "Каталог" },
  { to: ROUTES.MY_COURSES, label: "Мои курсы" },
  { to: ROUTES.MY_LEARNING, label: "Мое обучение" },
  { to: ROUTES.MODERATION, label: "Модерация" },
];

export const MainHeader = () => {
  return (
    <header className="sticky top-4 z-40 pt-4">
      <div className="rounded-4xl border border-white/70 bg-white/80 px-4 py-4 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <Link to={ROUTES.MAIN} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold tracking-[0.3em] text-white">
                KH
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-950">KnowHow</p>
                <p className="text-sm text-slate-500">Экономика знаний во внутренних эфирах</p>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
              <div className="rounded-2xl bg-amber-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-600">Баланс</p>
                <p className="text-lg font-semibold text-slate-950">100 эфиров</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-600">Рейтинг</p>
                <p className="text-lg font-semibold text-slate-950">4.9 из 5</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600 sm:flex">
                <WorkspacePremiumRoundedIcon fontSize="small" />
                Твой статус: активный автор
              </div> */}
              <Link to={ROUTES.PROFILE}>
                <AppButton variant="ghost" className="gap-2">
                  <PersonOutlineRoundedIcon fontSize="small" />
                  Профиль
                </AppButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
