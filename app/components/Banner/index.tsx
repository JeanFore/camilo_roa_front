"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Statistics from "./Statictics";
import SliderComponent from "./Banner";


interface MultipleItemsProps {
    className?: string;
}

export default class MultipleItems extends Component<MultipleItemsProps> {
    slider: any;

    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    render() {


        return (
            <div id="about-us" style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/banner/fitness.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '500px'
            }} className={`py-20 marginFeature ${this.props.className}`}>



                <div className='mx-auto max-w-full  lg:px-8'>

                    <div className="text-center pb-10 ">
                        <h3 style={{
                           
                            color: '#008FA3',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'  // Agrega sombra al texto
                        }} className="text-4xl sm:text-6xl font-bold text-black my-2">
                            Queremos guiarte para alcanzar tu objetivo!
                        </h3>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:justify-between">

                        <div className="w-full md:w-2/3">
                            <SliderComponent ref={c => (this.slider = c)} />
                        </div>

                        <div className="w-full md:w-1/4 mt-5 md:mt-0 relative md:relative bottom-20 left-0 transform scale-70">
                            <Statistics />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


