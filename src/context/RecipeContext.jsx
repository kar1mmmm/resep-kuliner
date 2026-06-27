import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getRecipes, saveRecipes, searchRecipes as searchService } from '../api/recipeService';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const loadRecipes = useCallback(() => {
        setLoading(true);
        const data = getRecipes();
        setRecipes(data);
        setLoading(false);
    }, []);

    useEffect(() => {
        loadRecipes();
    }, [loadRecipes]);

    const addRecipe = (recipeData) => {
        const newRecipe = {
            ...recipeData,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            author: recipeData.author || 'User',
        };
        const updated = [newRecipe, ...recipes];
        saveRecipes(updated);
        setRecipes(updated);
        return newRecipe;
    };

    const updateRecipe = (id, updatedData) => {
        const index = recipes.findIndex((r) => r.id === id);
        if (index === -1) return null;
        const updated = { ...recipes[index], ...updatedData };
        const updatedList = [...recipes];
        updatedList[index] = updated;
        saveRecipes(updatedList);
        setRecipes(updatedList);
        return updated;
    };

    const deleteRecipe = (id) => {
        const filtered = recipes.filter((r) => r.id !== id);
        saveRecipes(filtered);
        setRecipes(filtered);
        return filtered;
    };

    const searchRecipes = (keyword) => {
        setSearchTerm(keyword || '');
        const results = searchService(keyword);
        setRecipes(results);
        return results;
    };

    const resetRecipes = () => {
        setSearchTerm('');
        loadRecipes();
    };

    const value = {
        recipes,
        loading,
        searchTerm,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        searchRecipes,
        resetRecipes,
        loadRecipes,
    };

    return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export const useRecipes = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipes harus digunakan di dalam RecipeProvider');
    }
    return context;
};
