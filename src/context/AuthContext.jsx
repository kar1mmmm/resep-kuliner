import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();
const AUTH_STORAGE_KEY = 'auth_user';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem(AUTH_STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setUser(parsed);
            } catch {
                localStorage.removeItem(AUTH_STORAGE_KEY);
            }
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        if (!email || !password) {
            throw new Error('Email dan password wajib diisi.');
        }
        if (email === 'demo@user.com' && password === 'password') {
            const userData = {
                id: 'user_001',
                name: 'Pengguna Demo',
                email: 'demo@user.com',
                role: 'user',
            };
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
            setUser(userData);
            return userData;
        }
        if (password.length < 6) {
            throw new Error('Password minimal 6 karakter.');
        }
        const userData = {
            id: 'user_' + Date.now(),
            name: email.split('@')[0] || 'Pengguna',
            email: email,
            role: 'user',
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
        setUser(userData);
        return userData;
    };

    const register = (name, email, password) => {
        if (!name || !email || !password) {
            throw new Error('Semua field wajib diisi.');
        }
        if (password.length < 6) {
            throw new Error('Password minimal 6 karakter.');
        }
        const userData = {
            id: 'user_' + Date.now(),
            name: name,
            email: email,
            role: 'user',
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
        setUser(userData);
        return userData;
    };

    const logout = () => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth harus digunakan di dalam AuthProvider');
    }
    return context;
};