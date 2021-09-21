/**
 * src/stripe/StripeSuccess.js
 * useEffect() to make request to BE -> to create new order for user who piad for booking
 * then we can show the booking in user purchase/booking history
 */

import { CompassOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { stripeSuccessRequest } from "../actions/stripe";

const StripeSuccess = ({ match, history }) => {
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }));
  // const {token} = auth;

  useEffect(() => {
    // console.log(
    //   "send this hotelId to BE to create order",
    //   match.params.hotelId
    // );
    stripeSuccessRequest(token, match.params.hotelId).then((res) => {
      if (res.data.success) {
        // console.log("stripe success response", res.data);
        history.push("/dashboard");
      } else {
        history.push("/stripe/cancel");
      }
    });
  }, [match.params.hotelId]);

  return (
    <div className="container">
      <div className="col">
        <h2 className="text-center p-5">
          Payment success. {match.params.hotelId}
        </h2>
      </div>
    </div>
  );
};

export default StripeSuccess;
