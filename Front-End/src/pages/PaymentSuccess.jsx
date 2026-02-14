import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-success fw-bold mb-3">
        ✅ Paiement réussi
      </h1>
      <p className="text-muted mb-4">
        Votre commande a été traitée avec succès. Merci pour votre confiance.
      </p>

      <Link to="/products" className="btn btn-primary me-3">
        Continuer vos achats
      </Link>

      <Link to="/" className="btn btn-outline-secondary">
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default PaymentSuccess;
