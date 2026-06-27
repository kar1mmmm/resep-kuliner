import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeList from '../components/recipes/RecipeList';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = () => {
    const { recipes, loading, loadRecipes } = useRecipes();

    useEffect(() => {
        loadRecipes();
    }, [loadRecipes]);

    const featuredRecipes = recipes.slice(0, 4);

    return (
        <div className="container">
            <section className="hero-section">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h1 className="display-4 fw-bold">
                            Resep <span>Kuliner</span> Nusantara
                        </h1>
                        <p className="lead text-muted mb-4">
                            Kumpulan resep masakan tradisional dan modern yang mudah diikuti.
                            Temukan inspirasi untuk menu sehari-hari.
                        </p>
                        <div className="d-flex gap-3 flex-wrap">
                            <Link to="/recipes" className="btn btn-primary px-4 py-2">
                                <i className="bi bi-search me-2"></i>Jelajahi Resep
                            </Link>
                            <Link to="/about" className="btn btn-outline-secondary px-4 py-2">
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <img
                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop"
                            alt="Resep masakan"
                            className="img-fluid rounded-4 shadow"
                            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Resep Terbaru</h2>
                    <Link to="/recipes" className="text-decoration-none">
                        Lihat semua <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                </div>
                {loading ? (
                    <LoadingSpinner />
                ) : featuredRecipes.length > 0 ? (
                    <RecipeList recipes={featuredRecipes} />
                ) : (
                    <div className="text-center py-5">
                        <p className="text-muted">Belum ada resep. Tambahkan resep pertama Anda.</p>
                        <Link to="/add-recipe" className="btn btn-primary">
                            <i className="bi bi-plus-circle me-2"></i>Tambah Resep
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;