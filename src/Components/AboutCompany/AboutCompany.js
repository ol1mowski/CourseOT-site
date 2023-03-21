import styles from './AboutCompany.module.css';
import imageLogo from '../../Assets/logo.png';
import phone from '../../Assets/icon_media/phone.png'
import address from '../../Assets/icon_media/location.png'
import mail from '../../Assets/icon_media/mail.png'

function AboutCompany() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={imageLogo} alt="logo" />
                <span>OT-Groupe</span>
            </div>
            <div className={styles.contact}>
                <h3 className={styles.title}>Znajdź nas</h3>
                <div className={styles.contact_icon}>
                    <img className={styles.logo_contact} src={phone} alt="phone icon" />
                    <p className={styles.contact__text}>
                    +48 123 456 789
                    </p>
                </div>
                <div className={styles.contact_icon}>
                    <img className={styles.logo_contact} src={address} alt="location icon" />
                    <p className={styles.contact__text}>
                        ul. Praska 68, Warszawa,
                    </p>
                </div>
                <div className={styles.contact_icon}>
                    <img className={styles.logo_contact} src={mail} alt='logo mail' />
                    <p className={styles.contact__text}>
                        kursy.ot-groupe@ot-gropue.de
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany;