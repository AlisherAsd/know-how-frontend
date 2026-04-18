import { type FC } from "react";
import type { NavItem } from "../config";
import { NavLink } from "react-router-dom";

type Props = {
  item: NavItem;
};

export const NavLinkItem: FC<Props> = ({ item }) => {
  return (
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
  );
};
