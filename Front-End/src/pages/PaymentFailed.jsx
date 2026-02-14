import React from "react";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-danger fw-bold mb-3">
        ❌ Paiement échoué
      </h1>
      <p className="text-muted mb-4">
        Le paiement n’a pas pu être traité ou a été annulé. Aucun montant n’a été débité.
      </p>

      <Link to="/checkout" className="btn btn-primary me-3">
        Réessayer le paiement
      </Link>

      <Link to="/" className="btn btn-outline-secondary">
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default PaymentFailed;
