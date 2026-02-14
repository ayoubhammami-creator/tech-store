import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/products?search=${searchTerm.trim()}`);
            setSearchTerm('');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-navbar">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <span className="brand-tech">Tech</span>
                    <span className="brand-store">Store</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Produits</Link>
                        </li>
                    </ul>

                    <form className="d-flex mx-auto search-form mb-2 mb-lg-0" onSubmit={handleSearch}>
                        <div className="input-group">
                            <input
                                className="form-control search-input"
                                type="search"
                                placeholder="Rechercher..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-primary" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">À Propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {/*<li className="nav-item ms-lg-3">
                            <Link to="/cart" className="btn btn-outline-primary position-relative px-3 cart-btn">
                                <i className="bi bi-cart3 me-1"></i> Panier
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </li>*/}
                        <li className="nav-item ms-lg-3">
    <Link
        to="/cart"
        className="btn btn-primary position-relative d-flex align-items-center gap-2 px-4 cart-btn"
    >
        <i className="bi bi-cart3 fs-5"></i>
        <span className="fw-semibold">Panier</span>

        {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
            </span>
        )}
    </Link>
</li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
