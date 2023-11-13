import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import LoginForm from './formLogin';

const Signin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí van las acciones del botón de enviar
  };
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const handleResize = () => {
        const videoHeight = videoRef.current!.videoHeight;
        setVideoHeight(videoHeight);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth(); // Llamada inicial para establecer el ancho

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="btn-login px-3 py-2 rounded-lg text-lg font-semibold"
      >
        {windowWidth <= 768 ? <FaSignInAlt /> : 'Inicia Sesión'}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white2 w-full max-w-2xl p-6 rounded-lg flex">
                <div className="relative w-1/2 h-full">
                  <video
                    className="w-full h-full rounded-l-lg"
                    autoPlay
                    loop
                  >
                    <source src="/images/navBar/login.mp4" type="video/mp4" />
                    <p>Tu navegador no admite el formato de video.</p>
                  </video>
                </div>

                <div className="w-1/2 px-5 py-5 form-section" >
                  <Image
                    src="/images/navBar/logocroa.png"
                    alt="Logo"
                    width={254} // Ancho de la imagen en píxeles
                    height={64} // Altura de la imagen en píxeles
                    className="logoLogin"
                    priority={true}
                  />
                  <h1 className="titulo">Inicia Sesión</h1>

                  <div className="form-section">
                    <LoginForm
                      email={email}
                      setEmail={setEmail}
                      password={password}
                      setPassword={setPassword}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      handleSubmit={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signin;
