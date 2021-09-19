import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import { read } from "../actions/hotel";
import { useSelector } from "react-redux";

const { Option } = Select;

const EditHotel = ({ match }) => {
  useEffect(() => {
    // console.log(match.params.hotelId);
    loadSellerHotel();
  }, []);

  const loadSellerHotel = async () => {
    let res = await read(match.params.hotelId);
    console.log(res);
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit Hotel</h2>
      </div>
    </>
  );
};

export default EditHotel;
