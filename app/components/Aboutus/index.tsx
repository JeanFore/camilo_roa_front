"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface DataType {
    heading: string;
    color: string;
    paragraph: string;
    linkText: string;
    linkURL?: string;
    linkModal?: () => void;
    index: number;
}

interface AboutUsProps {
    openModal: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ openModal }) => {
    const [scroll, setScroll] = useState(0);

    const scrollLeft = () => {
        setScroll(oldScroll => Math.max(oldScroll - 1, 0));
    };
    
    const scrollRight = () => {
        setScroll(oldScroll => Math.min(oldScroll + 1, AboutData.length-1.7));  
    };

    const AboutData: DataType[] = [
        {
            heading: "Crea una cuenta",
            color: "#FFD1DC",
            paragraph: 'Selecciona el mejor plan que se acomode a tu necesidad.',
            linkText: 'Registrate aquí',
            linkModal: openModal,
            index: 1
        },
        {
            heading: "Adquiere un plan",
            color: "#B0C4DE", // Azul pastel
            paragraph: 'Selecciona el mejor plan que se acomode a tu necesidad.',
            linkText: 'Conoce nuestros planes',
            linkURL: '#services-section',
            index: 2
        },
        {
            heading: "Nuestro trabajo.",
            color: "#90EE90", // Verde pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 3
        },
        {
            heading: "Nuestro trabajo.",
            color: "#FFFFE0", // Amarillo pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 4
        },
        {
            heading: "Nuestro trabajo.",
            color: "#E6E6FA", // Lila pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 5
        },
        {
            heading: "Nuestro trabajo.",
            color: "#FFDAB9", // Melocotón pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 6
        },
        {
            heading: "Nuestro trabajo.",
            color: "#87CEFA", // Celeste pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 7
        },
        {
            heading: "Nuestro trabajo.",
            color: "#F0E68C", // Amarillo claro pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 8
        },
        {
            heading: "Nuestro trabajo.",
            color: "#D8BFD8", // Lavanda pastel
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 9
        },
        {
            heading: "Nuestro trabajo.",
            color: "#FFB6C1", // Rosa pastel claro
            paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
            linkText: 'Conoce más',
            linkURL: '/manage',
            index: 10
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id="aboutus-section" className='carrouselContainer'>
            <h3 className='abouttext'>¿CÓMO FUNCIONA?</h3>
            <h4 className='subabouttext'>Un método diferente para estar bien.</h4>
            <div className='carouselabbout'>
                <button onClick={scrollLeft} className='buttonNextPrev'>Prev</button>
                <div className='aboutcardContainer'
                    style={{ transform: `translateX(-${scroll * (100 / (AboutData.length-3))}%)` }}>
                    {AboutData.map((item, index) => (
                        <div key={index} className='aboutcard'>
                            <h4 className='about-card-heading'>{item.heading}</h4>
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="20" fill={item.color} />
                                <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="2px" dy=".3em">{item.index}</text>
                            </svg>
                            <h4 className='about-card-paragraph'>{item.paragraph}</h4>
                            {item.linkURL && typeof item.linkURL === 'string' ? (
                                <Link href={item.linkURL} className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                    {item.linkText}
                                    <ChevronRightIcon className="inline-block" width={20} height={20} />
                                </Link>
                            ) : (
                                <button onClick={item.linkModal} className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                    {item.linkText}
                                    <ChevronRightIcon className="inline-block" width={20} height={20} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <button onClick={scrollRight} className='buttonNextPrev'>Next</button>
            </div>
        </div>
    );
};

export default AboutUs;

