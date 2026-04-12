import { AppModal } from "@/shared/ui/Modal";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Efir from "@/shared/assets/images/Efir.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import s from "./PayCourseModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    img: string;
    title: string;
    author: string;
    description: string;
    price: number;
  };
};

export const PayCourseModal = ({ isOpen, onClose, course }: Props) => {
  const navigation = useNavigate();
  function handleClickPay() {
    navigation("/courses/" + course.id);
  }
  return (
    <AppModal open={isOpen} onClose={onClose}>
      <div className={s.container}>
        <div className={s.courseInfo}>
          <div>
            <h3>{course.title}</h3>
            <p>{course.author}</p>
          </div>
          <img src={course.img} alt={course.title} />
          <p>{course.description}</p>
        </div>

        <div className={s.courseFooter}>
          <div className={s.courseStats}>
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
        <Button
          onClick={handleClickPay}
          sx={{
            backgroundColor: "#0173e6",
            color: "#fff",
            textTransform: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "18px",
          }}
        >
          Купить за {course.price}{" "}
          <img src={Efir} alt="Efir" style={{ marginLeft: "5px", width: "24px", height: "24px" }} />
        </Button>
      </div>
    </AppModal>
  );
};
