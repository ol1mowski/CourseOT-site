import styles from './CourseDescribe.module.css';
import image from '../../Assets/aplikacja.png'

function CoursDescribe() {
    return(
        <div className={styles.container}>
            <div className={styles.block__text}>
                <h2 className={styles.header}>Poznaj podstwy<br />JavaScript</h2>
                <p className={styles.text}>Nasz kurs pozwoli Ci w pełni zrozumieć i opanować najpopularniejszy język programowania na świecie oraz poznasz jego praktyczne zastosowania w pracy JavaScript developera</p>
            </div>
            <div className={styles.graphic}>
                <img className={styles.img} src={image} alt='logo kursu'/>
            </div>
        </div>
    )
}

export default CoursDescribe;