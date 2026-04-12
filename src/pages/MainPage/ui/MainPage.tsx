import { ContentHeader } from "@/widgets/MainPage";
import { CoursesList } from "@/widgets/Courses";
import { ROUTES } from "@/app/providers/router/config";
import { useScrollTop } from "@/shared/hooks/useScrollTop";
import { Link } from "react-router-dom";
import { AppButton } from "@/shared/ui/Button";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

export const MainPage = () => {
  useScrollTop();

  return (
    <div className="space-y-8 py-8 sm:py-10">
      <ContentHeader />
      
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-[32px] bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)]">
          <RocketLaunchRoundedIcon className="text-sky-500" />
          <h3 className="mt-4 text-xl font-semibold text-slate-950">Старт без барьеров</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Новый пользователь получает эфиры сразу и не упирается в пустой экран или отсутствие контента.
          </p>
        </div>
        <div className="rounded-[32px] bg-slate-950 p-6 text-white shadow-[0_35px_110px_-65px_rgba(15,23,42,1)]">
          <LibraryBooksRoundedIcon className="text-teal-300" />
          <h3 className="mt-4 text-xl font-semibold">Мини-курсы, а не шум</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Курсы выглядят как компактные образовательные продукты с уроками, материалами и внятной подачей.
          </p>
        </div>
        <div className="rounded-[32px] bg-teal-400 p-6 text-slate-950 shadow-[0_35px_110px_-65px_rgba(45,212,191,0.95)]">
          <CreateRoundedIcon />
          <h3 className="mt-4 text-xl font-semibold">Красиво для автора</h3>
          <p className="mt-3 text-sm leading-6 text-slate-800">
            Интерфейс должен мотивировать создавать свои курсы, а не только покупать чужие.
          </p>
        </div>
      </section>

      <section className="rounded-[40px] border border-white/70 bg-white/70 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
        <CoursesList subtitle="Здесь уже можно показать карточки так, чтобы у проекта появился свой продуктовый характер, а не просто учебная сетка." />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={ROUTES.COURSES}>
            <AppButton>Перейти ко всему каталогу</AppButton>
          </Link>
          <Link to={ROUTES.MY_COURSES}>
            <AppButton variant="ghost">Посмотреть зону автора</AppButton>
          </Link>
        </div>
      </section>
    </div>
  );
};
