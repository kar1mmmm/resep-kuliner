import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRecipes } from '../context/RecipeContext';
import RecipeForm from '../components/recipes/RecipeForm';

const AddRecipe = () => {
    const { user } = useAuth();
    const { addRecipe } = useRecipes();
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        const newRecipe = {
            ...data,
            author: data.author || user?.name || 'User',
        };
        addRecipe(newRecipe);
        navigate('/recipes');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="fw-bold mb-4">
                        <i className="bi bi-plus-circle me-2 text-secondary"></i>Tambah Resep Baru
                    </h1>
                    <p className="text-muted mb-4">
                        Isi formulir di bawah untuk menambahkan resep baru ke katalog.
                    </p>
                    <div className="card p-4 shadow-sm">
                        <RecipeForm onSubmit={handleSubmit} submitLabel="Tambah Resep" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe; 
