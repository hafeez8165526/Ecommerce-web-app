import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
// import "./App.css";
import Navabar from './Navabar';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MAWXjSESu4uoarjmbKYFAAmHwVBOeUy2u1olyEfBKWExkdDRkOPAsLQ0b75Lnw4ROmDkABIQTclUURoYKb3qx7h00xiaozA5G");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8089/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="">
        <Navabar/>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {/* <CheckoutForm /> */}
        </Elements>
      )}
    </div>
  );
}