import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import styles from './AboutOt.module.css';

function AboutOt() {
  const scrollToElement = () => {
    animateScroll.scrollToElement('#about', {
      duration: 500,
      delay: 100,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    const about = document.getElementById('about');
    if (about) {
      about.addEventListener('mouseenter', scrollToElement);
    }
    return () => {
      if (about) {
        about.removeEventListener('mouseenter', scrollToElement);
      }
    };
  }, []);

  return (
    <div id="about" className={styles.container}>
      <div className={styles.bigDes}>
        <span>
          <span className={styles.color}>OT-Groupe</span> to startup, który chce zmienić sposób, w jaki prowadzone są kursy programowania.
        </span>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.smallDes}>
        <span>Nasz kurs został stworzony, aby dostarczać zastrzyk solidnej wiedzy z zakresu programowania w języku JavaScript wszystkim naszym kursantą.</span>
      </div>
    </div>
  );
}

export default AboutOt;
