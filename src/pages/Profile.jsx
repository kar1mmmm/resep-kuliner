import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRecipes } from '../context/RecipeContext';
import RecipeList from '../components/recipes/RecipeList';

const Profile = () => {
    const { user, logout } = useAuth();
    const { recipes } = useRecipes();

    // Filter resep berdasarkan author yang sama dengan user.name (case insensitive)
    const userRecipes = recipes.filter((r) => {
        if (!user || !r.author) return false;
        return r.author.toLowerCase() === user.name?.toLowerCase();
    });

    return (
        <div className="container">
            <div className="row g-4">
                {/* Profile Info */}
                <div className="col-lg-4">
                    <div className="card p-4 shadow-sm">
                        <div className="text-center mb-3">
                            <div
                                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mx-auto"
                                style={{ width: '80px', height: '80px', fontSize: '2rem', color: '#fff' }}
                            >
                                {user?.name?.charAt(0).toUpperCase() || '?'}
                            </div>
                            <h4 className="fw-bold mt-3">{user?.name || 'Pengguna'}</h4>
                            <p className="text-muted">{user?.email}</p>
                        </div>
                        <hr />
                        <div className="d-flex flex-column gap-2">
                            <Link to="/add-recipe" className="btn btn-primary">
                                <i className="bi bi-plus-circle me-2"></i>Tambah Resep
                            </Link>
                            <button className="btn btn-outline-danger" onClick={logout}>
                                <i className="bi bi-box-arrow-right me-2"></i>Keluar
                            </button>
                        </div>
                    </div>
                </div>

                {/* User's Recipes */}
                <div className="col-lg-8">
                    <h4 className="fw-bold mb-3">Resep Saya</h4>
                    {userRecipes.length > 0 ? (
                        <RecipeList recipes={userRecipes} />
                    ) : (
                        <div className="text-center py-4 bg-light rounded-3">
                            <i className="bi bi-journal-text display-4 text-muted"></i>
                            <p className="mt-2 text-muted">Anda belum menambahkan resep apapun.</p>
                            <Link to="/add-recipe" className="btn btn-primary btn-sm">
                                Tambah Resep Sekarang
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;