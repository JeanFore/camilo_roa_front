"use client"
import React, { useEffect, useState } from 'react';

import CarouselComponent from '../aboutus/carrousel';
import Statistics from '../aboutus/Statictics';

const AboutUsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // Set isMobile here, since useEffect runs on the client side

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      backgroundColor: '#EEE',
      
      backgroundImage: 'url(/bg/bgabout.jpg)',
      backgroundPosition: isMobile ? '50% center' : 'center',
      backgroundSize: 'cover',  // Asegurarse de que la imagen cubra el espacio
      
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        padding: '20px', // Ajusta el padding según necesites
      }}>
        <h2 style={{
          fontFamily: 'Whiskey Girls Semi Italic',
          fontSize: isMobile ? '2.5rem' : '4rem',
          color: '#008FA3',
          textShadow: '2px 2px 4px white'
        }}>
          Sobre Nosotros
        </h2>
      </div>
      
      {/* Content Section */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Cambia a columna en móviles
        alignItems: 'center',
        maxHeight: '700px',
      }}>
        {/* Statistics Section */}
        {/* <div style={{
          flex: 1,
          padding: '5px', // Ajusta el padding según necesites
        }}>
          <Statistics />
        </div> */}

        {/* Carousel Section */}
        <div style={{
          flex: 1,
          padding: '5px', // Ajusta el padding según necesites
        }}>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
