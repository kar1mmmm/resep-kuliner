import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-book"></i> ResepKuliner
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Beranda
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recipes">
                                Resep
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                Tentang
                            </NavLink>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add-recipe">
                                    <i className="bi bi-plus-circle me-1"></i>Tambah Resep
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">
                                        <i className="bi bi-person-circle me-1"></i>
                                        {user?.name || 'Profil'}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="btn btn-outline-light btn-sm ms-2"
                                        onClick={handleLogout}
                                        style={{ borderRadius: '8px', padding: '0.4rem 1rem' }}
                                    >
                                        <i className="bi bi-box-arrow-right me-1"></i>Keluar
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Masuk
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">
                                        Daftar
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
