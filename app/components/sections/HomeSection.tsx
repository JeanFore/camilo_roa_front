import React, { useEffect, useRef, useState } from 'react';
import './styles/homeStyles.scss'; // Importa tu archivo CSS
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

const HomeSection = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Nuevo estado para rastrear si el componente se ha montado
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // Set isMobile here, since useEffect runs on the client side

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Este timeout determina cuánto tiempo esperar antes de empezar la animación

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsMounted(true); // Establecer isMounted a true cuando el componente se monta

    const logoElement = logoRef.current;
    const videoElement = videoRef.current;

    if (!logoElement || !videoElement) return;

    const logoHandleMouseEnter = () => {
      logoElement.style.animationPlayState = 'running';
    };

    const logoHandleMouseLeave = () => {
      const computedStyle = getComputedStyle(logoElement);
      const animationDuration = parseFloat(computedStyle.animationDuration) * 1000;
      setTimeout(() => {
        if (logoElement) {
          logoElement.style.animationPlayState = 'paused';
        }
      }, animationDuration);
    };

    const videoHandleMouseEnter = () => {
      videoElement.play().then(() => {
        setIsVideoPlaying(true);
      }).catch((error) => {
        console.error("Video play failed:", error);
      });
    };

    const videoHandleMouseLeave = () => {
      setTimeout(() => {
        if (videoElement) {
          videoElement.pause();
          setIsVideoPlaying(false);
        }
      }, 2000); // Pausa el video 2 segundos después de que el mouse sale
    };

    logoElement.addEventListener('mouseenter', logoHandleMouseEnter);
    logoElement.addEventListener('mouseleave', logoHandleMouseLeave);
    videoElement.addEventListener('mouseenter', videoHandleMouseEnter);
    videoElement.addEventListener('mouseleave', videoHandleMouseLeave);

    return () => {
      logoElement.removeEventListener('mouseenter', logoHandleMouseEnter);
      logoElement.removeEventListener('mouseleave', logoHandleMouseLeave);
      videoElement.removeEventListener('mouseenter', videoHandleMouseEnter);
      videoElement.removeEventListener('mouseleave', videoHandleMouseLeave);
    };
  }, []);
  return (
    <div style={{ 
      position: 'relative', 
      display: 'flex', 
      height: '100vh', 
      flexDirection: isMobile ? 'column' : 'row'
    }}>
      <div style={{
        position: 'absolute',
        top: 120,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'url(/bg/bghomefood.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: isMobile ? '80% center' : 'center',
        // filter: 'grayscale(100%)',
        transform: 'scaleX(-1)',
        zIndex: -1,
        display: isMobile ? 'flex' : 'flex',
        
        order: isMobile ? 2 : 0,
      }}></div>
      <div style={{
        
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 3s ease-in-out',
        order: isMobile ? 1 : 0,
      }}>
        <Image
          src="/images/logocroa.png"
          alt="Logo"
          className="logo"
          width={500} // Ajusta según las dimensiones de tu imagen
          height={125} // Ajusta según las dimensiones de tu imagen
          ref={logoRef}
          
        />
        <div style={{ marginTop: isMobile ? '18rem' : '0' }}> {/* Ajuste de margen superior para móviles */}
          <p className="line1" style={{ textAlign: 'center' }}>Dedicado a crear nuevas</p>
          <p className="line1" style={{ textAlign: 'center' }}>alternativas para tu bienestar.</p>
          <p className="line2" style={{ textAlign: 'center' }}>Con seguimiento y personalizacion lograremos las metas propuestas.</p>
          <p className="line3" style={{ textAlign: 'center' }}>CAMILO ROA, Nutricionista</p>
        </div>
      </div>
      <div style={{ 
        position: 'relative', 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        order: isMobile ? 1 : 0, // Asegurarse de que este div se muestra abajo en móviles
      }}>
        <video
          ref={videoRef}
          src="/food1080home.mp4"
          style={{
            width: isVideoPlaying ? '85%' : '65%',
            height: 'auto',
            borderRadius: 30,
            boxShadow: '0px 4px 6px #00000050',
            transform: isVideoPlaying || !isMounted ? 'perspective(800px) rotateX(0deg)' : 'perspective(800px) rotateX(15deg)',
            transition: 'width 3s, transform 3s' // Añadida la transición para transform
          }}
          preload="auto"
          muted
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <FaPlay size={50} style={{ opacity: isVideoPlaying ? 0 : 1 }} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
