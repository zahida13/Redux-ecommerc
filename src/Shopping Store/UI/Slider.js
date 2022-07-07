import React from "react";
import "./Slider.css";
import clothes from "./assets/cloth.jpg";
import clothe from "./assets/clothes.jpg";
import cloth from "./assets/hanger.jpg";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={clothes} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-dark">First slide label</h5>
            <p className="text-dark">
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={clothe} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-dark">Second slide label</h5>
            <p className="text-dark">
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cloth} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-dark">Third slide label</h5>
            <p className="text-dark">
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
