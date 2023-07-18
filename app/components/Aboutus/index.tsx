"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { ChevronRightIcon } from "@heroicons/react/24/solid";


interface DataType {
    heading: string;
    color: string;
    paragraph: string;
    linkText: string; // Aquí para el texto del enlace
    linkURL: string;
    index: number;
}

const AboutData: DataType[] = [
    {
        heading: "Adquiere un plan",
        color: "red",
        paragraph: 'Selecciona el mejor plan que se acomode a tu necesidad.',
        linkText: 'Conoce nuestros planes', // Texto del enlace
        linkURL: '#services-section',
        index: 1
    },
    {
        heading: "Servicios.",
        color: "blue",
        paragraph: 'Están desarrollados para proporcionar la mejor alternativa para tú objetivo.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 2
    },
    {
        heading: "Nuestro trabajo.",
        color: "green",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 3
    },
    {
        heading: "Nuestro trabajo.",
        color: "black",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 4
    },
    {
        heading: "Nuestro trabajo.",
        color: "white",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 5
    },
    {
        heading: "Nuestro trabajo.",
        color: "ligthgrey",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 6
    },
    {
        heading: "Nuestro trabajo.",
        color: "white",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 7
    },
    {
        heading: "Nuestro trabajo.",
        color: "ligthgrey",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 8
    },
    {
        heading: "Nuestro trabajo.",
        color: "white",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 9
    },
    {
        heading: "Nuestro trabajo.",
        color: "ligthgrey",
        paragraph: 'Nos enfocamos en tus metas y creamos la rutina más adecuada, para tu bienestar.',
        linkText: 'Conoce más',
        linkURL: '/manage',
        index: 10
    }
]
const AboutUs = () => {
    const [scroll, setScroll] = useState(0);

    const scrollLeft = () => {
        setScroll(oldScroll => Math.max(oldScroll - 1, 0));
    };
    
    const scrollRight = () => {
        setScroll(oldScroll => Math.min(oldScroll + 1, AboutData.length-1.7));  
    };

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
                            <Link href={item.linkURL} className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.linkText}
                                <ChevronRightIcon className="inline-block" width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
                <button onClick={scrollRight} className='buttonNextPrev'>Next</button>
            </div>
        </div>
    );
};
export default AboutUs;
