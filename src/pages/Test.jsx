import React, { useState } from "react";
import axios from "axios";

const RazorpayHandler = () => {
const handlePayment = () => {
  const options = {
    key: "rzp_test_XXXXXXXX", // <-- Your Razorpay Test Key
    amount: 50000, // 500 INR in paise
    currency: "INR",
    name: "Blood Donation Camp",
    description: "Test Transaction",
    order_id: "order_XXXXXXXX", // <-- Generated from your backend test server
    handler: function (response) {
      console.log("Payment Success:", response);
      alert("Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Test User",
      email: "test@example.com",
      contact: "9876543210",
    },
    theme: {
      color: "#F37254",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

return (
    <>
      <input
        type="number"
        placeholder="Enter Amount"
        onChange={(e) => {setTamt(e.target.value)}}
      ></input>
      <button type="button" onClick={paymentHandler}>Pay Now</button>
    </>
  );
};
};

export default Test;
