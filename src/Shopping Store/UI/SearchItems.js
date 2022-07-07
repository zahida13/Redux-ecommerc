import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addItem } from "../action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SearchItems = () => {
  const { searchItem } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-wrap  justify-content-around mt-4">
      {searchItem.map((item) => {
        return (
          <Card sx={{ width: 345 }} key={item.id}>
            <CardMedia
              component="img"
              height="194"
              alt="Paella dish"
              image={item.image}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
            </CardContent>
            <CardActions className="d-flex flex-wrap" disableSpacing>
              <Button
                aria-label="add to favorites"
                variant="contained"
                className="mr-2"
              >
                Purchase Now
              </Button>
              <Button
                variant="outlined"
                // onClick={() => dispatch(addItem(item))}
              >
                Add To Cart
              </Button>
            </CardActions>
            <CardContent>
              <Typography paragraph>
                <b>Rating: </b>
                {item.rating.rate}
              </Typography>
              <Typography paragraph>
                <b>Price: </b>${item.price}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SearchItems;
