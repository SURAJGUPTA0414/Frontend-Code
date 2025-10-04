import React, { useState } from "react";
import axios from "axios";

const RazorpayHandler = () => {
  const [tamt, setTamt] = useState();

  const paymentHandler = () => {
    axios
      .get(`http://localhost:2911/RazorpayOrder/${tamt}`)
      .then((response) => {
        const responseData = response.data;

        const options = {
          key: responseData.key,
          currency: responseData.currency,
          order_id: responseData.orderid,
          amount: responseData.amount,
          name: "Blood Donation Camp",
          description: "Donation Payment",
          prefill: {
            name: "Vijay",
            email: "vijay@gmail.com",
            contact: "9876543210",
          },
          theme: {
            color: "red",
          },
          handler: function (response) {
            alert("Payment Successful!");
            console.log(response);
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("paymentfailed", (error) => {
          alert("Payment Failed: " + error.description);
        });
        rzp.on("modal.ondismiss", () => {alert("Payment Cancelled.");});
        rzp.open();
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

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

export default RazorpayHandler;
