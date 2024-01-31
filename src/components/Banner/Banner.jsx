import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { getHome } from "../../features/homecareSlice/homecareSlice";
import { getAccss } from "../../features/accessoriesSlice/accessoriesSlice";
import "@splidejs/react-splide/css";
import "./Banner.css";

export default function Banner() {
  const firstAccss = useSelector(getAccss);
  const getHomecare = useSelector(getHome);
  const sliderImg = [
    {
      id: 1,
      name: "valentine",
      link: "./banner/valentine.jpg",
    },
    {
      id: 2,
      name: "lunar",
      link: "./banner/lunar.jpg",
    },
    {
      id: 3,
      name: "books",
      link: "./banner/books.jpg",
    },
  ];
  return (
    <div className="main">
      <Splide
        options={{
          type: "loop",
          rewind: "true",
        }}
      >
        {sliderImg.map((img) => {
          return (
            <SplideSlide>
              <img src={img.link} alt={img.name} />
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="main-content">
        <div className="firstcontent size main-color">
          <h2>Gaming accessories</h2>
          <div>
            {firstAccss.map((products) => {
              return (
                <div className="firstproducts" key={products.id}>
                  <img className="products-img" src={products.img} alt="" />
                  <br />
                  <span className="products-name product-size">
                    {products.name}
                  </span>
                </div>
              );
            })}
          </div>
          <a href="#">See More</a>
        </div>
        <div className="secondcontent size main-color">
          <h2>Deals in PCs</h2>
          <a href="#">
            <img className="pcdeal" src="./accessories/pc.jpg" alt="pc" />
          </a>
          <a href="#">Shop Now</a>
        </div>
        <div className="thirdcontent size main-color">
          <h2>Refresh your space</h2>
          <div>
            {getHomecare.map((products) => {
              return (
                <div className="secondproducts" key={products.id}>
                  <img src={products.img} className="products-img" alt="" />
                  <br />
                  <span className="products-name">{products.name}</span>
                </div>
              );
            })}
          </div>
          <a href="#">See More</a>
        </div>
        <div className="fourthcontent size main-color">
          <h2>Toys under $25</h2>
          <a href="#">
            <img className="health" src="./accessories/toys.jpg" alt="pc" />
          </a>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </div>
  );
}
