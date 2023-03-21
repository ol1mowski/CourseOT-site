import styles from './AboutOt.module.css';

function AboutOt() {
    return(
        <div className={styles.container}>
            <div className={styles.bigDes}>
                <span><span className={styles.color}>OT-Groupe</span> to startup, który chce zmienić sposób, w jaki prowadzone są kursy programowania.</span>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.smallDes}>
                <span>Nasz kurs został stworzony, aby dostarczać zastrzyk solidnej wiedzy z zakresu programowania w języku JavaScript wszystkim naszym kursantą.</span>
            </div>
        </div>
    )
}
export default AboutOt;