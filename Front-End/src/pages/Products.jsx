import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Products.css';

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('search') || '';

    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    const brands = ['all', ...new Set(productsData.map(p => p.brand))];
    const categories = ['all', ...new Set(productsData.map(p => p.category))];

    let filteredProducts = productsData;

    // Filter by search term
    if (searchParam) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchParam.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchParam.toLowerCase()) ||
            p.category.toLowerCase().includes(searchParam.toLowerCase())
        );
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.brand === selectedBrand);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }

    // Sort products
    filteredProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return (
        <div className="products-page py-5">
            <div className="container">
                <div className="page-header mb-4">
                    <h1 className="fw-bold mb-2">Nos Produits</h1>
                    <p className="text-muted">Explorez notre catalogue de matériel informatique</p>
                </div>

                {/* Filters */}
                <div className="filters-section mb-4">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                            >
                                <option value="all">Toutes les marques</option>
                                {brands.filter(b => b !== 'all').map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="all">Toutes les catégories</option>
                                {categories.filter(c => c !== 'all').map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="name">Trier par nom</option>
                                <option value="price-asc">Prix croissant</option>
                                <option value="price-desc">Prix décroissant</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Products Count */}
                <div className="mb-3">
                    <p className="text-muted">
                        {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                    </p>
                </div>

                {/* Products Grid */}
                <div className="row">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">Aucun produit trouvé</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
