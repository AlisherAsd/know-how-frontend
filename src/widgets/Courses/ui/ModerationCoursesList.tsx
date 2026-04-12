import { Button } from "@mui/material";
import s from "./ModerationCoursesList.module.css";

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

export const ModerationCoursesList = () => {
  return (
    <div className={s.list}>
      {COURSES.map((course) => (
        <div key={course.id} className={s.list__item}>
          <div className={s.item__left}>
            <img src={course.img} alt={course.title} />
            <div>
              <h3>{course.title}</h3>
              <div>
                <span>{course.id}</span>
                <span>{course.author}</span>
              </div>
              <div>
                <span>{course.description}</span>
              </div>
            </div>
          </div>
          <div className={s.item__right}>
            <Button variant="contained" color="success">
              Одобрить
            </Button>
            <Button variant="contained" color="error">
              Отклонить
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
