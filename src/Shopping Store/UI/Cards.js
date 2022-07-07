import React, { useState, useEffect } from "react";
import Card from "./card";
import SearchItems from "./SearchItems";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { getPost } from "../action";
import { useDispatch } from "react-redux";
const Cards = () => {
  const data = useSelector((state) => state.products.products);
  const { searchItem } = useSelector((state) => state.products);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div className="d-flex flex-wrap  justify-content-around mt-4">
      {searchItem.length > 0 ? (
        <SearchItems />
      ) : (
        <div className="d-flex flex-wrap  justify-content-around mt-4">
          {data &&
            data.map((item) => {
              return (
                <Card
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  rating={item.rating.rate}
                  productImg={item.image}
                  key={item.id}
                  id={item.id}
                  item={item}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Cards;
