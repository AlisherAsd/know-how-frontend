import { AppButton } from "@/shared/ui/Button";
import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { Link } from "react-router-dom";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import { ROUTES } from "@/app/providers/router/config";

const formSections = [
  {
    title: "Обложка и позиционирование",
    description: "На этом блоке автор быстро задает настроение курса: название, категория и краткое обещание результата.",
  },
  {
    title: "Структура уроков",
    description: "Позже сюда можно подключить drag-and-drop, порядок уроков, статусы черновиков и редактор контента.",
  },
  {
    title: "Цена в эфирах",
    description: "Сейчас это декоративное поле, но визуально уже ясно, где автор определяет стоимость своего курса.",
  },
];

export const CreateCoursePage = () => {
  useScrollTop();

  return (
    <div className="space-y-8 py-8 sm:py-10">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-65px_rgba(15,23,42,1)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Конструктор курса</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Форма, в которой автору приятно собирать свой мини-курс
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Экран сделан как продуманная авторская зона: здесь можно красиво оформить курс, продумать структуру и
            задать цену в эфирах без перегруза интерфейса.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {formSections.map((section) => (
              <div key={section.title} className="rounded-[28px] bg-white/8 p-5">
                <p className="text-lg font-semibold">{section.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Что важно в этом UI</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] bg-slate-50 p-5">
              <p className="flex items-center gap-3 font-medium text-slate-950">
                <TipsAndUpdatesRoundedIcon className="text-amber-500" />
                Понятная иерархия
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Автор с первого взгляда понимает, что заполнять сначала и как курс будет восприниматься в каталоге.
              </p>
            </div>
            <div className="rounded-[24px] bg-slate-50 p-5">
              <p className="flex items-center gap-3 font-medium text-slate-950">
                <AutoStoriesRoundedIcon className="text-sky-500" />
                Акцент на структуру
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Курс воспринимается как продукт с уроками, а не просто как один текстовый блок.
              </p>
            </div>
            <div className="rounded-[24px] bg-slate-50 p-5">
              <p className="flex items-center gap-3 font-medium text-slate-950">
                <CurrencyExchangeRoundedIcon className="text-emerald-500" />
                Цена встроена в поток
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Поле стоимости не выглядит отдельной формальностью, а встроено в общую логику оформления курса.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <form
          className="space-y-6 rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-teal-600">Шаг 1</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Основная информация</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Название курса</span>
              <input
                type="text"
                placeholder="Например: UI-дизайн для разработчиков"
                className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Категория</span>
              <div className="relative">
                <CategoryRoundedIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select className="w-full appearance-none rounded-[22px] border border-slate-200 bg-slate-50 px-12 py-4 outline-none transition focus:border-slate-950 focus:bg-white">
                  <option>Программирование</option>
                  <option>Языки</option>
                  <option>Дизайн</option>
                  <option>Маркетинг</option>
                </select>
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Уровень</span>
              <select className="w-full appearance-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white">
                <option>Для новичков</option>
                <option>Базовый</option>
                <option>Средний</option>
                <option>Продвинутый</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Короткое описание</span>
              <textarea
                rows={4}
                placeholder="Опишите, кому подойдет курс и какой результат получит ученик"
                className="w-full resize-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
              />
            </label>
          </div>

          <div className="rounded-[28px] bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Шаг 2</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">Структура курса</h3>
            <div className="mt-5 space-y-3">
              {["Введение в тему", "Практический модуль", "Разбор кейсов", "Финальный урок"].map((lesson, index) => (
                <div key={lesson} className="flex items-center gap-4 rounded-[22px] bg-white px-4 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-950">{lesson}</p>
                    <p className="text-sm text-slate-400">Черновик урока</p>
                  </div>
                  <Link
                    to={`/courses/1/lesson/${index + 1}`}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
                  >
                    Редактировать
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_220px]">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Что получит ученик</span>
              <textarea
                rows={4}
                placeholder="Например: соберет свой первый проект, поймет структуру уроков, научится упаковывать знания"
                className="w-full resize-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Цена в эфирах</span>
              <div className="rounded-[28px] bg-slate-950 p-5 text-white">
                <input
                  type="number"
                  placeholder="45"
                  className="w-full border-none bg-transparent text-4xl font-semibold outline-none"
                />
                <p className="mt-2 text-sm text-slate-300">Автор сам задает стоимость курса</p>
              </div>
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to={ROUTES.MODERATION}>
              <AppButton>Отправить на модерацию</AppButton>
            </Link>
            <Link to={ROUTES.MY_COURSES}>
              <AppButton variant="ghost">Сохранить как черновик</AppButton>
            </Link>
          </div>
        </form>

        <aside className="space-y-5">
          <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Превью карточки</p>
            <div className="mt-5 overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
              <div className="h-48 bg-[linear-gradient(135deg,#0f172a,#14b8a6)]" />
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600">Дизайн</span>
                  <span className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white">45 эф.</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Вы · автор курса</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">Название вашего курса</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Здесь можно сразу показать автору, как его курс будет смотреться в каталоге.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-teal-400 p-6 text-slate-950 shadow-[0_35px_110px_-65px_rgba(45,212,191,0.95)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-700">Почему это полезно</p>
            <p className="mt-4 text-lg leading-8">
              Такой экран уже можно показывать на защите: он демонстрирует и сценарий автора, и зрелость продукта,
              даже пока без настоящей логики.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};
