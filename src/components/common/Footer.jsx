import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-custom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <span>
                            &copy; {currentYear} ResepKuliner. Neo Telemetri 2026.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link to="/about" className="text-white-50 me-3">
                            Tentang
                        </Link>
                        <Link to="/recipes" className="text-white-50">
                            Resep
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
