import React, { useState } from 'react';
import Link from 'next/link';

const MenuBar: React.FC = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showMenu, setShowMenu] = useState(true);

    return (
        <div 
    className="menu-container" 
    onMouseEnter={() => {
        if (window.innerWidth > 768) {
            setDropdownVisible(true);
        }
    }}
    onMouseLeave={() => {
        if (window.innerWidth > 768) {
            setDropdownVisible(false);
        }
    }}
>
    {/* Logo */}
    <Link href="/">
        <img
            src="/images/navBar/logo.png"
            alt="Logo"
            width={254}
            height={64}
        />
    </Link>

            {/* Menú desplegable */}
            {isDropdownVisible && (
                <div className="dropdown-menu">
                    <div className="py-1 flex space-x-4" role="menu" aria-orientation="horizontal">
                        <Link href="#home-section" className="menu-item" role="menuitem">Inicio</Link>
                        <Link href="#aboutus-section" className="menu-item" role="menuitem">¿Cómo funciona?</Link>
                        <Link href="#blog-section" className="menu-item" role="menuitem">Recetas</Link>
                        <Link href="#faq-section" className="menu-item" role="menuitem">Preguntas Frecuentes</Link>
                        <Link href="#services-section" className="menu-item" role="menuitem">Planes</Link>
                        <Link href="#blog-section" className="menu-item" role="menuitem">Blog</Link>
                        <Link href="#testimonial-section" className="menu-item" role="menuitem">Testimonios</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuBar;
