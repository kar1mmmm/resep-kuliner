import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="fw-bold mb-4">Tentang ResepKuliner</h1>
                    <div className="card p-4 shadow-sm">
                        <p className="lead">
                            ResepKuliner adalah platform katalog resep masakan yang dibangun sebagai
                            bagian dari proyek Capstone Frontend Web Programming UKM Neo Telemetri
                            Universitas Andalas 2026.
                        </p>
                        <hr />
                        <h5 className="fw-bold">Tujuan</h5>
                        <p>
                            Menerapkan seluruh keterampilan teknis yang telah dipelajari selama bootcamp,
                            mulai dari perancangan antarmuka, implementasi komponen, manajemen state,
                            integrasi data, autentikasi, hingga deployment.
                        </p>
                        <h5 className="fw-bold mt-3">Teknologi</h5>
                        <ul className="list-unstyled d-flex flex-wrap gap-2">
                            <li className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">React 18</li>
                            <li className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">React Router v6</li>
                            <li className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">Bootstrap 5</li>
                            <li className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">Context API</li>
                            <li className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">localStorage</li>
                        </ul>
                        <h5 className="fw-bold mt-3">Fitur</h5>
                        <ul>
                            <li>Katalog resep dengan pencarian dan filter</li>
                            <li>Detail resep dengan bahan dan langkah pembuatan</li>
                            <li>Autentikasi (login, register, proteksi route)</li>
                            <li>Tambah dan hapus resep</li>
                            <li>Responsif untuk desktop dan mobile</li>
                        </ul>
                        <hr />
                        <p className="text-muted small">
                            &copy; 2026 ResepKuliner. Dibangun untuk keperluan edukasi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 
