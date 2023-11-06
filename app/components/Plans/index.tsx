"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Inicial",
        price: 150000,
        user: 'Usuario por trimestre',
        button: "Comience ahora",
        profiles: 'Valoración',
        posts: '1 rutina personalizada',
        templates: "3 controles",
        view: "Acceso a croa app",
        support: 'Soporte online',
        category: 'monthly'
    },
    {
        heading: "Medio",
        price: 185000,
        user: 'Usuario por trimestre',
        button: "Comience ahora",
        profiles: 'Valoración avanzada',
        posts: '1 rutina por objetivos personalizada',
        templates: "6 controles",
        view: "Acceso a croa app + recetas",
        support: 'Soporte online priorizado',
        category: 'monthly'
    },
    {
        heading: "Avanzado",
        price: 350000,
        user: 'Usuario por trimestre',
        button: "Comience ahora",
        profiles: 'Valoración nutricional y deportiva',
        posts: '1 rutina nutricional y de ejercicios',
        templates: "12 controles ",
        view: "Acceso a croa app + recetas y rutinas online",
        support: 'Soporte online priorizado',
        category: 'monthly'
    },
    {
        heading: "Inicial",
        price: 550000,
        user: 'Usuario por año',
        button: "Comience ahora",
        profiles: 'Valoración',
        posts: '4 rutina personalizada',
        templates: "12 controles",
        view: "Acceso a croa app",
        support: 'Soporte online',
        category: 'yearly'
    },
    {
        heading: "Medio",
        price: 700000,
        user: 'Usuario por trimestre',
        button: "Comience ahora",
        profiles: 'Valoración avanzada',
        posts: '4 rutina por objetivos personalizada',
        templates: "24 controles",
        view: "Acceso a croa app + recetas",
        support: 'Soporte online priorizado',
        category: 'yearly'
    },
    {
        heading: "Avanzado",
        price: 1300000,
        user: 'Usuario por trimestre',
        button: "Comience ahora",
        profiles: 'Valoración nutricional y deportiva',
        posts: '4 rutina nutricional y de ejercicios',
        templates: "48 controles ",
        view: "Acceso a croa app + recetas y rutinas online",
        support: 'Soporte online priorizado',
        category: 'yearly'
    },


]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-10 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Tenemos diferentes planes que se ajusten a tu medida <br /> </h3>


                <div className='md:flex md:justify-around mt-10'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Asesoria sin costo</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Planes ajustados a tu medida</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Cancelar en cualquier momento</h4>
                    </div>
                </div>


                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>Obten 3 recetas gratis</div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Planes anuales</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Planes Trimestrales</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>${items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
