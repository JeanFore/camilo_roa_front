"use client"
import React, { Component, useState } from "react";
import Link from 'next/link';
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date?: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "1",
        heading: 'Registrate y',
        heading2: 'Logueate en nuestra aplicación!',
        name: "Vas a llenar un formulario indicando cuál es tu objetivo, eso nos sirve para poder determinar la mejor rutina.",
        imgSrc: '/images/aboutus/register.jpg',
    },
    {
        time: "2",
        heading: 'Explicación de nuestros métodos',
        heading2: 'Obtienes toda la asesoria!',
        name: "Al ser personalizado, explicamos toda la metodología, que esperamos lograr, formas de pago y resolvemos tus dudas.",
        imgSrc: '/images/aboutus/methodology.jpg',
    },
    {
        time: "3",
        heading: 'Realiza tu pago contamos',
        heading2: 'con diferentes medios de pago!',
        name: "Aceptamos transferencias, Bold, TC, Nequi , Daviplata, Dale, PSE, para que puedas adquirir nuestros planes.",
        imgSrc: '/images/aboutus/pago.jpg',
    },
    {
        time: "4",
        heading: 'Valoración, tienes que',
        heading2: 'completar todo el formulario!',
        name: "Vas a recibir asistencia mediante guias practicas para que completes el cuestionario de forma correcta.",
        imgSrc: '/images/aboutus/valoracion.jpg',
    },
    {
        time: "5",
        heading: 'Creación historia clinica y plan',
        heading2: 'nutricional personalizado!',
        name: "Se crea la historia clinica del usuario, junto al plan nutricional, generamos notificaciones, para que cumplas tu objetivo.",
        imgSrc: '/images/aboutus/historiaclinica.jpg',
    },
    {
        time: "6",
        heading: 'Actualización del plan nutricional',
        heading2: 'actulizamos la rutina!',
        name: "Dependiendo el plan que adquieras recibiras actualizaciones periodicas de tus rutinas nutricionales personalizadas.",
        imgSrc: '/images/aboutus/actualizacion.jpg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div id="how-works" className='carrouselContainer'>
                <div className="text-center ">
                    <h3 style={{

                        color: '#008FA3',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'  // Agrega sombra al texto
                    }} className="text-4xl sm:text-6xl font-bold text-black my-2">
                        ¿CÓMO FUNCIONA?
                    </h3>
                </div>
                <h4 className='subabouttext'>Un método diferente para estar bien.</h4>
                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} >

                            <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative transform transition hover:scale-105 hover:bg-gray-200'>
                                <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto rounded-lg" />
                                <Link href="/">
                                    <h3 className="absolute bg-blue-clean text-2xl text-white hover:bg-blue-dark hover:shadow-xl py-3 px-6 rounded-full article-img font-bold">{items.time}</h3>
                                </Link>
                                <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                <div>
                                    <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                    <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                                </div>

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        );
    };

}

