import { useAuth } from '../context/AuthContext';

export const useAuth = () => {
    const auth = useAuth();
    return auth;
};