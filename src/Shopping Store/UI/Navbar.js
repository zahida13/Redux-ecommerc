import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { searchItem } from "../action/index";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [filter, setFilter] = useState("");
  const { products } = useSelector((state) => state.products);
  const { addProducts } = useSelector((state) => state.products);

  useEffect(() => {
    let productFinder = products.filter(
      (product) => product.title.toLowerCase().includes(query)
      // return setResult(item);
    );
    setResult(productFinder);
  }, [query]);

  const dispatchFunction = (e) => {
    e.preventDefault();
    dispatch(searchItem(result));
    setResult("");
  };

  const functionsContainer = (e) => {
    setQuery(e.target.value);
    dispatchFunction(e);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link  " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/cart"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Cart: {addProducts.length}
                  {console.log(addProducts.length)}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link "
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => {
                  functionsContainer(e);
                }}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
