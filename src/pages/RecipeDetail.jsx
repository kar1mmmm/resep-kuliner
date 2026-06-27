import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import { useAuth } from '../context/AuthContext';
import RecipeDetailComponent from '../components/recipes/RecipeDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { recipes, loading, deleteRecipe, loadRecipes } = useRecipes();
    const { isAuthenticated } = useAuth();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        loadRecipes();
    }, [loadRecipes]);

    useEffect(() => {
        if (recipes.length > 0 && id) {
            const found = recipes.find((r) => r.id === id);
            setRecipe(found || null);
        }
    }, [recipes, id]);

    const handleDelete = (recipeId) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus resep ini?')) {
            deleteRecipe(recipeId);
            navigate('/recipes');
        }
    };

    if (loading) {
        return (
            <div className="container">
                <LoadingSpinner />
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="container text-center py-5">
                <i className="bi bi-exclamation-circle display-1 text-muted"></i>
                <h3 className="mt-3">Resep tidak ditemukan</h3>
                <p className="text-muted">Resep dengan ID tersebut tidak tersedia.</p>
                <button className="btn btn-primary mt-2" onClick={() => navigate('/recipes')}>
                    <i className="bi bi-arrow-left me-1"></i>Kembali ke Daftar Resep
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <RecipeDetailComponent
                recipe={recipe}
                onDelete={isAuthenticated ? handleDelete : null}
            />
        </div>
    );
};

export default RecipeDetail; 
