import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import RegisterForm from './formRegister';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { register } from '@/app/services/auth/userService';
import CustomModal from '../modal/customModal';

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isCustomModalOpen, setCustomIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const closeModal = () => {
    setIsOpen(false);

  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const registerDto: RegisterDTO = {
      name,
      lastName,
      phone,
      email,
      hash: password, // Asumiendo que 'password' es el estado para la contraseña
      userType: 2, // Aquí estableces userType como 2
    };

    try {
      const response = await register(registerDto);
      console.log('Registro exitoso:', response);
      setModalMessage('Usuario creado con éxito');
      setModalTitle("Éxito");
      setIsOpen(false); // Cierra el formulario de registro
      setCustomIsModalOpen(true); // Abre el CustomModal

    } catch (error) {
      console.error('Error en el registro:', error);
      setModalMessage('Error en el registro, el usuario ya esta registrado con número o Teléfono.');
      setModalTitle("Error en Registro");
      setIsOpen(false); // Cierra el formulario de registro
      setCustomIsModalOpen(true);

    }
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
        {windowWidth <= 768 ? <FaUserPlus /> : 'Registrate'}
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
                    <source src="/images/navBar/register.mp4" type="video/mp4" />
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
                  <h1 className="titulo2">Registrate</h1>

                  <div className="form-section">
                    <RegisterForm
                      name={name}
                      setName={setName}
                      lastName={lastName}
                      setLastName={setLastName}
                      phone={phone}
                      setPhone={setPhone}
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

      {/* CustomModal para mensajes */}
      <CustomModal
        isCustomModalOpen={isCustomModalOpen}
        closeCustomModal={() => setCustomIsModalOpen(false)}
        onConfirm={() => setCustomIsModalOpen(false)}
        title="Mensaje del Sistema"
      >
        <p>{modalMessage}</p>
      </CustomModal>
    </>
  );
};

export default Register;
