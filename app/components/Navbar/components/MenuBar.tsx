import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaHome, FaRegListAlt, FaBook, FaQuestion, FaRegNewspaper, FaBlog, FaStar } from 'react-icons/fa';

const MenuBar: React.FC<{
    showIcons: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}> = ({ showIcons, onMouseEnter, onMouseLeave }) => {
    return (
        <div className="menu-container md:bg-transparent bg-white" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {/* ... */}
            {showIcons && (
                <div className="dropdown-menu">
                    <ul className="dropdown-list" role="menu" aria-orientation="vertical">
                        {menuItems.map((item, index) => (
                            <li key={index} className="dropdown-item">
                                <Link href={item.href}>
                                    <div className="menu-link-container">
                                        {item.icon && <item.icon className="menu-icon" />} {/* Agrega la clase menu-icon aquí */}
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

const menuItems = [
    { icon: FaHome, href: "#home-section", label: "Inicio" },
    { icon: FaRegListAlt, href: "#aboutus-section", label: "¿Cómo funciona?" },
    { icon: FaBook, href: "#join-section", label: "Recetas" },
    { icon: FaQuestion, href: "#faq-section", label: "Preguntas Frecuentes" },
    { icon: FaRegNewspaper, href: "#services-section", label: "Planes" },
    { icon: FaBlog, href: "#blog-section", label: "Blog" },
    { icon: FaStar, href: "#testimonial-section", label: "Testimonios" },
];

export default MenuBar;
