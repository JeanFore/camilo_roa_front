import styles from './Home.module.scss';

import { FaHome, FaCog, FaAppleAlt, FaCommentAlt, FaBoxOpen, FaChartLine } from 'react-icons/fa';

const HomeInicio = () => {
  const topBarLinks = [
    { icon: <FaHome />, name: " Inicio" },
    { icon: <FaCog />, name: " Cómo Funciona" },
    { icon: <FaAppleAlt />, name: " Recetas" },
    { icon: <FaCommentAlt />, name: " Comentarios" },
    { icon: <FaBoxOpen />, name: " Qué Incluye?" },
    { icon: <FaChartLine />, name: " Planes" },
  ];

  return (
    <div className={styles.hero}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        <img className={styles.logo} src="/logocroa.png" alt="Logo" />
        <div className={styles.links}>
          {topBarLinks.map((link, index) => (
            <a key={index} href={`/${link.name.toLowerCase().replace(/\s+/g, '')}`}>
              {link.icon}{link.name}
            </a>
          ))}
        </div>
        <div className={styles.buttons}>
          <button>Inicia Sesión</button>
          <button>Regístrate</button>
        </div>
      </div>
    </div>
  );
};

export default HomeInicio;
