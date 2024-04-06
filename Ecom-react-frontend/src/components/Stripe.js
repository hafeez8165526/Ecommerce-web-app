import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MAWXjSESu4uoarjmbKYFAAmHwVBOeUy2u1olyEfBKWExkdDRkOPAsLQ0b75Lnw4ROmDkABIQTclUURoYKb3qx7h00xiaozA5G";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      name="ECOM." // the pop-in header title
      description="Big Data Stuff" // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      ComponentClass="div"
      label="Buy the Thing" // text inside the Stripe button
      panelLabel="Give Money" // prepended to the amount in the bottom pay button
      amount={1000000} // cents
      currency="INR"
      stripeKey={publishableKey}
      
      shippingAddress
      billingAddress
      
      zipCode
      alipay // accept Alipay (default false)
      bitcoin // accept Bitcoins (default false)
      allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
    />
  );
};

export default StripeCheckoutButton;
