import styles from './Form.module.css';
import image from '../.././Assets/js_course.jpg'
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

const Form = () => {
    const endTime = moment().add(59, 'minutes').add(59, 'seconds');
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const leftTime = -moment().diff(endTime) / 1000;
            const minutes = Math.floor(leftTime / 60);
            const seconds = Math.floor(leftTime % 60);
            setTime(`${minutes} minut i ${seconds} sekund`)
        }, 1000)
    }, [])
    return(
        <div className={styles.container}>
            <div className={styles.product__box}>
                <img className={styles.img} src={image} alt="Javascript Course Logo" />
                <div className={styles.price}>
                    <span><p><s>79,99 $</s> 59,99 $</p></span>
                    <p className={styles.steal}>Promocja trwa tylko jeszcze: {time}</p>
                </div>
            </div>
            <div className={styles.form}>
                formulage
            </div>
        </div>
    )
}

export default Form;