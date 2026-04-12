import { motion } from "framer-motion";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

const steps = [
  {
    title: "1. Получаешь стартовые эфиры",
    text: "После регистрации у пользователя уже есть внутренняя валюта, чтобы начать учиться без ожидания.",
    icon: CurrencyExchangeRoundedIcon,
  },
  {
    title: "2. Покупаешь мини-курс",
    text: "Каждая покупка открывает доступ к материалам курса: урокам, описанию структуры и практическим блокам.",
    icon: AutoStoriesRoundedIcon,
  },
  {
    title: "3. Создаешь свой курс",
    text: "Автор оформляет знания в красивый мини-курс, задает цену в эфирах и отправляет курс на модерацию.",
    icon: VerifiedRoundedIcon,
  },
  {
    title: "4. Собираешь отзывы и растешь",
    text: "Чем сильнее опыт учеников, тем выше рейтинг автора и доверие к его следующим курсам.",
    icon: ReviewsRoundedIcon,
  },
];

export const ContentHeader = () => {
  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]"
      >
        <div className="overflow-hidden rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_45px_120px_-55px_rgba(15,23,42,1)] sm:p-10">
          <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-teal-200">
            Learn. Teach. Earn.
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Обмен знаниями, в котором
            <span className="text-teal-300"> навыки действительно становятся валютой</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            KnowHow помогает покупать мини-курсы за эфиры, делиться собственной экспертизой и
            превращать обучение в понятную и живую экономику знаний.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/8 p-5">
              <p className="text-3xl font-semibold">100</p>
              <p className="mt-1 text-sm text-slate-300">стартовых эфиров у нового пользователя</p>
            </div>
            <div className="rounded-3xl bg-white/8 p-5">
              <p className="text-3xl font-semibold">2 роли</p>
              <p className="mt-1 text-sm text-slate-300">автор и модератор в одном продукте</p>
            </div>
            <div className="rounded-3xl bg-white/8 p-5">
              <p className="text-3xl font-semibold">∞</p>
              <p className="mt-1 text-sm text-slate-300">
                возможностей учиться у одного, а продавать другому
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="grid gap-4"
        >
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#14b8a6,#0f172a)] p-8 text-white shadow-[0_35px_110px_-50px_rgba(20,184,166,0.9)]">
            <p className="text-sm uppercase tracking-[0.28em] text-white/70">Главная идея</p>
            <p className="mt-4 text-2xl font-semibold leading-snug">
              Не искать “того самого человека”, а находить нужные знания через красивую и понятную
              платформу.
            </p>
          </div>
          <div className="rounded-[36px] border border-white/70 bg-white/85 p-8 shadow-[0_35px_110px_-60px_rgba(15,23,42,0.45)]">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Для кого</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Студенты, которым нужны понятные объяснения без перегруза.</li>
              <li>Специалисты, осваивающие новую профессию или смежный стек.</li>
              <li>Люди, которые хотят превратить хобби и опыт в полезный мини-курс.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <section className="rounded-[40px] border border-white/70 bg-white/70 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-teal-600">
              Сценарий платформы
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Как работает KnowHow
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Внутри продукта все строится вокруг понятного цикла: пользователь учится, получает
            ценность, потом сам упаковывает знания в курс и возвращает их в экосистему.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                className="rounded-[30px] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <div className="mt-4 grid gap-3 rounded-[28px] bg-slate-950 p-4 text-white md:grid-cols-3">
        <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
          <MenuBookRoundedIcon className="mt-1 text-teal-300" />
          <div>
            <p className="font-medium">Создавай мини-курсы</p>
            <p className="text-sm text-slate-300">
              Оформляй знания как понятные курсы из нескольких уроков.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
          <SchoolRoundedIcon className="mt-1 text-sky-300" />
          <div>
            <p className="font-medium">Покупай за эфиры</p>
            <p className="text-sm text-slate-300">
              Получай доступ к материалам и учись без реальных платежей.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
          <WorkspacePremiumRoundedIcon className="mt-1 text-amber-300" />
          <div>
            <p className="font-medium">Расти как автор</p>
            <p className="text-sm text-slate-300">
              Сильные отзывы помогают твоим курсам выглядеть убедительнее.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
