// @ts-ignore
import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import MenuBar from './components/MenuBar';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenuBar, setShowMenuBar] = useState(false);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth <= 768 : true
      );
    const hideMenuTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
      
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const handleLogoMouseEnter = () => {
        setShowMenuBar(true);

        if (hideMenuTimer.current) {  // Si hay un temporizador activo, lo cancelamos.
            clearTimeout(hideMenuTimer.current);
        }
    };

    const handleLogoClick = () => {
        if (hideMenuTimer.current) {
            clearTimeout(hideMenuTimer.current);
        }
    
        setShowMenuBar(prevState => !prevState); // Esto invertirá el valor de showMenuBar cada vez que se haga clic
    };

    const handleMenuMouseEnter = () => {
        if (hideMenuTimer.current) {
            clearTimeout(hideMenuTimer.current);
        }
    };

    const handleMenuMouseLeave = () => {
        hideMenuTimer.current = setTimeout(() => {
            setShowMenuBar(false);
        }, 1000);
    };

    useEffect(() => {
        // Limpia el temporizador en caso de desmontar el componente
        return () => {
            if (hideMenuTimer.current) {
                clearTimeout(hideMenuTimer.current);
            }
        };
    }, []);

    return (
        <div className={`navbar-container ${isScrolled ? 'bg-navbar-blue h-12' : 'bg-navbar-dark h-25'}`}>
            <div className="navbar-content">
                {/* Logo */}
                <img
                    src="/images/logocroa.png"
                    alt="Logo"
                    className="navbar-logo"
                    onMouseEnter={isMobile ? undefined : handleLogoMouseEnter}
                    onClick={isMobile ? handleLogoClick : undefined}
                />

                {/* Iconos de redes sociales (solo en escritorio) */}
                <div className="social-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://www.instagram.com/camiloroanutricionista/?hl=es" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://www.tiktok.com/@camiloroanutricionista" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://www.facebook.com/people/camiloroanutricionista/100080411134292/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=573044713952&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="h-12 w-12 hover:text-gray-500" />
                    </a>
                </div>

                {/* Botones de inicio de sesión (placeholder) */}
                <div className="auth-buttons">
                    {/* Aquí irán tus botones de inicio de sesión cuando los crees */}
                    <button className="hidden lg:inline-block px-4 py-2 bg-gray-600 text-white rounded-lg mr-2">Iniciar sesión</button>
                    <button className="hidden lg:inline-block px-4 py-2 border border-gray-600 text-gray-600 rounded-lg">Registrarse</button>

                    {showMenuBar && (
                        <MenuBar
                            showIcons={showMenuBar}
                            onMouseEnter={handleMenuMouseEnter}
                            onMouseLeave={handleMenuMouseLeave}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
