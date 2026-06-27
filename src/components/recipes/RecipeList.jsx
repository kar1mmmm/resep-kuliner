import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, emptyMessage = 'Tidak ada resep ditemukan.' }) => {
    if (!recipes || recipes.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-inbox display-1 text-muted"></i>
                <p className="mt-3 text-muted">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="row g-4">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="col-sm-6 col-lg-4">
                    <RecipeCard recipe={recipe} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList; 
