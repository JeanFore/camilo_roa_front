import React, { useEffect, useRef, useState } from 'react';
import './styles/homeStyles.scss'; // Importa tu archivo CSS
import { FaPlay } from 'react-icons/fa';

const HomeSection = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
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
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'url(/bg/bghome.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%)',
        zIndex: -1
      }}></div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className="logo"
          ref={logoRef}
          style={{ width: 'auto', height: '25%' }}
        />
        <p className="line1">Dedicado a crear nuevas alternativas para tu bienestar.</p>
        <p className="line2">Con seguimiento y personalizacion lograremos las metas propuestas.</p>
        <p className="line3">CAMILO ROA, Nutricionista</p>

      </div>
      <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video
          ref={videoRef}
          src="/food1080home.mp4"
          style={{
            width: isVideoPlaying ? '85%' : '65%',
            height: 'auto',
            transition: 'width 0.5s' // Ajusta la duración según lo que prefieras
          }}
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
