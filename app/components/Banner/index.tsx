"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Con Dietas Balanceadas.',
        imgSrc: '/images/banner/intro.png',
    },
    {
        heading: 'Nutritivas y deliciosas.',
        imgSrc: '/images/banner/intro2.png',
    },
    {
        heading: 'Buena fuente de proteina para aumentar tu masa muscular.',
        imgSrc: '/images/banner/intro3.png',
    }
]

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
    slider: any;

    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) => (
                <div
                    style={{
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        position: "absolute",
                        bottom: "25px",     // Mueve los puntos hacia la parte inferior de la imagen
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",     // Alinea los puntos al centro
                        padding: "10px",
                        color: "black"
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,          // Activa el desplazamiento automático
        autoplaySpeed: 3000,     // Configura el desplazamiento cada 3 segundos
            speed: 500,
            fade: true,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="bg-bgblue py-20 marginFeature bg-featured">
                <div className='mx-auto max-w-full sm:py-4 lg:px-8 '>

                <div className="text-center pt-48 pb-10 md:pt-96 desktop-title">
    <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Queremos guiarte para alcanzar tu objetivo.</h3>
</div>

<div style={{ marginTop: '-50px' }}>
  <Slider ref={c => (this.slider = c)} {...settings}>
    {postData.map((items, i) => (
      <div key={i}>
                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <div style={{ width: "100%", position: "relative", height: "620px", overflow: "hidden", borderRadius: "20px" }}>
                                        <Image
                                            src={items.imgSrc}
                                            alt="gaby"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-2xl"
                                        />
                                        <SampleNextArrow onClick={this.next} style={undefined} />
                                        <SamplePrevArrow onClick={this.previous} style={undefined} />
                                        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
                                        <h4 className='sm:text-5xl text-3xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white' style={{
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Agrega sombra al texto
}}>{items.heading}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                </div>
            </div>
        );
    }
}

const ArrowSVG = ({ left = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={left ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
);

function SampleNextArrow(props: { style: any; onClick: any; }) {
    const { style, onClick } = props;
    return (
        <div
        className="arrow absolute right-0 mr-6 top-1/2 transform -translate-y-1/2 z-50"
    onClick={onClick}
        >
            <ArrowSVG/>
        </div>
    );
}

function SamplePrevArrow(props: { style: any; onClick: any; }) {
    const { style, onClick } = props;
    return (
        <div
        className="arrow absolute left-0 ml-6 top-1/2 transform -translate-y-1/2 z-50"
    onClick={onClick}
        >
            <ArrowSVG/>
        </div>
    );
}
