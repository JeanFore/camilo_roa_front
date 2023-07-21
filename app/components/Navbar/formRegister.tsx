import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SlSocialGoogle } from "react-icons/sl";
import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/bootstrap.css'


interface RegisterFormProps {
    name: string;
    setName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
    handleSubmit: (event: FormEvent) => void;
    openModal?: () => void;
}



const RegisterForm: React.FC<RegisterFormProps> = ({
    name,
    setName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleSubmit,
    openModal
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputStyle, setInputStyle] = useState({
        paddingLeft: '50px',
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        marginBottom: '0.5rem',
    });
    
    const [nameError, setNameError] = useState('');
const [lastNameError, setLastNameError] = useState('');
const [phoneError, setPhoneError] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('')
const handleFormSubmit = (e: FormEvent) => {
    handleSubmit(e);  // Ejecuta la función original de envío
    //openModal();     // Luego abre el modal
};


    return (
        <form onSubmit={handleFormSubmit} className="LoginForm form-section">
            <div className="form-email-input">
                <input
                    type="name"
                    placeholder="Nombres"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-email-input">
                <input
                    type="lastName"
                    placeholder="Apellidos"
                    value={lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                    required
                />
                {emailError && <p>{emailError}</p>}
            </div>

            <div className="form-email-input">
                <div className="phone-input-container">
                    <PhoneInput
                        country={'co'}
                        value={phone}
                        onChange={(value: string) => setPhone(value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        
                        inputStyle={{
                            height: '45px', // Ajusta el valor de altura según tus necesidades
                            boxShadow: 'none',
                            paddingLeft: '50px'
                            // Agrega otros estilos personalizados aquí para el campo de entrada
                        }}
                    />
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={{ display: 'none' }} // Oculta el campo de entrada nativo
                    />
                </div>
            </div>


            <div className="form-email-input">
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="password-input-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required
                    className="password-input-field"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password-visibility"
                >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            </div>

            <button type="submit" className="btn-login2 centered-button2">
                Registrate
            </button>

            <div className="divider">
                <span>O inicia sesión con</span>
            </div>
            <div className="social-icons">
                <span className="icon"><FiFacebook /></span>
                <span className="icon">< SlSocialGoogle /></span>
                <span className="icon"><FiLinkedin /></span>
                <span className="icon"><FiTwitter /></span>
            </div>
        </form>
    );
};

export default RegisterForm;
