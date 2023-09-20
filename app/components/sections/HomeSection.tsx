import React, { useState, useEffect } from 'react';

const HomeSection: React.FC<{ reset: boolean }> = ({ reset }) => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showLine4, setShowLine4] = useState(false);

  useEffect(() => {
    if (reset) {
      setShowLine1(false);
      setShowLine2(false);
      setShowLine3(false);
      setShowLine4(false);

      const timer1 = setTimeout(() => setShowLine1(true), 500);
      const timer2 = setTimeout(() => setShowLine2(true), 1000);
      const timer3 = setTimeout(() => setShowLine3(true), 1500);
      const timer4 = setTimeout(() => setShowLine4(true), 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [reset]);


  return (
    <div className="section home-section">
      <img src="/images/logo.png" alt="Logo" className="logo-home" /> {/* Usamos la etiqueta img directamente */}
      <div className={`line line1 ${showLine1 ? 'show' : ''}`}>Dedicado a crear nuevas</div>
      <div className={`line line1 ${showLine2 ? 'show' : ''}`}>alternativas para tu bienestar.</div>
      <div className={`line line2 ${showLine3 ? 'show' : ''}`}>Con seguimiento y personalización lograremos las metas propuestas.</div>
      <div className={`line line3 ${showLine4 ? 'show' : ''}`}>Camilo Roa, Nutricionista</div>
    </div>
  );
}



export default HomeSection;
