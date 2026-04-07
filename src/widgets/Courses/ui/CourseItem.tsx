import Efir from "@/shared/assets/images/Efir.png";
import s from "./CoursesList.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";

type Props = {
  course: {
    id: number;
    img: string;
    title: string;
    author: string;
    description: string;
    price: number;
  };
};

export const CourseItem: FC<Props> = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.COURSES + `/${course.id}`);
  };
  return (
    <div key={course.id} className={s.container__item} onClick={handleClick}>
      <div className={s.item__header}>
        <div>
          <h3>{course.title}</h3>
          <p>{course.author}</p>
        </div>
        <img src={course.img} alt={course.title} />
      </div>
      <div className={s.item__footer}>
        <div className={s.item__footer_info}>
          <span>
            <StarBorderIcon /> 4.5
          </span>
          <span>
            <FavoriteBorderIcon /> 5
          </span>
          <span>
            <AccessTimeIcon /> 5 ч
          </span>
        </div>
        <div className={s.item__footer_price}>
          <span>{course.price}</span>
          <img src={Efir} alt="Efir" />
        </div>
      </div>
    </div>
  );
};
