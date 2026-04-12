export type Course = {
  id: number;
  slug: string;
  title: string;
  author: string;
  role: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  rating: number;
  reviews: number;
  price: number;
  students: number;
  image: string;
  description: string;
  tags: string[];
  learningPoints: string[];
  lessonsPreview: string[];
};

export const courseCategories = [
  "Все категории",
  "Программирование",
  "Языки",
  "Дизайн",
  "Маркетинг",
  "Финансы",
  "Хобби",
  "Спорт",
];

export const mockCourses: Course[] = [
  {
    id: 1,
    slug: "frontend-career-start",
    title: "Frontend Start: от HTML до первого проекта",
    author: "Алина Журавлева",
    role: "Frontend-разработчик",
    category: "Программирование",
    level: "Для новичков",
    duration: "5 недель",
    lessons: 14,
    rating: 4.9,
    reviews: 86,
    price: 48,
    students: 212,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description:
      "Мини-курс для тех, кто хочет освоить основы веб-разработки и собрать свой первый лендинг с понятной структурой.",
    tags: ["HTML", "CSS", "React", "Проект"],
    learningPoints: [
      "Поймете, как устроена современная верстка",
      "Соберете адаптивный UI без страха перед CSS",
      "Получите структуру для своего первого портфолио-проекта",
    ],
    lessonsPreview: ["Введение в веб", "Сетки и адаптив", "Компонентный подход", "Финальный мини-проект"],
  },
  {
    id: 2,
    slug: "spoken-english-for-it",
    title: "English for IT: разговорный английский для созвонов",
    author: "Марк Гуляев",
    role: "Преподаватель английского",
    category: "Языки",
    level: "Intermediate",
    duration: "4 недели",
    lessons: 10,
    rating: 4.8,
    reviews: 64,
    price: 36,
    students: 174,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Практический курс без лишней теории: учимся говорить на встречах, обсуждать задачи и уверенно презентовать идеи.",
    tags: ["Speaking", "IT", "Meetings", "Practice"],
    learningPoints: [
      "Разберете реальные рабочие сценарии общения",
      "Пополните лексику для митингов и интервью",
      "Снизите стресс перед устной практикой",
    ],
    lessonsPreview: ["Small talk", "Daily standup", "Discussing tasks", "Project demo"],
  },
  {
    id: 3,
    slug: "design-thinking",
    title: "Дизайн мышление: как создавать понятные интерфейсы",
    author: "София Романова",
    role: "Product Designer",
    category: "Дизайн",
    level: "Базовый",
    duration: "3 недели",
    lessons: 8,
    rating: 4.7,
    reviews: 58,
    price: 41,
    students: 132,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    description:
      "Курс про то, как видеть пользовательские проблемы, принимать дизайн-решения и оформлять интерфейсы без визуального шума.",
    tags: ["UX", "UI", "Research", "Figma"],
    learningPoints: [
      "Освоите базовый UX-процесс",
      "Научитесь собирать интерфейсы с хорошей иерархией",
      "Получите шаблон анализа экрана перед редизайном",
    ],
    lessonsPreview: ["Пользовательский путь", "Каркас экрана", "Иерархия и акценты", "UI-критика"],
  },
  {
    id: 4,
    slug: "personal-finance-basics",
    title: "Личные финансы без стресса",
    author: "Игорь Лапшин",
    role: "Финансовый консультант",
    category: "Финансы",
    level: "Для всех",
    duration: "2 недели",
    lessons: 6,
    rating: 4.6,
    reviews: 41,
    price: 29,
    students: 118,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Спокойный и прикладной курс про бюджет, накопления и понятные финансовые привычки без сложных терминов.",
    tags: ["Бюджет", "Накопления", "Планирование"],
    learningPoints: [
      "Настроите личную систему учета денег",
      "Разберетесь, как планировать траты",
      "Соберете простую финансовую подушку",
    ],
    lessonsPreview: ["Карта доходов", "Бюджет на месяц", "Финансовая подушка", "Привычки"],
  },
  {
    id: 5,
    slug: "content-marketing-essentials",
    title: "Контент-маркетинг: тексты, которые читают",
    author: "Виктория Еремина",
    role: "Content Lead",
    category: "Маркетинг",
    level: "Junior+",
    duration: "4 недели",
    lessons: 9,
    rating: 4.8,
    reviews: 73,
    price: 44,
    students: 156,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Мини-курс о том, как писать для аудитории, строить контент-план и превращать знания в понятный образовательный продукт.",
    tags: ["Контент", "Копирайтинг", "Стратегия"],
    learningPoints: [
      "Научитесь упаковывать сложные темы простым языком",
      "Соберете базовый контент-план",
      "Поймете, как удерживать внимание читателя",
    ],
    lessonsPreview: ["Аудитория", "Тональность", "Структура текста", "Контент-план"],
  },
  {
    id: 6,
    slug: "home-workout-routine",
    title: "Домашние тренировки: программа на 21 день",
    author: "Данил Котов",
    role: "Тренер",
    category: "Спорт",
    level: "Начальный",
    duration: "3 недели",
    lessons: 12,
    rating: 4.9,
    reviews: 97,
    price: 33,
    students: 243,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    description:
      "Понятный курс для тех, кто хочет выстроить привычку к тренировкам дома и не потерять мотивацию через три дня.",
    tags: ["Фитнес", "Привычка", "План"],
    learningPoints: [
      "Получите готовый маршрут на 21 день",
      "Разберетесь, как отслеживать прогресс",
      "Сможете адаптировать программу под свой уровень",
    ],
    lessonsPreview: ["Разминка", "Силовой блок", "Выносливость", "Восстановление"],
  },
];
