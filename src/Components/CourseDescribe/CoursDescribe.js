import styles from './CourseDescribe.module.css';
import image from '../../Assets/aplikacja.png';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

function CourseDescribe() {
  const [show, setShow] = useState(false);

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-200%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 700,
    config: { duration: 1500 }
  });

  useEffect(() => {
    const about = document.getElementById('about');
    const handleScroll = () => {
      const rect = about.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setShow(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about" className={styles.container}>
      <div className={styles.block__text}>
        <animated.h2 className={styles.header} style={show ? springProps : undefined}>Poznaj podstawy<br />JavaScript</animated.h2>
        <animated.p className={styles.text} style={show ? springProps : undefined}>Nasz kurs pozwoli Ci w pełni zrozumieć i opanować najpopularniejszy język programowania na świecie oraz poznasz jego praktyczne zastosowania w pracy JavaScript developera</animated.p>
      </div>
      <div className={styles.graphic}>
        <animated.img className={styles.img} src={image} alt='logo kursu' style={show ? springProps : undefined} />
      </div>
    </div>
  );
}

export default CourseDescribe;
