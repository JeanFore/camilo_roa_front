import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface CustomModalProps {
    isCustomModalOpen: boolean;
    closeCustomModal: () => void;
    onConfirm: () => void;
    title?: string;
    children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isCustomModalOpen, closeCustomModal, onConfirm, title, children }) => {
    const isError = title?.toLowerCase().includes('error');
    console.log('hay error', isError);

    return (
        <Transition show={isCustomModalOpen} as={React.Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeCustomModal}>
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={React.Fragment}
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
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="bg-white rounded-lg w-full max-w-md p-6 mx-auto flex flex-col items-center">
                            <Image
                                src="/images/navBar/logocroa.png"
                                alt="Logo"
                                width={250}
                                height={60}
                                className="mb-4"
                            />
                            {title && <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 text-center">{title}</Dialog.Title>}
                            <div className="mt-2 text-center">
                                {children}
                            </div>
                            
                            <div className="mt-4 flex w-full justify-center">
                                
                                {isError ? (
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={closeCustomModal}
                                    >
                                        Cerrar
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={onConfirm}
                                        >
                                            Confirmar
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={closeCustomModal}
                                        >
                                            Cerrar
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CustomModal;
