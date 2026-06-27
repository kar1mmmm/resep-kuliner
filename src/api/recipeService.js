const STORAGE_KEY = 'recipes_data';

// Path gambar lokal (simpan di folder public/images/)
// Contoh: public/images/nasi-goreng.jpg
const IMAGE_BASE = '/images/';

const DEFAULT_RECIPES = [{
    id: '1',
    title: 'Nasi Goreng Sederhana',
    description: 'Nasi goreng klasik dengan bumbu dasar yang praktis dan lezat.',
    ingredients: ['3 porsi nasi putih', '2 butir telur', '3 siung bawang putih', '5 siung bawang merah',
        '2 sdm kecap manis', '1 sdm saus tiram', 'Garam dan merica secukupnya', 'Minyak goreng'
    ],
    instructions: [
        'Haluskan bawang putih dan bawang merah.',
        'Panaskan minyak, tumis bumbu halus hingga harum.',
        'Masukkan telur, orak-arik hingga matang.',
        'Tambahkan nasi, aduk rata.',
        'Bumbui dengan kecap manis, saus tiram, garam, dan merica.',
        'Masak hingga bumbu meresap, sajikan hangat.'
    ],
    image: `${IMAGE_BASE}nasi-goreng.jpg`, // Ganti dengan nama file gambar lokal
    category: 'Main Course',
    cookingTime: 20,
    author: 'Admin',
    createdAt: new Date().toISOString()
}, {
    id: '2',
    title: 'Ayam Goreng Kremes',
    description: 'Ayam goreng dengan kremesan renyah yang menggugah selera.',
    ingredients: ['1 ekor ayam potong 8', '5 siung bawang putih', '3 butir kemiri', '2 cm kunyit',
        '2 cm jahe', '1 sdm ketumbar', 'Garam dan kaldu bubuk', 'Minyak untuk menggoreng'
    ],
    instructions: [
        'Haluskan bawang putih, kemiri, kunyit, jahe, dan ketumbar.',
        'Lumuri ayam dengan bumbu halus, tambahkan garam dan kaldu bubuk.',
        'Diamkan minimal 30 menit agar bumbu meresap.',
        'Goreng ayam dalam minyak panas hingga matang dan kecokelatan.',
        'Sajikan dengan sambal dan lalapan.'
    ],
    image: `${IMAGE_BASE}ayam-goreng.jpg`,
    category: 'Main Course',
    cookingTime: 45,
    author: 'Admin',
    createdAt: new Date().toISOString()
}, {
    id: '3',
    title: 'Sop Sayuran Segar',
    description: 'Sup sayuran hangat dengan kuah bening yang kaya nutrisi.',
    ingredients: ['2 buah wortel', '1 buah kentang', '100 gr buncis', '100 gr kembang kol', '2 batang daun bawang',
        '2 siung bawang putih', '1,5 liter kaldu ayam', 'Garam dan lada', 'Seledri secukupnya'
    ],
    instructions: [
        'Potong-potong semua sayuran sesuai selera.',
        'Tumis bawang putih hingga harum, tambahkan kaldu.',
        'Masukkan wortel dan kentang, masak hingga setengah matang.',
        'Tambahkan buncis dan kembang kol, masak hingga semua sayuran matang.',
        'Bumbui dengan garam dan lada, taburi daun bawang dan seledri.'
    ],
    image: `${IMAGE_BASE}sop-sayuran.jpg`,
    category: 'Soup',
    cookingTime: 30,
    author: 'Admin',
    createdAt: new Date().toISOString()
}, {
    id: '4',
    title: 'Pancake Pisang',
    description: 'Pancake lembut dengan potongan pisang, cocok untuk sarapan.',
    ingredients: ['200 gr tepung terigu', '2 buah pisang matang', '2 butir telur', '300 ml susu cair',
        '2 sdm gula', '1 sdt baking powder', 'Sejumput garam', 'Mentega untuk menggoreng'
    ],
    instructions: [
        'Haluskan pisang dengan garpu.',
        'Campur tepung, baking powder, dan garam dalam wadah.',
        'Di wadah lain, kocok telur dan susu, tambahkan pisang halus.',
        'Masukkan campuran tepung, aduk hingga rata.',
        'Panaskan mentega di wajan, tuang adonan, masak hingga kedua sisi kecokelatan.'
    ],
    image: `${IMAGE_BASE}pancake-pisang.jpg`,
    category: 'Dessert',
    cookingTime: 20,
    author: 'Admin',
    createdAt: new Date().toISOString()
}, {
    id: '5',
    title: 'Es Teh Jeruk Nipis',
    description: 'Minuman segar perpaduan teh dan jeruk nipis dengan sentuhan madu.',
    ingredients: ['2 kantong teh hitam', '500 ml air panas', '2 buah jeruk nipis', '3 sdm madu',
        'Es batu secukupnya', 'Daun mint untuk hiasan'
    ],
    instructions: [
        'Seduh teh dengan air panas selama 5 menit, angkat kantong teh.',
        'Tambahkan madu dan perasan jeruk nipis, aduk rata.',
        'Dinginkan dalam lemari es atau sajikan dengan es batu.',
        'Hias dengan daun mint dan irisan jeruk nipis.'
    ],
    image: `${IMAGE_BASE}es-teh.jpg`,
    category: 'Beverage',
    cookingTime: 10,
    author: 'Admin',
    createdAt: new Date().toISOString()
}];

// --- Fungsi CRUD tidak berubah ---
export const getRecipes = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_RECIPES));
        return DEFAULT_RECIPES;
    }
    try {
        return JSON.parse(stored);
    } catch {
        return DEFAULT_RECIPES;
    }
};

export const saveRecipes = (recipes) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
};

export const getRecipeById = (id) => {
    const recipes = getRecipes();
    return recipes.find((r) => r.id === id) || null;
};

export const addRecipe = (recipeData) => {
    const recipes = getRecipes();
    const newRecipe = {
        ...recipeData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        author: recipeData.author || 'User',
    };
    const updated = [newRecipe, ...recipes];
    saveRecipes(updated);
    return newRecipe;
};

export const updateRecipe = (id, updatedData) => {
    const recipes = getRecipes();
    const index = recipes.findIndex((r) => r.id === id);
    if (index === -1) return null;
    const updated = {
        ...recipes[index],
        ...updatedData,
        id: recipes[index].id,
        createdAt: recipes[index].createdAt,
    };
    recipes[index] = updated;
    saveRecipes(recipes);
    return updated;
};

export const deleteRecipe = (id) => {
    const recipes = getRecipes();
    const filtered = recipes.filter((r) => r.id !== id);
    saveRecipes(filtered);
    return filtered;
};

export const searchRecipes = (keyword) => {
    const recipes = getRecipes();
    if (!keyword || keyword.trim() === '') return recipes;
    const q = keyword.toLowerCase().trim();
    return recipes.filter(
        (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    );
};