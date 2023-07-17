import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signin from './Signdialog';
import Register from './Registerdialog';


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: '¿Cómo funciona?', href: '#aboutus-section', current: false },
    { name: 'Recetas', href: '#services-section', current: false },
    { name: 'Preguntas Frecuentes', href: '#faq-section', current: false },
    { name: 'Planes', href: '#plans-section', current: false },
    { name: 'Blog', href: '#blog-section', current: false },
    { name: 'Testimonios', href: '#testimonial-section', current: false },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Estado para manejar si se ha hecho scroll

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Cambia este valor según necesites
            setIsScrolled(isScrolled);
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Disclosure as="nav" className="navbar">
            <div className="mx-auto max-w-8xl p-3 md:p-4 lg:px-6 pl-10">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div className="w-1/4 flex justify-start items-center">
                        <Link href="/">
                            <img
                                src="/images/navBar/logo.png"
                                alt="Logo CROA"
                                width={254}  // ajusta esto según tus necesidades
                                height={64} // ajusta esto según tus necesidades
                            />
                        </Link>
                    </div>

                    {/* LINKS */}
                    <div className="w-1/2 flex justify-center items-center space-x-6 md:block hidden">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className={`px-3 py-2 text-lg font-normal whitespace-nowrap ${isScrolled ? 'text-black' : 'text-white'}`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="w-1/1 flex justify-end items-center space-x-4 md:block hidden">
                        <Signin />
                        <Register />
                    </div>

                    {/* DRAWER FOR MOBILE VIEW */}
                    <div className='md:hidden absolute right-0 mr-4'>
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                    </div>

                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata />
                    </Drawer>
                </div>
            </div>
        </Disclosure>
    )

}

export default Navbar;
