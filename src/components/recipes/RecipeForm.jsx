import React, { useState } from 'react';

const RecipeForm = ({ initialData = {}, onSubmit, submitLabel = 'Simpan', isEditing = false }) => {
    const [formData, setFormData] = useState({
        title: initialData.title || '',
        description: initialData.description || '',
        category: initialData.category || '',
        cookingTime: initialData.cookingTime || '',
        image: initialData.image || '',
        ingredients: initialData.ingredients ? initialData.ingredients.join('\n') : '',
        instructions: initialData.instructions ? initialData.instructions.join('\n') : '',
        author: initialData.author || '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Judul resep wajib diisi.';
        if (!formData.description.trim()) newErrors.description = 'Deskripsi wajib diisi.';
        if (!formData.category.trim()) newErrors.category = 'Kategori wajib diisi.';
        if (!formData.cookingTime || Number(formData.cookingTime) <= 0) {
            newErrors.cookingTime = 'Waktu memasak harus angka positif.';
        }
        if (!formData.ingredients.trim()) newErrors.ingredients = 'Bahan-bahan wajib diisi.';
        if (!formData.instructions.trim()) newErrors.instructions = 'Langkah pembuatan wajib diisi.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            ...formData,
            cookingTime: Number(formData.cookingTime),
            ingredients: formData.ingredients.split('\n').filter((s) => s.trim() !== ''),
            instructions: formData.instructions.split('\n').filter((s) => s.trim() !== ''),
        };
        onSubmit(payload);
    };

    return (
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label fw-semibold">
                        Judul Resep <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Masukkan judul resep"
                    />
                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
                <div className="col-md-3">
                    <label htmlFor="category" className="form-label fw-semibold">
                        Kategori <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Main Course, Dessert, dll"
                    />
                    {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                </div>
                <div className="col-md-3">
                    <label htmlFor="cookingTime" className="form-label fw-semibold">
                        Waktu (menit) <span className="text-danger">*</span>
                    </label>
                    <input
                        type="number"
                        className={`form-control ${errors.cookingTime ? 'is-invalid' : ''}`}
                        id="cookingTime"
                        name="cookingTime"
                        value={formData.cookingTime}
                        onChange={handleChange}
                        placeholder="30"
                        min="1"
                    />
                    {errors.cookingTime && <div className="invalid-feedback">{errors.cookingTime}</div>}
                </div>
                <div className="col-12">
                    <label htmlFor="image" className="form-label fw-semibold">URL Gambar</label>
                    <input
                        type="url"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/gambar.jpg"
                    />
                    <small className="text-muted">Opsional. Kosongkan untuk menggunakan gambar default.</small>
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label fw-semibold">
                        Deskripsi <span className="text-danger">*</span>
                    </label>
                    <textarea
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        id="description"
                        name="description"
                        rows="2"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Deskripsi singkat tentang resep"
                    />
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="ingredients" className="form-label fw-semibold">
                        Bahan-bahan <span className="text-danger">*</span>
                    </label>
                    <textarea
                        className={`form-control ${errors.ingredients ? 'is-invalid' : ''}`}
                        id="ingredients"
                        name="ingredients"
                        rows="6"
                        value={formData.ingredients}
                        onChange={handleChange}
                        placeholder="Tulis setiap bahan dalam satu baris&#10;Contoh:&#10;3 siung bawang putih&#10;2 butir telur&#10;200 gr tepung"
                    />
                    {errors.ingredients && <div className="invalid-feedback">{errors.ingredients}</div>}
                    <small className="text-muted">Satu bahan per baris.</small>
                </div>
                <div className="col-md-6">
                    <label htmlFor="instructions" className="form-label fw-semibold">
                        Langkah Membuat <span className="text-danger">*</span>
                    </label>
                    <textarea
                        className={`form-control ${errors.instructions ? 'is-invalid' : ''}`}
                        id="instructions"
                        name="instructions"
                        rows="6"
                        value={formData.instructions}
                        onChange={handleChange}
                        placeholder="Tulis setiap langkah dalam satu baris&#10;Contoh:&#10;Panaskan minyak&#10;Tumis bawang hingga harum&#10;Masukkan nasi dan aduk rata"
                    />
                    {errors.instructions && <div className="invalid-feedback">{errors.instructions}</div>}
                    <small className="text-muted">Satu langkah per baris.</small>
                </div>
                <div className="col-12">
                    <label htmlFor="author" className="form-label fw-semibold">Penulis</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Nama penulis resep"
                    />
                    <small className="text-muted">Opsional. Default: User.</small>
                </div>
                <div className="col-12 d-flex gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        {submitLabel}
                    </button>
                    <button type="reset" className="btn btn-outline-secondary" onClick={() => setFormData(initialData)}>
                        Reset
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RecipeForm;
