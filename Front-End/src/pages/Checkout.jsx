import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';
import './Checkout.css';

const Checkout = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        region: '',
        postalCode: '',
        orderNotes: ''
    });

    const [paymentMethod, setPaymentMethod] = useState('stripe');

    const formatPrice = (price) => {
        return new Intl.NumberFormat('fr-TN').format(price);
    };

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal >= 1999 ? 0 : 7;
    const total = subtotal + shipping;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   /* const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.region) {
            toast.error('Veuillez remplir tous les champs obligatoires');
            return;
        }

        // Simulate payment processing
        toast.loading('Traitement du paiement...');

        setTimeout(() => {
            toast.dismiss();
            toast.success('Commande passée avec succès !');
            dispatch(clearCart());

            // Redirect to success page or home
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }, 2000);
    };*/

    const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.region) {
    toast.error('Veuillez remplir tous les champs obligatoires');
    return;
  }

  toast.loading('Traitement du paiement...');

  setTimeout(() => {
    toast.dismiss();

    const isSuccess = Math.random() > 0.5;
    dispatch(clearCart());

    if (isSuccess) {
      toast.success('Commande passée avec succès !');
      navigate('/payment-success');
    } else {
      toast.error('Échec du paiement');
      navigate('/payment-failed');
    }
  }, 2000);
};


    if (cart.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h2>Votre panier est vide</h2>
                <p className="text-muted">Ajoutez des produits avant de passer commande</p>
                <button onClick={() => navigate('/products')} className="btn btn-primary mt-3">
                    Voir nos produits
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page py-5">
            <div className="container">
                <h2 className="fw-bold mb-4">Finaliser la commande</h2>

                <div className="row">
                    {/* Checkout Form */}
                    <div className="col-lg-7 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-4">Informations de livraison</h5>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Nom complet *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Téléphone *</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Adresse *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Ville *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Région *</label>
                                            <select
                                                className="form-select"
                                                name="region"
                                                value={formData.region}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Sélectionner...</option>
                                                <option value="tunis">Tunis</option>
                                                <option value="ariana">Ariana</option>
                                                <option value="ben-arous">Ben Arous</option>
                                                <option value="manouba">Manouba</option>
                                                <option value="nabeul">Nabeul</option>
                                                <option value="zaghouan">Zaghouan</option>
                                                <option value="bizerte">Bizerte</option>
                                                <option value="beja">Béja</option>
                                                <option value="jendouba">Jendouba</option>
                                                <option value="kef">Le Kef</option>
                                                <option value="siliana">Siliana</option>
                                                <option value="sousse">Sousse</option>
                                                <option value="monastir">Monastir</option>
                                                <option value="mahdia">Mahdia</option>
                                                <option value="sfax">Sfax</option>
                                                <option value="kairouan">Kairouan</option>
                                                <option value="kasserine">Kasserine</option>
                                                <option value="sidi-bouzid">Sidi Bouzid</option>
                                                <option value="gabes">Gabès</option>
                                                <option value="medenine">Médenine</option>
                                                <option value="tataouine">Tataouine</option>
                                                <option value="gafsa">Gafsa</option>
                                                <option value="tozeur">Tozeur</option>
                                                <option value="kebili">Kébili</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Code postal</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="col-md-12 mb-4">
                                            <label className="form-label">Notes de commande (optionnel)</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                name="orderNotes"
                                                value={formData.orderNotes}
                                                onChange={handleInputChange}
                                                placeholder="Informations supplémentaires pour la livraison..."
                                            ></textarea>
                                        </div>

                                        {/* Payment Methods */}
                                        <div className="col-md-12 mb-4">
                                            <h5 className="fw-bold mb-3">Mode de paiement</h5>

                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="paymentMethod"
                                                    id="stripe"
                                                    value="stripe"
                                                    checked={paymentMethod === 'stripe'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                />
                                                <label className="form-check-label" htmlFor="stripe">
                                                    <strong>Stripe</strong> - Carte bancaire
                                                    <br />
                                                    <small className="text-muted">Paiement sécurisé par carte bancaire</small>
                                                </label>
                                            </div>

                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="paymentMethod"
                                                    id="flouci"
                                                    value="flouci"
                                                    checked={paymentMethod === 'flouci'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                />
                                                <label className="form-check-label" htmlFor="flouci">
                                                    <strong>Flouci</strong>
                                                    <br />
                                                    <small className="text-muted">Paiement mobile Flouci</small>
                                                </label>
                                            </div>

                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="paymentMethod"
                                                    id="konnect"
                                                    value="konnect"
                                                    checked={paymentMethod === 'konnect'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                />
                                                <label className="form-check-label" htmlFor="konnect">
                                                    <strong>Konnect</strong>
                                                    <br />
                                                    <small className="text-muted">Paiement en ligne Konnect</small>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary btn-lg w-100">
                                                Commander maintenant
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-5">
                        <div className="card order-summary-checkout">
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-4">Récapitulatif de la commande</h5>

                                {/* Cart Items */}
                                <div className="order-items mb-3">
                                    {cart.map((item) => (
                                        <div key={item.id} className="order-item mb-3 pb-3 border-bottom">
                                            <div className="d-flex">
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.name}
                                                    className="order-item-image me-3"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/60?text=P';
                                                    }}
                                                />
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">{item.name}</h6>
                                                    <p className="text-muted small mb-0">
                                                        Qté: {item.quantity} × {formatPrice(item.price)} DT
                                                    </p>
                                                </div>
                                                <div className="text-end">
                                                    <p className="fw-bold mb-0">{formatPrice(item.price * item.quantity)} DT</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals */}
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

                                <hr />

                                <div className="summary-row mb-3">
                                    <strong className="fs-5">Total</strong>
                                    <strong className="text-primary fs-4">{formatPrice(total)} DT</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
