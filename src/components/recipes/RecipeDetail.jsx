import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

const RecipeDetail = ({ recipe, onDelete }) => {
    if (!recipe) return null;

    const { id, title, description, image, ingredients, instructions, category, cookingTime, author, createdAt } = recipe;

    const [imgSrc, setImgSrc] = useState(image || `https://picsum.photos/seed/recipe_${id}/800/500`);

    const handleError = () => {
        setImgSrc(`https://picsum.photos/seed/fallback_${id}/800/500`);
    };

    return (
        <div>
            <div className="recipe-detail-hero">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-6">
                        <img
                            src={imgSrc}
                            alt={title}
                            className="img-fluid"
                            onError={handleError}
                            style={{ backgroundColor: '#e9ecef' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold mb-3">{title}</h1>
                        <p className="lead text-muted">{description}</p>
                        <div className="recipe-detail-meta">
                            <span><i className="bi bi-tag"></i> {category || 'Umum'}</span>
                            <span><i className="bi bi-clock"></i> {cookingTime} menit</span>
                            <span><i className="bi bi-person"></i> {author || 'Admin'}</span>
                            <span><i className="bi bi-calendar3"></i> {formatDate(createdAt)}</span>
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <Link to="/recipes" className="btn btn-outline-secondary">
                                <i className="bi bi-arrow-left me-1"></i>Kembali
                            </Link>
                            {onDelete && (
                                <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
                                    <i className="bi bi-trash me-1"></i>Hapus
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-md-5">
                    <h4 className="fw-bold mb-3"><i className="bi bi-list-ul text-secondary me-2"></i>Bahan-bahan</h4>
                    {ingredients && ingredients.length > 0 ? (
                        <ul className="ingredient-list">
                            {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    ) : <p className="text-muted">Tidak ada bahan yang dicantumkan.</p>}
                </div>
                <div className="col-md-7">
                    <h4 className="fw-bold mb-3"><i className="bi bi-steps text-secondary me-2"></i>Cara Membuat</h4>
                    {instructions && instructions.length > 0 ? (
                        <ol className="step-list">
                            {instructions.map((step, idx) => <li key={idx}>{step}</li>)}
                        </ol>
                    ) : <p className="text-muted">Tidak ada langkah pembuatan yang dicantumkan.</p>}
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;