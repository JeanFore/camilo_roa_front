import React, { ChangeEvent, FormEvent } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Navbar.css';
import Link from 'next/link';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SlSocialGoogle } from "react-icons/sl";


interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleSubmit: (event: FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, setEmail, password, setPassword, showPassword, setShowPassword, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="LoginForm form-section">
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

      <div className="recover-password-link">
        <Link href="/PassRestore">Recuperar contraseña</Link>
      </div>

      <button type="submit" className="btn-login2 centered-button">
        Iniciar sesión
      </button>

      <div className="divider">
        <span>O inicia sesión con</span>
      </div>
      <div className="social-icons">
  <span className="icon"><FiFacebook /></span>
  <span className="icon">< SlSocialGoogle/></span>
  <span className="icon"><FiLinkedin /></span>
  <span className="icon"><FiTwitter /></span>
</div>
    </form>
  );
};

export default LoginForm;
