"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './navBar.module.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaComments, FaHome, FaCog, FaAppleAlt, FaCommentAlt, FaBoxOpen, FaChartLine, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import logcroa from '../navBar/logocroa.png';


const NavBar = () => {
  const topBarLinks = [
    { icon: <FaHome />, name: " Inicio" },
    { icon: <FaCog />, name: " Cómo Funciona" },
    { icon: <FaAppleAlt />, name: " Recetas" },
    { icon: <FaCommentAlt />, name: " Comentarios" },
    { icon: <FaBoxOpen />, name: " Qué Incluye?" },
    { icon: <FaChartLine />, name: " Planes" },
  ];
  const bottomBarLinks = ["Ultimo Post", "Preguntas", "Videos", "Galeria", "PostCast"];

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top + rect.height,
        left: rect.left
      });
    }
  }, [dropdownIsOpen]);

  return (
    <>
      <header>
      <nav className={styles.topbar}>
      <div className={styles.logoContainer}>
    <FaBars className={styles.menuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
    <Image src={logcroa} alt="Logo" className={styles.logo} />
  </div>
          
          <div className={styles.socialIcons}>
            <FaComments className={styles.icon} />
            <a href="tel:+573132556327">+573132556327</a>
            <div className={styles.line} />
            <FaEnvelope className={styles.icon} />
            <a href="mailto:tausertholland@example.com">tausertholland@example.com</a>
            <div className={styles.line} />
            <FaFacebookF className={styles.icon} />
            <div className={styles.line} />
            <FaInstagram className={styles.icon} />
            <div className={styles.line} />
            <FaTwitter className={styles.icon} />
            <div className={styles.line} />
            <FaLinkedinIn className={styles.icon} />
            <div className={styles.line} />
          </div>
        </nav>
        <nav className={`${styles.bottombar} ${mobileMenuOpen ? styles.open : ''}`}>
          
          <div className={styles.menuItem}>
            {topBarLinks.map((link, index) => (
              <a key={index} href={`/${link.name.toLowerCase().replace(/\s+/g, '')}`} className={styles.menuItem}>
                {link.icon}{link.name}
              </a>
            ))}
            <div className={styles.dropdown}>
              <button ref={dropdownButtonRef} onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Post</button>
              {dropdownIsOpen &&
                <div className={styles.dropdownContent} style={{ position: 'fixed', top: dropdownPosition.top, left: dropdownPosition.left }}>
                  <ul className={styles.list}>
                    {bottomBarLinks.map((link, index) => (
                      <li key={index}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
                    ))}
                  </ul>
                </div>
              }
            </div>
          </div>
          <div className={styles.buttons}>
            <button>Inicia Sesión</button>
            <button>Regístrate</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
