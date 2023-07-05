// LanguageSwitcher.js
import React, { useState } from 'react';
import { IoLanguageOutline } from "react-icons/io5"; // Un ícono de idioma
import styles from './LanguageSwitcher.module.scss';


const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('ES');

  const changeLanguage = () => {
    setLanguage(language === 'ES' ? 'EN' : 'ES');
  };

  return (
    <div className={styles.languageSwitch}>
      <IoLanguageOutline className={styles.icon} onClick={changeLanguage} />
      <span>{language}</span>
    </div>
  );
}

export default LanguageSwitcher;
