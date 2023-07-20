import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaQuestion, FaBlog, FaRegListAlt, FaRegNewspaper, FaBook, FaStar } from 'react-icons/fa';

const MenuBar: React.FC = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showMenu, setShowMenu] = useState(true);
    const [menuCloseTimeout, setMenuCloseTimeout] = useState<null | ReturnType<typeof setTimeout>>(null);

    const menuItems = [
        { icon: FaHome, href: "#home-section", label: "Inicio" },
        { icon: FaRegListAlt, href: "#aboutus-section", label: "¿Cómo funciona?" },
        { icon: FaBook, href: "#join-section", label: "Recetas" },
        { icon: FaQuestion, href: "#faq-section", label: "Preguntas Frecuentes" },
        { icon: FaRegNewspaper, href: "#services-section", label: "Planes" },
        { icon: FaBlog, href: "#blog-section", label: "Blog" },
        { icon: FaStar, href: "#testimonial-section", label: "Testimonios" },
    ];
    const showDropdown = () => {
        if (window.innerWidth > 768) {
            // Si hay un timeout, lo limpiamos
            if (menuCloseTimeout) {
                clearTimeout(menuCloseTimeout);
                setMenuCloseTimeout(null);
            }
            setDropdownVisible(true);
        }
    }

    const hideDropdown = () => {
        if (window.innerWidth > 768) {
            // Establecemos una demora de 3 segundos antes de esconder el menú
            const timeout = setTimeout(() => {
                setDropdownVisible(false);
            }, 1000);
            setMenuCloseTimeout(timeout);
        }
    }

    return (
        <div
            className="menu-container"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
            
            
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
        <ul className="dropdown-list" role="menu" aria-orientation="vertical">
        {menuItems.map((item, index) => (
    <li key={index} className="dropdown-item menu-item">
        <Link href={item.href}>
            <div className="menu-link-container">
                <item.icon className="menu-icon" />
                <span className="menu-text">
                    {item.label}
                </span>
            </div>
        </Link>
    </li>
))}
        </ul>
    </div>
)}

        </div>
    );
}

export default MenuBar;
