import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, truncateText } from '../../utils/helpers';

const RecipeCard = ({ recipe }) => {
    const { id, title, description, image, category, cookingTime, createdAt } = recipe;

    // State gambar, gunakan image dari props atau fallback ke picsum
    const [imgSrc, setImgSrc] = useState(image || `https://picsum.photos/seed/recipe_${id}/600/400`);

    const handleError = () => {
        // Jika gagal, coba seed fallback
        setImgSrc(`https://picsum.photos/seed/fallback_${id}/600/400`);
    };

    // Jika masih gagal, kita bisa tambahkan onError kedua (tapi cukup satu)

    return (
        <div className="recipe-card card">
            <img
                src={imgSrc}
                className="card-img-top"
                alt={title}
                loading="lazy"
                onError={handleError}
                style={{ height: '200px', objectFit: 'cover', backgroundColor: '#e9ecef' }}
            />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge-category">{category || 'Umum'}</span>
                    <small className="text-muted">
                        <i className="bi bi-clock me-1"></i>
                        {cookingTime} mnt
                    </small>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{truncateText(description, 80)}</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <small className="text-muted">
                        <i className="bi bi-calendar3 me-1"></i>
                        {formatDate(createdAt)}
                    </small>
                    <Link to={`/recipes/${id}`} className="btn btn-outline-secondary btn-sm">
                        Lihat Resep
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;