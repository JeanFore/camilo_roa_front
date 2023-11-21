"use client"
import Banner from './components/about-us/index';
import Aboutus from './components/how-works/index';
import Dedicated from './components/home-section/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Recipes/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Plans/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

interface ModalProps {
  onClose: () => void; // Definimos que onClose es una función que no toma argumentos y no devuelve nada.
}

const sections = [
  'home-section',
  'about-us',
  'how-works',
  'recipes',
  'services-section',
  'faq-section',
  'join-section'
];

const MyModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1000 }}>
      <div style={{ width: '80%', margin: '15% auto', backgroundColor: 'white', padding: 20 }}>
        <button onClick={onClose}>Cerrar</button>
        <p>Contenido de tu modal...</p>
      </div>
    </div>
  );
};

export default function Home(this: any) {
  const [isModalOpen, setIsModalOpen] = useState(false); // <- Estado para el modal
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => { // <- Función para cerrar el modal
    setIsModalOpen(false);
  }

  const [currentSection, setCurrentSection] = useState('home');
  const [headerHeight, setHeaderHeight] = useState(0);
  
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('.navbar') as HTMLElement;
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    window.addEventListener('scroll', updateHeaderHeight);

    return () => {
      window.removeEventListener('scroll', updateHeaderHeight);
    };
  }, [currentSection]);  // Dependencia actualizada a currentSection

  useEffect(() => {
    const getOffset = () => {
      return currentSection === 'home-section' ? -180 : -100;
  };
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();  // Esto deshabilitará el desplazamiento predeterminado

      let newIndex = currentSectionIndex;
      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Desplazamiento hacia abajo
        newIndex = currentSectionIndex + 1;
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Desplazamiento hacia arriba
        newIndex = currentSectionIndex - 1;
      }
      setCurrentSectionIndex(newIndex);
      setCurrentSection(sections[newIndex]);  // Actualizar la sección actual
      scroller.scrollTo(sections[newIndex], {
        duration: 100,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: getOffset(),
        // offset: currentSection === 'home' && newIndex === 1 ? -headerHeight - additionalHeight : -headerHeight,
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSectionIndex, headerHeight, currentSection]);


  return (
    <main>
      {isModalOpen && <MyModal onClose={closeModal} />} {/* <- Renderiza el modal si isModalOpen es true */}
      <Dedicated />
      <Banner />
      <Aboutus />
      {/* <Digital /> 
      <Beliefs /> */}
      <Wework />
      {/* <Ourteam />
      <Featured /> */}
      <Manage />
      <FAQ />
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      <Joinus />
      <Insta />
    </main>
  );
}