import styles from './InproveYourself.module.css';
import image from '../../Assets/sciana_kodu.jpg'

function InproveYourself() {
    return(
        <div className={styles.container}>
            <div className={styles.graphic}>
                <img className={styles.img} src={image} alt='obrazek kodu Js' />
            </div>
            <div className={styles.block__text}>
                <h3 className={styles.title}>Zostań mistrzem w swoim fachu</h3>
                <p className={styles.text}>
                    Dzięki naszemu kursowi zostaniesz ekspertem języka JavaScript oraz w projektowaniu stron internetowych.
                </p>
                <p className={styles.text}>
                    Nasz kurs został stworzony po to aby zapewnić jak najlepsze źródło informacji dotyczące zarówno JavaScript jak i dobrych praktych przy pracy.
                </p>
            </div>
        </div>
    )
}

export default InproveYourself;