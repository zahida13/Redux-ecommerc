import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { deletePurchaseItem } from "../action";

const Purchase = () => {
  const { purchaseItems } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  // total Price
  // let total = purchaseItems.reduce((acc, price) => {
  //   return acc + price.price;
  // }, 0);

  return (
    <div>
      <div className="favourite-list">
        <h2>Purchase Now </h2>
        {/* <button onClick={() => setActive((prev) => !prev)}> X</button> */}
        {purchaseItems.length > 0 ? (
          purchaseItems.map((item) => {
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
                      onClick={() => dispatch(deletePurchaseItem(item.id))}
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
          <div className="favourite-card" key={purchaseItems.id}>
            <div className="card-image">
              <img src={purchaseItems.image} />
            </div>
            <div className="text">
              <h5>{purchaseItems.title}</h5>

              <div className="btn-qnt">
                <Button
                  variant="outlined"
                  className="mr-2 p-1"
                  onClick={() => dispatch(deletePurchaseItem(purchaseItems.id))}
                >
                  Delete
                </Button>
                <div className="qty">
                  <h5>Quantity: {purchaseItems.quantity} </h5>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {total > 0 ? <h4 className="mt-2">Total Price: {total}</h4> : ""}; */}
        <div>
          <Button
            variant="outlined"
            className="mr-2"
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
          {purchaseItems && (
            <Button variant="contained" className="mr-2">
              Add Payment Method
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
