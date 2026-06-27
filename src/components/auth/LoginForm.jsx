import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Gagal login. Periksa kembali email dan password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-card">
            <h3 className="text-center fw-bold mb-3">Masuk</h3>
            <p className="text-muted text-center mb-4">Masuk untuk mengelola resep favorit Anda.</p>
            {error && (
                <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="demo@user.com"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Minimal 6 karakter"
                        required
                        minLength="6"
                    />
                    <small className="text-muted">Akun demo: demo@user.com / password</small>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" />
                            Memproses...
                        </>
                    ) : (
                        'Masuk'
                    )}
                </button>
            </form>
            <p className="text-center mt-3">
                Belum punya akun? <Link to="/register" className="text-decoration-none fw-semibold">Daftar di sini</Link>
            </p>
        </div>
    );
};

export default LoginForm;
