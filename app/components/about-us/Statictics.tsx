import React, { useState, useEffect, CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';

const Statistics: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Para activar la animación cada vez
    threshold: 0.1  // Porcentaje del elemento que debe estar visible
  });
  const [stats, setStats] = useState({ usuarios: 0, dietas: 0, reviews: 0, paises: 0 });
  const [currentStats, setCurrentStats] = useState({ usuarios: 0, dietas: 0, reviews: 0, paises: 0 });

  useEffect(() => {
    if (inView) {
      // Lógica de animación aquí...
      const timer = setTimeout(() => {
        setStats({
          usuarios: 100,
          dietas: 50,
          reviews: 200,
          paises: 20
        });
      }, 1000);

      return () => clearTimeout(timer);
    }else {
      // Reinicia el estado cuando el componente sale del viewport
      setCurrentStats({ usuarios: 0, dietas: 0, reviews: 0, paises: 0 });
  }
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats((prevStats) => ({
        usuarios: prevStats.usuarios < stats.usuarios ? prevStats.usuarios + Math.max(1, Math.floor(stats.usuarios / 20)) : prevStats.usuarios,
        dietas: prevStats.dietas < stats.dietas ? prevStats.dietas + Math.max(1, Math.floor(stats.usuarios / 20)) : prevStats.dietas,
        reviews: prevStats.reviews < stats.reviews ? prevStats.reviews + Math.max(1, Math.floor(stats.usuarios / 20)) : prevStats.reviews,
        paises: prevStats.paises < stats.paises ? prevStats.paises + Math.max(1, Math.floor(stats.usuarios / 20)) : prevStats.paises,
      }));

      if (currentStats.usuarios >= stats.usuarios && currentStats.dietas >= stats.dietas && currentStats.reviews >= stats.reviews && currentStats.paises >= stats.paises) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [inView, stats, currentStats.usuarios, currentStats.dietas, currentStats.reviews, currentStats.paises]);

  const circleStyle: CSSProperties = {
    position: 'relative',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px #008FA3',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.8)'
  };

  return (
    <div  ref={ref} style={{ fontFamily: 'Lato', textAlign: 'center', marginTop: '40px', fontSize: '25px' }}>
      <h2 style={{ color: '#3498db', textShadow: '1px 1px 2px black', fontWeight: '800' }}>Creamos rutinas de dieta personalizadas,</h2>
      <h2 style={{ color: '#3498db', textShadow: '1px 1px 2px black', fontWeight: '800' }}>según tus necesidades y objetivos, enfocados en la nutrición deportiva</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={circleStyle}>
          <div style={{ color: '#3498db', fontWeight: '700', textShadow: '1px 1px 2px black' }}>Usuarios</div>
          <div style={{ color: '#008FA3', fontWeight: '600', textShadow: '1px 1px 2px black' }}>{currentStats.usuarios}</div>
        </div>
        <div style={{ display: 'flex', gap: '60px' }}>
          <div style={circleStyle}>
            <div style={{ color: '#3498db', fontWeight: '700', textShadow: '1px 1px 2px black' }}>Dietas</div>
            <div style={{ color: '#008FA3', fontWeight: '600', textShadow: '1px 1px 2px black' }}>{currentStats.dietas}</div>
          </div>
          <div style={circleStyle}>
            <div style={{ color: '#3498db', fontWeight: '700', textShadow: '1px 1px 2px black' }}>Reviews</div>
            <div style={{ color: '#008FA3', fontWeight: '700', textShadow: '1px 1px 2px black' }}>{currentStats.reviews}</div>
          </div>
        </div>
        <div style={circleStyle}>
          <div style={{ color: '#3498db', fontWeight: '700', textShadow: '1px 1px 2px black' }}>Países</div>
          <div style={{ color: '#008FA3', fontWeight: '600', textShadow: '1px 1px 2px black' }}>{currentStats.paises}</div>
        </div>
      </div>
    </div>
  );

};

export default Statistics;
