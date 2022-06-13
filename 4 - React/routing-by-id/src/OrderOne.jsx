import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem } from "./listItems";

const OrderOne = () => {
  let navigate = useNavigate();

  let params = useParams();
  console.log(typeof params.id);

  let order = getItem(params.id);
  console.log(typeof order);

  useEffect(() => {
    if (order === false) {
      navigate("/orders");
    }
  });

  return (
    <div>
      <h1>OrderOne</h1>
      <h1>{order.name}</h1>
      <h2>{order.price}$</h2>
      <p>{order.desc}</p>
      <img src={`/img/${order.img}`} alt={order.name} />
    </div>
  );
};

export default OrderOne;
