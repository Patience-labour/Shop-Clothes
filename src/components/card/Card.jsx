import style from './card.module.css';
import arrow from './../../img/icons/Arrow 3.png';

export const Card = ({title, img}) => {

    return (<div className={style.card}>
        <a href="#!" className={style.card__link}></a>
        <img className={style.card__img} src={img} alt="Category Model" />
        <div className={style.card__body}>
            <div className={style.card__text}>
                <div className={style.card__title}>{title}</div>
                <div className={style.card__muted}>Explore Now!</div>
            </div>
            <div className={style.card__icon}>
                <img src={arrow} alt="More" />
            </div>
        </div>
    </div>);
}