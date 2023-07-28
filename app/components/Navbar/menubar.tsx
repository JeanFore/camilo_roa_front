import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaQuestion, FaBlog, FaRegListAlt, FaRegNewspaper, FaBook, FaStar } from 'react-icons/fa';
import AnimatedSVG from './AnimatedIcon';
import chroma from 'chroma-js';

const MenuBar: React.FC = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const svgRef = useRef<SVGSVGElement>(null);
    const [menuCloseTimeout, setMenuCloseTimeout] = useState<null | ReturnType<typeof setTimeout>>(null);
    const [textColor, setTextColor] = useState("black");
    const [debugCoords, setDebugCoords] = useState<{ x: number, y: number } | null>(null);
    const [textColors, setTextColors] = useState<{ [key: string]: string }>({});
    

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        
        if (isDropdownVisible) {
            intervalId = setInterval(() => {
                menuItems.forEach(item => {
                    // Creamos un evento ficticio con la referencia actual del elemento
                    const el = document.querySelector(`.menu-link-container[data-id="${item.href}"]`);
                    if (el) {
                        const fakeEvent = { currentTarget: el } as React.MouseEvent;
                        detectBgColorForElement(fakeEvent);
                    }
                });
            }, 100); // Repite la revisión cada 1 segundo (puedes ajustar el tiempo como prefieras)
        } else {
            if (intervalId) {
                clearInterval(intervalId);  // Limpia el intervalo cuando el menú desplegable ya no esté visible
            }
        }
        
        return () => {
            if (intervalId) {
                clearInterval(intervalId);  // Limpia el intervalo cuando se desmonta el componente
            }
        };
    }, [isDropdownVisible]);
    

    const getTextColorBasedOnBg = (bgColor: string): string => {
        // Si es transparente o blanco, devolver "black"
        if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "rgb(255, 255, 255)") {
            return "black";
        }
        const brightness = chroma(bgColor).luminance();
        return brightness > 0.91 ? "black" : "white";
    };

    const isTransparent = (color: string) => {
        const rgba = chroma(color).rgba();
        return rgba[3] === 0;
    };

    const detectBgColorForElement = (event: React.MouseEvent) => {
        const target = (event.currentTarget as HTMLElement) || event.target as HTMLElement;
        const itemId = target.getAttribute('data-id');
        const rect = target.getBoundingClientRect();
        const x = rect.left + 100;
        const y = rect.top + rect.height / 2;
    
        console.log(`Coordenadas: x = ${x}, y = ${y}`);
    
        let behindEl = document.elementFromPoint(x, y) as HTMLElement;
        let bgColor = behindEl ? window.getComputedStyle(behindEl).backgroundColor : 'transparent';
    
        const checkedElements: HTMLElement[] = [];
        while (isTransparent(bgColor) && behindEl) {
            checkedElements.push(behindEl);
            behindEl.style.pointerEvents = 'none';
            behindEl = document.elementFromPoint(x, y) as HTMLElement;
            bgColor = behindEl ? window.getComputedStyle(behindEl).backgroundColor : 'transparent';
        }
    
        if (behindEl) {
            // Log para la clase del elemento
            console.log('Clase del elemento detrás:', behindEl.className, 'Elemento', bgColor);
        
            // Log para la luminancia del color de fondo
            const brightness = chroma(bgColor).luminance();
            console.log('Brillo (luminancia) del color de fondo:', brightness);
        
            setTextColors(prevColors => ({
                ...prevColors,
                [itemId!]: getTextColorBasedOnBg(bgColor)  // usamos itemId! para decirle a TypeScript que itemId siempre estará definido aquí.
            }));
        } else {
            console.log('No se encontró ningún elemento detrás.');
        }
    
        // Restaurar pointerEvents a "auto" para todos los elementos que se revisaron
        checkedElements.forEach(el => el.style.pointerEvents = 'auto');
    };
    


    const menuItems = [
        { icon: FaHome, href: "#home-section", label: "Inicio" },
        { icon: FaRegListAlt, href: "#aboutus-section", label: "¿Cómo funciona?" },
        { icon: FaBook, href: "#join-section", label: "Recetas" },
        { icon: FaQuestion, href: "#faq-section", label: "Preguntas Frecuentes" },
        { icon: FaRegNewspaper, href: "#services-section", label: "Planes" },
        { icon: FaBlog, href: "#blog-section", label: "Blog" },
        { icon: FaStar, href: "#testimonial-section", label: "Testimonios" },
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
        document.body.style.backgroundColor = "#ffffff";
        document.documentElement.style.backgroundColor = "#ffffff";
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
        document.body.style.backgroundColor = "none";
        document.documentElement.style.backgroundColor = "none";
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
            {/* Cuadro de Depuración */}
            {debugCoords && (
                <div
                    style={{
                        position: 'absolute',
                        top: debugCoords.y + 'px',
                        left: `calc(${debugCoords.x}px - 100%)`,  // Mueve el cuadro completamente fuera del contenedor hacia la izquierda.
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'red',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999
                    }}
                ></div>
            )}

            {/* Logo */}
            <Link href="/" onMouseEnter={() => startAnimation(svgRef)}>
                <img

                    src="/images/navBar/logo.png"
                    alt="Logo"
                    width={254}
                    height={64}
                />
            </Link>

            {/* Animated Icon */}
            <AnimatedSVG ref={svgRef} onStartAnimation={startAnimation} onReverseAnimation={reverseAnimation} isDropdownVisible={isDropdownVisible}  setDropdownVisible={setDropdownVisible} />

            {/* Menú desplegable */}
            {/* Menú desplegable */}
            {isDropdownVisible && (
                <div className="dropdown-menu" onMouseLeave={() => reverseAnimation(svgRef)}>
                    <ul className="dropdown-list" role="menu" aria-orientation="vertical">
                        {menuItems.map((item, index) => (
                            <li key={index} className="dropdown-item menu-item">
                                <Link href={item.href}>
                                    <div className="menu-link-container"
                                        data-id={item.href}  // Establecer un atributo data para el identificador único
                                        onMouseEnter={detectBgColorForElement}>
                                        <item.icon className="menu-icon" style={{ color: textColors[item.href] || 'black' }} />
                                        <span className="menu-text" style={{ color: textColors[item.href] || 'black' }}>
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
