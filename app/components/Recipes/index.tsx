"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    go?: string;
}

const postData: DataType[] = [
    {
        profession: 'Batido post-entrenamiento',
        name: 'Tonificación',
        imgSrc: '/images/wework/batido.jpg',
        go: 'ir'
    },
    {
        profession: 'Hamburguesa de salmon',
        name: 'Perdida de peso',
        imgSrc: '/images/wework/hamburguesa.jpg',
        go: 'ir'
    },
    {
        profession: 'Ensalada de naranja',
        name: 'Saludables',
        imgSrc: '/images/wework/ensalada.jpg',
        go: 'ir'
    },
    {
        profession: 'Rollitos de polo relleno',
        name: 'Masa Muscular',
        imgSrc: '/images/wework/rollitos.jpg',
        go: 'ir'
    },
    {
        profession: 'Salmon con ensalada',
        name: 'Post-cirujia',
        imgSrc: '/images/wework/postcirugia.jpg',
        go: 'ir'
    },
    {
        profession: 'Pollo con camote y ensalada',
        name: 'Repación muscular',
        imgSrc: '/images/wework/pollocamote.jpg',
        go: 'ir'
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
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
            <div id='recipes' className="bg-wework py-32">

                <div className="text-center pb-10 ">
                    <h3 style={{

                        color: '#008FA3',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'  // Agrega sombra al texto
                    }} className="text-4xl sm:text-6xl font-bold text-black my-2">
                        Recetas
                    </h3>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-md rounded-3xl'>  
                                <div className='relative'>
                                    <div className="w-64 h-64 m-auto rounded-full overflow-hidden">
                                        <Image src={items.imgSrc} alt="gaby" width={256} height={256} className="object-contain" />
                                    </div>
                                    <h3 className="absolute bg-blue-clean text-2xl text-white hover:bg-blue-dark hover:shadow-xl py-3 px-6 rounded-full article-img font-bold">{items.go}</h3>
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
