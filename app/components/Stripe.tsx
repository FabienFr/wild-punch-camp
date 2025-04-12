// Installation : npm install @stripe/stripe-js

"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

// Remplacez par votre clé publique Stripe (celle qui commence par pk_test_ ou pk_live_)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_votreclépublique");

interface StripeButtonProps {
  className?: string;
  children: React.ReactNode;
  amount: number; // en centimes (ex: 49900 pour 499€)
  productName: string;
}

export default function StripeButton({ className, children, amount, productName }: StripeButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe n'a pas pu être chargé");
      }

      // Appel à votre API pour créer une session de paiement
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: amount,
          productName: productName,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de la session de paiement");
      }

      const session = await response.json();

      // Rediriger vers Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} className={className} disabled={loading}>
      {loading ? "Chargement..." : children}
    </button>
  );
}
