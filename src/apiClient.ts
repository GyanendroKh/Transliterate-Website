import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || import.meta.env.BASE_URL
});

export const queryClient = new QueryClient();
