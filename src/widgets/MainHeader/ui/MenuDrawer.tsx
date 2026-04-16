import Drawer from "@mui/material/Drawer";
import { type FC } from "react";
import { NAV_ITEMS_MOBILE } from "../config";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  isAuth: boolean;
};

export const MenuDrawer: FC<Props> = ({ open, setOpen, isAuth }) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div className="p-3 min-w-60">
        <NavLink
          to={ROUTES.MAIN}
          onClick={() => setOpen(false)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold  text-white"
        >
          KH
        </NavLink>
        <nav className="flex flex-col mt-4 gap-3">
          {isAuth &&
            NAV_ITEMS_MOBILE.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-full py-3 px-5 text-sm font-medium transition ${
                    isActive ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          {!isAuth && (
            <NavLink
              to={ROUTES.COURSES}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-full py-3 px-5 text-sm font-medium transition ${
                  isActive ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Каталог
            </NavLink>
          )}
        </nav>
      </div>
    </Drawer>
  );
};
