/*import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">
                            <span className="text-primary">Tech</span>Store
                        </h5>
                        <p className="text-muted">
                            Votre destination pour le matériel informatique premium en Tunisie.
                            Laptops, composants et accessoires de qualité.
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-5"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-5"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-whatsapp fs-5"></i></a>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Navigation</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="footer-link">Accueil</Link></li>
                            <li className="mb-2"><Link to="/products" className="footer-link">Produits</Link></li>
                            <li className="mb-2"><Link to="/about" className="footer-link">À Propos</Link></li>
                            <li className="mb-2"><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Marques</h6>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2">HP</li>
                            <li className="mb-2">Dell</li>
                            <li className="mb-2">Lenovo</li>
                            <li className="mb-2">Asus</li>
                            <li className="mb-2">Acer</li>
                            <li className="mb-2">Apple</li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">Contact</h6>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                98777046
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                95501607
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                Tunisie
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-secondary" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-muted mb-0">
                            © 2026 TechStore. Tous droits réservés.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="text-muted mb-0">
                            Paiements sécurisés par Stripe, Flouci & Konnect
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;*/




import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    {/* Brand */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">
                            <span className="text-primary">Tech</span>Store
                        </h5>
                        <p className="text-muted">
                            Votre destination pour le matériel informatique premium en Tunisie.
                            Laptops, composants et accessoires de qualité.
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-5"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-5"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-whatsapp fs-5"></i></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Navigation</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="footer-link">Accueil</Link></li>
                            <li className="mb-2"><Link to="/products" className="footer-link">Produits</Link></li>
                            <li className="mb-2"><Link to="/about" className="footer-link">À Propos</Link></li>
                            <li className="mb-2"><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Brands */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Marques</h6>
                        <ul className="list-unstyled text-muted">
                            <li>HP</li>
                            <li>Dell</li>
                            <li>Lenovo</li>
                            <li>Asus</li>
                            <li>Acer</li>
                            <li>Apple</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">Contact</h6>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                21781701
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone me-2"></i>
                                51969657
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                Tunisie
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-secondary" />

                {/* Bottom line */}
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <p className="text-muted mb-0">
                            © 2026 TechStore. Tous droits réservés.
                        </p>
                        <p className="text-muted mb-0 small">
                            Réalisé par{' '}
                            <a
                                href="https://github.com/ayoubhammami-creator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Ayoub Hammami
                            </a>
                        </p>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <p className="text-muted mb-0">
                            <i className="bi bi-shield-lock-fill me-2"></i>
                            Paiements sécurisés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
