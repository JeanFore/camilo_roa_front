import React, { useState, useEffect, CSSProperties } from 'react';

const Statistics: React.FC = () => {
    const [stats, setStats] = useState({ usuarios: 0, dietas: 0, reviews: 0, paises: 0 });
    const [currentStats, setCurrentStats] = useState({ usuarios: 0, dietas: 0, reviews: 0, paises: 0 });
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setStats({
          usuarios: 100,
          dietas: 50,
          reviews: 200,
          paises: 20
        });
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
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
    }, [stats]);

  const circleStyle: CSSProperties = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid black',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)'
  };
  
  return (
    <div style={{ fontFamily: 'Gotham Rounded Book', textAlign: 'center', marginTop: '40px', fontSize: '25px', fontWeight: '600', textShadow: '2px 2px 4px white' }}>
      <h2>Creamos rutinas de dieta personalizadas, según tus necesidades</h2>
      <h2>y objetivos, enfocados en la nutrición deportiva</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={circleStyle}>
          <div>Usuarios</div>
          <div>{currentStats.usuarios}</div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={circleStyle}>
            <div>Dietas</div>
            <div>{currentStats.dietas}</div>
          </div>
          <div style={circleStyle}>
            <div>Reviews</div>
            <div>{currentStats.reviews}</div>
          </div>
        </div>
        <div style={circleStyle}>
          <div>Países</div>
          <div>{currentStats.paises}</div>
        </div>
      </div>
    </div>
  );
  
};

export default Statistics;
