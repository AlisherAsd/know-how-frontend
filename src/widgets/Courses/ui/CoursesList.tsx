import s from "./CoursesList.module.css";
import { CourseItem } from "./CourseItem";

const COURSES = [
  {
    id: 1,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 1",
    author: "Автор 1",
    description: "Описание курса 1",
    price: 100,
  },
  {
    id: 2,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 2",
    author: "Автор 2",
    description: "Описание курса 2",
    price: 200,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
  {
    id: 3,
    img: "https://cdn.stepik.net/media/cache/images/courses/250067/cover_MR1S7CZ/fe62d82203e691122e706982f7e39571.png",
    title: "Курс 3",
    author: "Автор 3",
    description: "Описание курса 3",
    price: 300,
  },
];

export const CoursesList = () => {
  return (
    <div className={s.container}>
      <div className={s.container__list}>
        {COURSES.map((course) => (
          <CourseItem course={course} />
        ))}
      </div>
    </div>
  );
};
