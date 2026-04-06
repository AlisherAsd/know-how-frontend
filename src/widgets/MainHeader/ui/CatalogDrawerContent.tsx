import { CATALOG_COURSE_TYPES } from "../config";
import s from "./CatalogDrawerContent.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  handleClick: (type: string) => void;
};

export const CatalogDrawerContent = ({ handleClick }: Props) => {
  return (
    <div className={s.container}>
      <div>
        <div className={s.logo}>
          <h1>KH</h1>
          <h3>KnowHow</h3>
        </div>
        <div className={s.list}>
          {CATALOG_COURSE_TYPES.map((type) => (
            <div key={type.value} onClick={() => handleClick(type.value)} className={s.item}>
              <p key={type.value}>{type.label}</p>
              <ArrowForwardIosIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
