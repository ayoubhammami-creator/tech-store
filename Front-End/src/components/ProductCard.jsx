import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('fr-TN').format(price);
    };

    return (
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
            <Link to={`/product/${product.id}`} className="text-decoration-none">
                <div className="card product-card h-100">
                    <div className="position-relative">
                        <img
                            src={product.images[0]}
                            className="card-img-top product-image"
                            alt={product.name}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x200?text=Tech+Product';
                            }}
                        />
                        {product.featured && (
                            <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                                Featured
                            </span>
                        )}
                    </div>

                    <div className="card-body d-flex flex-column">
                        <p className="text-muted small mb-1">{product.brand}</p>
                        <h6 className="card-title product-title">{product.name}</h6>
                        <p className="text-muted small mb-2">{product.category}</p>

                        <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="product-price fw-bold">{formatPrice(product.price)} DT</span>
                                </div>
                                <span className="btn btn-sm btn-primary">
                                    Voir détails
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
