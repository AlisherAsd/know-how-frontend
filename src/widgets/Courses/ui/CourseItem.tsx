import Efir from "@/shared/assets/images/Efir.png";
import s from "./CoursesList.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { PayCourseModal } from "./PayCourseModal";

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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    if (course.id === 1) {
      setIsOpen(true);
      return;
    }
    navigate("/courses" + `/${course.id}`);
  };

  function handleClickFavorite(e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  }
  return (
    <div key={course.id} className={s.container__item} onClick={handleClick}>
      <PayCourseModal course={course} isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
          <span onClick={(e) => handleClickFavorite(e)}>
            <FavoriteBorderIcon className={isFavorite ? s.favorite : ""} /> 5
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
