import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h1 className="fw-bold mb-3">À Propos de TechStore</h1>
                        <p className="lead text-muted">Votre partenaire de confiance pour le matériel informatique en Tunisie</p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6 mb-4">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                            alt="About Us"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4">Notre Mission</h2>
                        <p className="mb-3">
                            TechStore est votre destination incontournable pour les meilleurs équipements informatiques
                            en Tunisie. Nous nous engageons à fournir des produits de qualité supérieure des marques
                            les plus réputées au monde.
                        </p>
                        <p className="mb-3">
                            Notre catalogue comprend une large sélection de laptops, ordinateurs de bureau, composants
                            et accessoires soigneusement sélectionnés pour répondre aux besoins des professionnels,
                            des étudiants et des passionnés de technologie.
                        </p>
                        <p>
                            Avec un service client dévoué et des options de paiement flexibles, nous rendons
                            l'achat de matériel informatique simple, sûr et accessible à tous.
                        </p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h2 className="fw-bold mb-4 text-center">Pourquoi Choisir TechStore?</h2>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="feature-box text-center p-4">
                            <i className="bi bi-award fs-1 text-primary mb-3"></i>
                            <h5 className="fw-bold">Produits Authentiques</h5>
                            <p className="text-muted">
                                Tous nos produits sont authentiques et bénéficient de la garantie constructeur officielle.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="feature-box text-center p-4">
                            <i className="bi bi-truck fs-1 text-primary mb-3"></i>
                            <h5 className="fw-bold">Livraison Rapide</h5>
                            <p className="text-muted">
                                Livraison gratuite à partir de 1999 DT partout en Tunisie avec suivi en temps réel.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="feature-box text-center p-4">
                            <i className="bi bi-headset fs-1 text-primary mb-3"></i>
                            <h5 className="fw-bold">Support Expert</h5>
                            <p className="text-muted">
                                Notre équipe d'experts est disponible pour vous conseiller et vous assister.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center bg-light p-5 rounded">
                        <h3 className="fw-bold mb-3">Nos Partenaires</h3>
                        <p className="text-muted mb-4">
                            Nous travaillons avec les plus grandes marques mondiales
                        </p>
                        <div className="d-flex justify-content-center gap-4 flex-wrap">
                            <span className="brand-tag">HP</span>
                            <span className="brand-tag">Dell</span>
                            <span className="brand-tag">Lenovo</span>
                            <span className="brand-tag">Asus</span>
                            <span className="brand-tag">Acer</span>
                            <span className="brand-tag">Apple</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
