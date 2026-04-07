import s from "./ContentHeader.module.css";
import Cat1 from "@/shared/assets/images/Cat1Icon.png";
import Cat2 from "@/shared/assets/images/Cat2Icon.png";
import Cat3 from "@/shared/assets/images/Cat3Icon.png";
import Cat4 from "@/shared/assets/images/Cat4Icon.png";

export const ContentHeader = () => {
  return (
    <div className={s.container}>
      <div className={s.container__header}>
        <h1>
          Добро пожаловать на
          <span className={s.logo}> KnowHow</span>!
        </h1>
        <p>
          Здесь вы сможете <b>улучшить</b> себя и внести <b>свой</b> вклад в общее развитие
        </p>
        <p>
          <b>Выберите</b> курс, который вас интересует, или <b>создайте</b> свой чтобы{" "}
          <b>увеличить свой капитал</b>
        </p>
      </div>
      <div className={s.container__content}>
        <h2>Как это работает?</h2>
        <div className={s.content__map}>
          <div className={s.content__map_item}>
            <div>
              <h3>1. Выбираете курс</h3>
              <p>
                Выбираете курс, который вам интересен <br /> И покупаете его на стартовый капитал{" "}
                <br />
                Автор получает эфиры
              </p>
            </div>
            <img src={Cat1} alt="Cat 1" />
          </div>
          <div className={s.content__map_item}>
            <div>
              <h3>2. Закончились эфиры?</h3>
              <p>Создаете курс и ожидаете проверки модератора</p>
            </div>
            <img src={Cat2} alt="Cat 2" />
          </div>
          <div className={s.content__map_item}>
            <div>
              <h3>3. Модерация пройдена</h3>
              <p>
                А значит что ваш курс доступен для продажи, и за каждую продажу вы получаете эфиры
              </p>
            </div>
            <img src={Cat3} alt="Cat 3" />
          </div>
          <div className={s.content__map_item}>
            <div>
              <h3>4. На вашем балансе снова есть эфиры</h3>
              <p>А значит вы можете снова покупать курсы и улучшать свои навыки</p>
            </div>
            <img src={Cat4} alt="Cat 4" />
          </div>
        </div>
      </div>
    </div>
  );
};
