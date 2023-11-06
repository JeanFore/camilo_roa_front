import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signin from './Signdialog';
import Register from './Registerdialog';
import MenuBar from './menubar';





const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isMenuBarActive, setIsMenuBarActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Estado para manejar si se ha hecho scroll
    const [lastScrollTop, setLastScrollTop] = useState(0); // Posición anterior del scroll
    const [showMenu, setShowMenu] = useState(true);

    const handleMenuBarToggle = (isActive: boolean) => {
        setIsMenuBarActive(isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Mostrar menú al desplazarse hacia arriba
            if (currentScrollTop < lastScrollTop) {
                setShowMenu(true);

            }
            // Ocultar menú al desplazarse hacia abajo
            else {
                setShowMenu(false);
            }

            // Actualizar la posición anterior del scroll
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        }

        // Agregar el controlador de evento al montar el componente
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Limpiar el controlador de evento al desmontar el componente
            window.removeEventListener("scroll", handleScroll);
        }
    }, [lastScrollTop]);

    return (
        <Disclosure as="nav" className={`${showMenu ? 'bg-navbar-white' : 'bg-navbar-dark'} navbar ${showMenu ? '' : 'hidden md:block'} p-0 m-0`}>

            <div className=" mx-auto max-w-8xl p-3 md:p-4 lg:px-6 pl-10">
                <div className="flex items-center justify-between">

                    {/* Menu Bar */}
                    <div className="w-1/4 flex justify-start items-center">
                        <MenuBar onToggle={handleMenuBarToggle} />
                    </div>
                    {/* Social Icons */}
                    <div className={`flex space-x-4 ${isMenuBarActive ? 'hidden' : 'block'}`}>
                        <a href="https://www.instagram.com/camiloroanutricionista/?hl=es" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-#008FA3 social-icon">
                            <FaInstagram className="text-#004B70" />
                        </a>
                        <a href="https://www.facebook.com/people/camiloroanutricionista/100080411134292/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-#008FA3 social-icon">
                            <FaFacebookF className="text-#004B70" />
                        </a>
                        <a href="https://www.tiktok.com/@camiloroanutricionista" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-#008FA3 social-icon">
                            <FaTiktok className="text-#004B70" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=573044713952&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl hover:text-#008FA3 social-icon">
                            <FaWhatsapp className="text-#004B70" />
                        </a>
                    </div>

                    {/* BUTTONS */}
                    <div className="hidden md:flex w-1/4 justify-end items-center space-x-4">
                        <Signin />
                        <Register />
                    </div>


                </div>
            </div>
        </Disclosure>
    )
}

export default Navbar;
