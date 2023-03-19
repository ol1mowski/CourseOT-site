import ImageLogo from '../../Assets/logo.png'
import ImageOne from '../../Assets/welcome.jpg'
import styles from './MainSite.module.css'
import ImageBall from '../../Assets/background.jpg'

function MainSite() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={ImageLogo} alt='Logo of Ot'/>
                <span className={styles.span_logo}>OT-Groupe</span>
            </div>
            <div className={styles.main_site}>
                <div className={styles.string}>
                    <h1>Zostań <br /> programistą <br /> JavaScript</h1>
                </div>
                <div className={styles.photo}>
                    <img className={styles.photo_programmer} src={ImageOne} alt='programer with code'/>
                    <img className={styles.background_image} src={ImageBall} alt='background to programmer' />
                </div>
            </div>
            <div className={styles.button_block}>
                <button className={styles.button}>Dowiedz się więcej</button>
            </div>
        </div>
    )
}

export default MainSite;