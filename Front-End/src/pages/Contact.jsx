import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message envoyé avec succès ! Nous vous répondrons bientôt.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h1 className="fw-bold mb-3">Contactez-Nous</h1>
                        <p className="lead text-muted">Nous sommes là pour vous aider</p>
                    </div>
                </div>

                <div className="row">
                    {/* Contact Info */}
                    <div className="col-lg-4 mb-4">
                        <div className="contact-info">
                            <div className="info-card mb-3 p-4 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-start">
                                    <i className="bi bi-telephone-fill fs-4 text-primary me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-2">Téléphone</h6>
                                        <p className="mb-1">21781701</p>
                                        <p className="mb-0">51969657</p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card mb-3 p-4 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-start">
                                    <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-2">Email</h6>
                                        <p className="mb-0">contact@techstore.tn</p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card mb-3 p-4 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-start">
                                    <i className="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-2">Localisation</h6>
                                        <p className="mb-0">Tunisie</p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card p-4 bg-white rounded shadow-sm">
                                <div className="d-flex align-items-start">
                                    <i className="bi bi-clock-fill fs-4 text-primary me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-2">Disponibilté</h6>
                                        <p className="mb-1">   Disponible 7j / 7</p>
                                        <p className="mb-0"> Support client et service actifs tous les jours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-4">Envoyez-nous un message</h4>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nom complet *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Téléphone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Sujet *</label>
                                            <select
                                                className="form-select"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Sélectionner...</option>
                                                <option value="product">Question sur un produit</option>
                                                <option value="order">Suivi de commande</option>
                                                <option value="support">Support technique</option>
                                                <option value="other">Autre</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Message *</label>
                                            <textarea
                                                className="form-control"
                                                rows="5"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary btn-lg">
                                                <i className="bi bi-send me-2"></i>
                                                Envoyer le message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
