import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addItem, purchaseNow } from "../action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ItemCard = ({ title, price, rating, id, productImg, item }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-wrap  justify-content-around mt-4">
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={productImg}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions className="d-flex flex-wrap" disableSpacing>
          <Link to="/purchase">
            <Button
              variant="contained"
              className="mr-2"
              onClick={() => dispatch(purchaseNow(item))}
            >
              Purchase Now
            </Button>
          </Link>
          <Button variant="outlined" onClick={() => dispatch(addItem(item))}>
            Add To Cart
          </Button>
        </CardActions>
        <CardContent>
          <Typography paragraph>
            <b>Rating: </b>
            {rating}
          </Typography>
          <Typography paragraph>
            <b>Price: </b>${price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
