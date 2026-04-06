import { ROUTES } from "@/app/providers/router/config";

export const HEADER_ROUTES = [
  {
    path: ROUTES.MY_COURSES,
    label: "Мои курсы",
  },
  {
    path: ROUTES.MY_LEARNING,
    label: "Мое обучение",
  },
  {
    path: ROUTES.MODERATION,
    label: "Модерация",
  },
];

export const CATALOG_COURSE_TYPES = [
  {
    label: "Все",
    value: "all",
  },
  {
    label: "Бизнес и управление",
    value: "business",
  },
  {
    label: "Информационные технологии",
    value: "it",
  },
  {
    label: "Дизайн и творчество",
    value: "design",
  },
  {
    label: "Досуг",
    value: "leisure",
  },
  {
    label: "Здоровье и спорт",
    value: "health",
  },
];
