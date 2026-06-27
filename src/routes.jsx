export const ROUTES = {
    HOME: '/',
    RECIPES: '/recipes',
    RECIPE_DETAIL: '/recipes/:id',
    ADD_RECIPE: '/add-recipe',
    PROFILE: '/profile',
    ABOUT: '/about',
    LOGIN: '/login',
    REGISTER: '/register',
};

export const PUBLIC_ROUTES = ['/', '/recipes', '/recipes/:id', '/about', '/login', '/register'];
export const PROTECTED_ROUTES = ['/add-recipe', '/profile'];