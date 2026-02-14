import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';
import './Cart.css';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('fr-TN').format(price);
    };

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal >= 1999 ? 0 : 7;
    const total = subtotal + shipping;

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    if (cart.length === 0) {
        return (
            <div className="container py-5">
                <div className="empty-cart text-center">
                    <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
                    <h2 className="mb-3">Votre panier est vide</h2>
                    <p className="text-muted mb-4">Découvrez nos produits et ajoutez-en à votre panier</p>
                    <Link to="/products" className="btn btn-primary">
                        Voir nos produits
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page py-5">
            <div className="container">
                <h2 className="fw-bold mb-4">Panier d'achat</h2>

                <div className="row">
                    {/* Cart Items */}
                    <div className="col-lg-8 mb-4">
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item mb-3">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="img-fluid rounded"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/100?text=Product';
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Link to={`/product/${item.id}`} className="text-decoration-none">
                                                <h6 className="mb-1">{item.name}</h6>
                                                <p className="text-muted small mb-0">{item.brand}</p>
                                            </Link>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="fw-bold mb-0">{formatPrice(item.price)} DT</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="input-group input-group-sm">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => handleDecrement(item.id)}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    className="form-control text-center"
                                                    value={item.quantity}
                                                    readOnly
                                                />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => handleIncrement(item.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-1 text-end">
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div className="card order-summary">
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-4">Récapitulatif</h5>

                                <div className="summary-row mb-2">
                                    <span>Sous-total</span>
                                    <span>{formatPrice(subtotal)} DT</span>
                                </div>

                                <div className="summary-row mb-3">
                                    <span>Livraison</span>
                                    <span className={shipping === 0 ? 'text-success' : ''}>
                                        {shipping === 0 ? 'Gratuite' : `${shipping} DT`}
                                    </span>
                                </div>

                                {subtotal < 1999 && (
                                    <div className="alert alert-info small mb-3">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Ajoutez {formatPrice(1999 - subtotal)} DT pour la livraison gratuite
                                    </div>
                                )}

                                <hr />

                                <div className="summary-row mb-4">
                                    <strong>Total</strong>
                                    <strong className="text-primary fs-5">{formatPrice(total)} DT</strong>
                                </div>

                                <Link to="/checkout" className="btn btn-primary w-100 mb-2">
                                    Passer la commande
                                </Link>
                                <Link to="/products" className="btn btn-outline-secondary w-100">
                                    Continuer mes achats
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
