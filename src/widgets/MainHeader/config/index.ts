import { ROUTES } from "@/app/providers/router/config";

export type NavItem = {
  to: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { to: ROUTES.COURSES, label: "Каталог" },
  { to: ROUTES.MY_COURSES, label: "Мои курсы" },
  { to: ROUTES.MY_LEARNING, label: "Мое обучение" },
  { to: ROUTES.MODERATION, label: "Модерация" },
];

export const NAV_ITEMS_MOBILE: NavItem[] = [...NAV_ITEMS, { to: ROUTES.PROFILE, label: "Профиль" }];
