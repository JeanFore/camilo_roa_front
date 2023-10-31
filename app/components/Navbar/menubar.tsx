import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaQuestion, FaBlog, FaRegListAlt, FaRegNewspaper, FaBook, FaStar, FaHeartbeat, FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';
import AnimatedSVG from './AnimatedIcon';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const MenuBar: React.FC = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const svgRef = useRef<SVGSVGElement>(null);
    const [menuCloseTimeout, setMenuCloseTimeout] = useState<null | ReturnType<typeof setTimeout>>(null);

    const menuItems = [
        { icon: FaHome, href: "#home-section", label: "Inicio", },
        { icon: FaRegListAlt, href: "#about-us", label: "Nosotros", },
        { icon: FaHeartbeat, href: "#how-works", label: "¿Cómo funciona?",  },
        { icon: FaBook, href: "#recipes", label: "Recetas", },
        { icon: FaMoneyCheck, href: "#services-section", label: "Planes", },
        { icon: FaQuestion, href: "#faq-section", label: "Preguntas Frecuentes"},

        { icon: FaRegNewspaper, href: "#join-section", label: "Suscribete"},
        // { icon: FaStar, href: "#testimonial-section", label: "Testimonios" },
    ];

    const startAnimation = (ref: React.RefObject<SVGSVGElement>) => {
        if (ref.current) {
            const animation = ref.current.querySelector<SVGElement>('[id="start"]');
            if (animation && 'beginElement' in animation) {
                (animation.beginElement as () => void)();
            }
        }
    }

    const reverseAnimation = (ref: React.RefObject<SVGSVGElement>) => {
        if (ref.current) {
            const animation = ref.current.querySelector<SVGElement>('[id="reverse"]');

            if (animation && 'beginElement' in animation) {
                (animation.beginElement as () => void)();
            }
        }
    }
    const showDropdown = () => {
        if (window.innerWidth > 768) {
            // Si hay un timeout, lo limpiamos
            if (menuCloseTimeout) {
                clearTimeout(menuCloseTimeout);
                setMenuCloseTimeout(null);
            }
            setDropdownVisible(true);
            startAnimation(svgRef); // Iniciamos la animación al mostrar el menú
        }
    }

    const hideDropdown = () => {
        if (window.innerWidth > 768) {
            // Establecemos una demora de 1 segundo antes de esconder el menú
            const timeout = setTimeout(() => {
                setDropdownVisible(false);
            }, 1000);
            setMenuCloseTimeout(timeout);
            reverseAnimation(svgRef); // Revertimos la animación al esconder el menú
        }
    }

    

    useEffect(() => {
        const handleScroll = () => {
            let found = false;
            for (let i = 0; i < menuItems.length && !found; i++) {
                const item = menuItems[i];
                const element = document.querySelector(item.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 0 && rect.bottom >= 0) {
                        setCurrentSection(item.href);
                        found = true;  // Para salir del bucle una vez que encontramos la sección actual
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuItems]);

    const getOffset = () => {
        console.log(currentSection);  // Esto imprimirá la sección actual
        return currentSection === "#home-section" ? -180 : -100;
    };

    return (
        <div
            className="menu-container"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
        >
            {/* Logo */}
            <Link href="/" onMouseEnter={() => startAnimation(svgRef)}>
                <Image
                    src="/images/navBar/logocroa.png"
                    alt="Logo"
                    width={254}
                    height={64}
                    priority={true}

                />
            </Link>

            {/* Animated Icon */}
            <AnimatedSVG ref={svgRef} onStartAnimation={startAnimation} onReverseAnimation={reverseAnimation} isDropdownVisible={isDropdownVisible} setDropdownVisible={setDropdownVisible} />

            {/* Menú desplegable */}
            {isDropdownVisible && (
                <div className="dropdown-menu" onMouseLeave={() => reverseAnimation(svgRef)}>
                    <ul className="dropdown-list" role="menu" aria-orientation="vertical">
                        {menuItems.map((item, index) => (
                            <li key={index} className="dropdown-item menu-item">
                                <ScrollLink
                                    to={item.href.replace("#", "")}
                                    smooth={true}
                                    offset={getOffset()}  // Ajusta este valor según sea necesario
                                    duration={100}  // Duración de la animación
                                >
                                    <div className="menu-link-container">
                                        <div className="icon-container">
                                            <item.icon className="menu-icon" style={{ color: '#008FA3' }} />
                                        </div>
                                        <div className="text-container">
                                            <span className="menu-text" style={{ color: '#004B70' }}>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MenuBar;