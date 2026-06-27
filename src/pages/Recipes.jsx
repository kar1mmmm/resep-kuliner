import React, { useState, useEffect } from 'react';
import { useRecipes } from '../context/RecipeContext';
import RecipeList from '../components/recipes/RecipeList';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Recipes = () => {
    const { recipes, loading, searchRecipes, resetRecipes, loadRecipes } = useRecipes();
    const [keyword, setKeyword] = useState('');
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        loadRecipes();
    }, [loadRecipes]);

    const handleSearch = (e) => {
        e.preventDefault();
        setKeyword(searchInput);
        if (searchInput.trim()) {
            searchRecipes(searchInput);
        } else {
            resetRecipes();
        }
    };

    const handleReset = () => {
        setSearchInput('');
        setKeyword('');
        resetRecipes();
    };

    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <h1 className="fw-bold">Daftar Resep</h1>
                <span className="badge bg-secondary-custom text-white px-3 py-2">
                    {recipes.length} resep
                </span>
            </div>

            <form onSubmit={handleSearch} className="row g-2 mb-4">
                <div className="col-md-7 col-lg-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cari resep berdasarkan judul, deskripsi, atau kategori..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                <div className="col-md-3 col-lg-2">
                    <button type="submit" className="btn btn-primary w-100">
                        <i className="bi bi-search me-1"></i>Cari
                    </button>
                </div>
                <div className="col-md-2 col-lg-2">
                    <button type="button" className="btn btn-outline-secondary w-100" onClick={handleReset}>
                        <i className="bi bi-arrow-counterclockwise me-1"></i>Reset
                    </button>
                </div>
            </form>

            {keyword && (
                <p className="text-muted mb-3">
                    Menampilkan hasil untuk: <span className="fw-semibold">"{keyword}"</span>
                    {' '}({recipes.length} ditemukan)
                </p>
            )}

            {loading ? (
                <LoadingSpinner />
            ) : (
                <RecipeList
                    recipes={recipes}
                    emptyMessage={
                        keyword
                            ? `Tidak ada resep yang cocok dengan "${keyword}".`
                            : 'Belum ada resep. Tambahkan resep baru.'
                    }
                />
            )}
        </div>
    );
};

export default Recipes;
