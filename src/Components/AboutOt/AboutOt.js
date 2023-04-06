import styles from './AboutOt.module.css';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';


function AboutOt() {
  const [show, setShow] = useState(false);

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-200%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 700,
    config: { duration: 500 }
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
      <animated.div
        className={styles.bigDes}
        style={show ? springProps : undefined}
      >
        <span>
          <span className={styles.color}>OT-Groupe</span> to startup, który chce zmienić sposób, w jaki prowadzone są kursy programowania.
        </span>
      </animated.div>
      <br />
      <br />
      <br />
      <animated.div
        className={styles.smallDes}
        style={show ? springProps : undefined}
      >
        <span>Nasz kurs został stworzony, aby dostarczać zastrzyk solidnej wiedzy z zakresu programowania w języku JavaScript wszystkim naszym kursantą.</span>
      </animated.div>
    </div>
  );
}


export default AboutOt;