import styels from './Helpers.module.css';
import image from '../../Assets/pomoc.jpg';

function Helpers() {
    return(
        <div className={styels.container}>
            <div className={styels.block__text}>
                <h3 className={styels.header}>Korzystaj z porad fachowców</h3>
                <p className={styels.text}>
                    Nasz kurs zawiera również fachową pomoc udzielaną przez zawodowych programistów, którzy z chęcią odpowiedzą na każde twoje pytanie
                </p>
            </div>
            <div className={styels.graphic}>
                <img className={styels.img} src={image} alt='obraz fachowca IT' />
            </div>
        </div>
    )
}

export default Helpers;