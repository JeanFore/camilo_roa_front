"use client"
import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import { useState } from 'react';


interface ModalProps {
  onClose: () => void; // Definimos que onClose es una función que no toma argumentos y no devuelve nada.
}

const MyModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1000}}>
      <div style={{width: '80%', margin: '15% auto', backgroundColor: 'white', padding: 20}}>
        <button onClick={onClose}>Cerrar</button>
        <p>Contenido de tu modal...</p>
      </div>
    </div>
  );
};

export default function Home(this: any) {
  const [isModalOpen, setIsModalOpen] = useState(false); // <- Estado para el modal

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => { // <- Función para cerrar el modal
    setIsModalOpen(false);
  }

  return (
    <main>
      {isModalOpen && <MyModal onClose={closeModal} />} {/* <- Renderiza el modal si isModalOpen es true */}
      <Dedicated />
      <Banner />
      <Aboutus/>   
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