import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RecipeProvider } from './context/RecipeContext';

// Layout & Common
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RecipeProvider>
                    <div className="d-flex flex-column min-vh-100">
                        <Navbar />
                        <main className="flex-grow-1 py-4">
                            <Routes>
                                {/* Public routes */}
                                <Route path="/" element={<Home />} />
                                <Route path="/recipes" element={<Recipes />} />
                                <Route path="/recipes/:id" element={<RecipeDetail />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />

                                {/* Protected routes */}
                                <Route element={<ProtectedRoute />}>
                                    <Route path="/add-recipe" element={<AddRecipe />} />
                                    <Route path="/profile" element={<Profile />} />
                                </Route>

                                {/* Fallback */}
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </RecipeProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;