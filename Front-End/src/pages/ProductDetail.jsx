import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import productsData from '../data/products.json';
import toast from 'react-hot-toast';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h2>Produit non trouvé</h2>
                <Link to="/products" className="btn btn-primary mt-3">
                    Retour aux produits
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            dispatch(addToCart(product));
        }
        toast.success(`${product.name} ajouté au panier !`);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('fr-TN').format(price);
    };

    return (
        <div className="product-detail-page py-5">
            <div className="container">
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                        <li className="breadcrumb-item"><Link to="/products">Produits</Link></li>
                        <li className="breadcrumb-item active">{product.name}</li>
                    </ol>
                </nav>

                <div className="row">
                    {/* Product Images */}
                    <div className="col-lg-6 mb-4">
                        <div className="product-images">
                            <div className="main-image mb-3">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="img-fluid rounded shadow"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/600x400?text=Tech+Product';
                                    }}
                                />
                            </div>
                            <div className="image-thumbnails d-flex gap-2">
                                {product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/100?text=Img';
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-lg-6">
                        <div className="product-info">
                            <p className="text-muted mb-2">{product.brand}</p>
                            <h2 className="product-name fw-bold mb-3">{product.name}</h2>

                            <div className="price-section mb-4">
                                <h3 className="product-price text-primary fw-bold mb-2">
                                    {formatPrice(product.price)} DT
                                </h3>
                                <p className="text-muted">
                                    <i className="bi bi-truck me-2"></i>
                                    Livraison gratuite à partir de 1999 DT
                                </p>
                            </div>

                            <div className="product-description mb-4">
                                <h5 className="fw-bold mb-3">Description</h5>
                                <p>{product.description}</p>
                            </div>

                            <div className="product-specs mb-4">
                                <h5 className="fw-bold mb-3">Spécifications</h5>
                                <ul className="specs-list">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <li key={key}>
                                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="product-actions">
                                <div className="quantity-selector mb-3">
                                    <label className="form-label fw-bold">Quantité:</label>
                                    <div className="input-group" style={{ maxWidth: '150px' }}>
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control text-center"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-primary btn-lg w-100 mb-3"
                                    onClick={handleAddToCart}
                                >
                                    <i className="bi bi-cart-plus me-2"></i>
                                    Ajouter au panier
                                </button>

                                <a
                                    href={`https://wa.me/21698777046?text=Bonjour, je suis intéressé par le produit: ${product.name}`}
                                    className="btn btn-success btn-lg w-100 mb-4 d-flex align-items-center justify-content-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-whatsapp me-2 fs-4"></i>
                                    Commander via WhatsApp
                                </a>

                                <div className="product-meta text-muted small">
                                    <p className="mb-1">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        En stock ({product.stock} disponibles)
                                    </p>
                                    <p className="mb-0">
                                        <i className="bi bi-shield-check me-2"></i>
                                        Garantie constructeur incluse
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
