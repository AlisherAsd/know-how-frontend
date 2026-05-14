import { AppButton } from "@/shared/ui/Button";
import { useScrollTop } from "@/shared/hooks/useScrollTop";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { useState } from "react";
import type { CoursesCreateData } from "@/entities/courses/types/courses.types";
import ReactMarkdown from "react-markdown";
import { useCreateCourses } from "@/entities/courses/composables/useCourses";
import { useTags } from "@/entities/tags/composables/useTags";

export const CreateCoursePage = () => {
  useScrollTop();
  const { mutate, isPending } = useCreateCourses();
  const { data: tags = [], isPending: isTagsPending } = useTags();

  const [form, setForm] = useState<CoursesCreateData>({
    title: "",
    description: "",
    courseText: "",
    tags: [],
  });

  function handleCreateCourse() {
    mutate(form);
  }

  function handleTagChange(tag: string) {
    setForm((prev) => ({
      ...prev,
      tags: tag ? [tag] : [],
    }));
  }

  return (
    <div className="space-y-8 py-8 sm:py-10">
      {isPending ? (
        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className=" rounded-[32px] h-100 animate-pulse sm:p-10  bg-gray-200" />
          <div className=" rounded-[32px] h-100 animate-pulse sm:p-10  bg-gray-200" />
        </section>
      ) : (
        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
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
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Название курса
                </span>
                <input
                  type="text"
                  value={form.title}
                  placeholder="Например: UI-дизайн для разработчиков"
                  className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Тэги</span>
                <div className="relative">
                  <CategoryRoundedIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={form.tags[0] ?? ""}
                    onChange={(e) => handleTagChange(e.target.value)}
                    disabled={isTagsPending}
                    className="w-full appearance-none rounded-[22px] border border-slate-200 bg-slate-50 px-12 py-4 outline-none transition focus:border-slate-950 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">
                      {isTagsPending ? "Загружаем теги..." : "Выберите тег"}
                    </option>
                    {tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              {/* <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Уровень</span>
              <select className="w-full appearance-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white">
                <option>Для новичков</option>
                <option>Базовый</option>
                <option>Средний</option>
                <option>Продвинутый</option>
              </select>
            </label> */}

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Пишите вашу статью в формате Markdown. Она будет отображаться на странице курса и
                  поможет ученикам понять, чему они научатся и почему им стоит выбрать именно ваш
                  курс.
                </span>
                <textarea
                  value={form.courseText}
                  onChange={(e) => setForm({ ...form, courseText: e.target.value })}
                  rows={10}
                  placeholder="Например: В этом курсе вы научитесь создавать красивые и удобные интерфейсы, даже если у вас нет опыта в дизайне. Мы начнем с основ композиции, цвета и типографики, а затем перейдем к практическим упражнениям и разбору реальных кейсов."
                  className="w-full resize-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_220px]">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Что получит ученик
                </span>
                <textarea
                  rows={4}
                  value={form.description}
                  placeholder="Например: соберет свой первый проект, поймет структуру уроков, научится упаковывать знания"
                  className="w-full resize-none rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-slate-950 focus:bg-white"
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
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
                <AppButton onClick={handleCreateCourse} disabled={isPending}>
                  Отправить на модерацию
                </AppButton>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-[40px] border border-white/70 bg-white/80 p-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.45)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Превью карточки</p>

              <div className="mt-6 overflow-hidden rounded-[30px] border border-slate-200 bg-white">
                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                      Дизайн
                    </span>
                    <span className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white">
                      45 эф.
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Вы · автор курса</p>

                    <h3 className="mt-2 text-5xl font-semibold text-slate-900 leading-snug">
                      {form.title || "Название курса будет отображаться здесь"}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="markdown text-slate-800 leading-relaxed">
                      <ReactMarkdown>
                        {form.courseText || "Здесь будет отображаться текст статьи..."}
                      </ReactMarkdown>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm leading-6 text-slate-500">
                      {form.description || "Короткое описание будет отображаться здесь"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      )}
    </div>
  );
};
