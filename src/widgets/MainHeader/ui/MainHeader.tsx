import { Drawer } from "@mui/material";
import s from "./MainHeader.module.css";
import { Link, useNavigate } from "react-router-dom";
import { HEADER_ROUTES } from "../config";
import { ROUTES } from "@/app/providers/router/config";
import { useState } from "react";
import { CatalogDrawerContent } from "./CatalogDrawerContent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const MainHeader = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCatalogClick = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <CatalogDrawerContent handleClick={handleCatalogClick} />
      </Drawer>
      <header className={s.container}>
        <div className={s.container__left}>
          <div className={s.logo} onClick={() => navigate(ROUTES.MAIN)}>
            <h1>KH</h1>
            <h3>KnowHow</h3>
          </div>
          <nav className={s.navigation}>
            <a onClick={() => setIsDrawerOpen(true)}>Каталог</a>
            {HEADER_ROUTES.map((route) => (
              <Link key={route.path} to={route.path}>
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={s.container__right}>
          <span>150$</span>
          <AccountCircleOutlinedIcon fontSize="large" className={s.accountIcon} />
        </div>
      </header>
    </>
  );
};
