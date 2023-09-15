// @ts-ignore
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {  // Ajusta este valor según tus necesidades.
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);  // Limpieza en caso de desmontar el componente.
    }, []);

    return (
        <div className={`navbar-container ${isScrolled ? 'bg-navbar-blue h-12' : 'bg-navbar-dark h-25'}`}>
        <div className="navbar-content">
            {/* Logo */}
            <img src="/images/logo.png" alt="Logo" className="navbar-logo" />

                {/* Iconos de redes sociales (solo en escritorio) */}
                <div className="social-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="h-12 w-12 hover:text-gray-500" />
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="h-12 w-12 hover:text-gray-500" />
                    </a>
                </div>

                {/* Botones de inicio de sesión (placeholder) */}
                <div className="auth-buttons">
                    {/* Aquí irán tus botones de inicio de sesión cuando los crees */}
                    <button className="hidden lg:inline-block px-4 py-2 bg-gray-600 text-white rounded-lg mr-2">Iniciar sesión</button>
                    <button className="hidden lg:inline-block px-4 py-2 border border-gray-600 text-gray-600 rounded-lg">Registrarse</button>
                </div>
            </div>
        </div>
    );

}

export default Navbar;
