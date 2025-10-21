import axios from 'axios';

// Ajuste para o IP/host do seu servidor local
const API_BASE = process.env.EXPO_PUBLIC_API_BASE || 'http://10.0.2.2:3333/api'; // Android emulator
// iOS simulator: http://localhost:3333/api
// Device físico: use o IP da sua máquina na mesma rede (ex.: http://192.168.0.10:3333/api)

export async function login(email, senha) {
  try {
    const res = await axios.post(`${API_BASE}/login`, { email, senha });
    return res.data;
  } catch (err) {
    const msg = err?.response?.data?.error || 'Erro ao conectar à API';
    throw new Error(msg);
  }
}
