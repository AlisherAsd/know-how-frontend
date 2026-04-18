import { ROUTES } from "@/app/providers/router/config";
import { AppButton } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { NAV_ITEMS } from "../config";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuDrawer } from "./MenuDrawer";
import { useMainHeader } from "../bll";
import { NavLinkItem } from "./NavLink";

export const MainHeader = () => {
  const { sentinelRef, isAuth, isOpen, setIsOpen, scrolled, user } = useMainHeader();

  return (
    <>
      <div ref={sentinelRef} style={{ position: "absolute", top: 0, height: "1px" }} />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "pt-0" : "pt-4"}`}
      >
        <MenuDrawer open={isOpen} setOpen={setIsOpen} isAuth={isAuth} />
        <div
          className={`border border-white/70 bg-white/80 px-4 py-4 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            scrolled ? "rounded-t-none rounded-b-4xl " : "rounded-4xl"
          }`}
        >
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <AppButton variant="ghost" className="xl:hidden" onClick={() => setIsOpen(true)}>
                <MenuIcon />
              </AppButton>
              <Link to={ROUTES.MAIN} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold  text-white">
                  KH
                </div>
                <div className="hidden sm:block">
                  <p className="text-lg font-semibold text-slate-950">KnowHow</p>
                  <p className="text-sm text-slate-500">Экономика знаний во внутренних эфирах</p>
                </div>
              </Link>
              <nav className="hidden xl:flex flex-wrap items-center gap-2">
                {isAuth ? (
                  NAV_ITEMS.map((item) => <NavLinkItem item={item} />)
                ) : (
                  <NavLinkItem item={{ to: ROUTES.COURSES, label: "Каталог" }} />
                )}
              </nav>
            </div>

            {isAuth && (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
                  <div className="hidden xl:block rounded-2xl bg-amber-50 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-amber-600">Баланс</p>
                    <p className="text-lg font-semibold text-slate-950">{user?.balance} эфиров</p>
                  </div>
                  <div className="hidden xl:block  rounded-2xl bg-emerald-50 px-4 py-3">
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
                      {user?.username}
                    </AppButton>
                  </Link>
                </div>
              </div>
            )}

            {!isAuth && (
              <Link to={ROUTES.AUTH}>
                <AppButton variant="ghost" className="gap-2">
                  <PersonOutlineRoundedIcon fontSize="small" />
                  Вход
                </AppButton>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
