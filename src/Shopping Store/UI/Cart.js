import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Slider.css";
import { deleteItem, purchaseNow } from "../action";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { addProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  // value of duplicates
  const counts = {};
  addProducts.forEach(
    (x) => (counts[x.product.id] = (counts[x.product.id] || 0) + 1)
  );

  // to find unique objects
  const uniqueArray = addProducts.filter(
    (v, i, a) => a.findIndex((v2) => v2.product.id === v.product.id) === i
  );

  let updated = uniqueArray.map((unique, i) => {
    if (unique.product.id == Object.keys(counts)[i]) {
      return {
        ...unique.product,
        isAdded: true,
        price: unique.product.price * Object.values(counts)[i],
        quantity: Number(Object.values(counts)[i]),
      };
    } else {
      return {
        ...unique.product,
      };
    }
  });
  // to get total price
  const total = updated.reduce((acc, price) => {
    return acc + price.price;
  }, 0);

  return (
    <div className="favourite-list">
      <h2>Cart Items </h2>
      {/* <button onClick={() => setActive((prev) => !prev)}> X</button> */}
      {addProducts.length > 0 ? (
        updated.map((item) => {
          return (
            <div className="favourite-card" key={item.id}>
              <div className="card-image">
                <img src={item.image} />
              </div>
              <div className="text">
                <h5>{item.title}</h5>

                <div className="btn-qnt">
                  <Button
                    variant="outlined"
                    className="mr-2 p-1"
                    onClick={() => dispatch(deleteItem(item.id))}
                  >
                    Delete
                  </Button>
                  <div className="qty">
                    <h5>Quantity: {item.quantity} </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3>Nothing To Show</h3>
      )}
      {total > 0 ? <h4 className="mt-2">Total Price: {total}</h4> : ""};
      <div>
        <Button
          variant="outlined"
          className="mr-2"
          onClick={() => history.goBack()}
        >
          Go Back
        </Button>
        {addProducts.length > 0 && (
          <Link to="/purchase">
            <Button
              variant="contained"
              className="mr-2"
              onClick={() => dispatch(purchaseNow(updated))}
            >
              Purchase Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
