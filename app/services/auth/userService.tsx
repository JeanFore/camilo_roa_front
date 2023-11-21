import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

export const login = async (dto: LoginDTO) => {
  console.log("ejecutando servicio:", dto)
  const response = await axios.post(`${BASE_URL}/auth/signin`, dto, {
    withCredentials: true // Asegúrate de incluir esta línea
  });
  
  return response.data;
};

export const register = async (dto: RegisterDTO) => {
  const response = await axios.post(`${BASE_URL}/auth/signup`, dto);
  return response.data;
};