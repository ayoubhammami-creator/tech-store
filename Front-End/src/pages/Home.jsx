
import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogos from '../components/BrandLogos';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Home.css';

const Home = () => {
    console.log('Home component rendering...');
    console.log('Products data:', productsData?.length || 0);

    // Defensive check for products data
    const featuredProducts = Array.isArray(productsData)
        ? productsData.filter(p => p?.featured).slice(0, 4)
        : [];

    console.log('Featured products:', featuredProducts.length);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section"
             style={{
        backgroundImage: "url(/images/backGr.png)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
    }}
    >
                <div className="container">
                    <div className="row align-items-center min-vh-50 py-5">
                        <div className="col-lg-6">
                            <h1 className="hero-title display-3 fw-bold mb-4">
  Matériel IT Premium <br />
  <span className="hero-highlight">Pour Vous</span>
</h1>

                            <p className="hero-subtitle lead mb-4">
                                Découvrez notre sélection de laptops, composants et accessoires informatiques
                                des plus grandes marques mondiales.
                            </p>
                            <div className="hero-buttons">
  <Link to="/products" className="btn btn-primary btn-lg me-3">
    Découvrir nos produits
  </Link>
  <Link to="/contact" className="btn btn-outline-primary btn-lg">
    Nous contacter
  </Link>
</div>

                        </div>
                        <div className="col-lg-7">
                            <div className="hero-image">
                                <img
                                    /*src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"*/
        
                                   /* alt="Premium Laptops"
                                    className="img-fluid rounded-3 shadow-lg"*/
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Brand Logos */}
            <BrandLogos />

            {/* Featured Products */}
            <section className="featured-products py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">Produits En Vedette</h2>
                        <p className="text-muted">Découvrez nos meilleures offres du moment</p>
                    </div>
                    <div className="row">
                        {featuredProducts.length > 0 ? (
                            featuredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p className="text-muted">Aucun produit en vedette pour le moment</p>
                            </div>
                        )}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn btn-outline-primary">
                            Voir tous les produits
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features-section py-5 bg-light">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="feature-card text-center p-4">
                                <div className="feature-icon mb-3">
                                    <i className="bi bi-truck fs-1 text-primary"></i>
                                </div>
                                <h5 className="fw-bold">Livraison Gratuite</h5>
                                <p className="text-muted">À partir de 1999 DT</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card text-center p-4">
                                <div className="feature-icon mb-3">
                                    <i className="bi bi-shield-check fs-1 text-primary"></i>
                                </div>
                                <h5 className="fw-bold">Paiement Sécurisé</h5>
                                <p className="text-muted">Stripe, Flouci, Konnect</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card text-center p-4">
                                <div className="feature-icon mb-3">
                                    <i className="bi bi-headset fs-1 text-primary"></i>
                                </div>
                                <h5 className="fw-bold">Support Client</h5>
                                <p className="text-muted">Assistance 7j/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
