import { useDispatch, useSelector } from "react-redux";
import { getFashion } from "../../features/fashionSlice/fashionSlice";
import { getPerfume } from "../../features/perfumeSlice/perfumeSlice";
import { getWearing } from "../../features/wearingSlice/wearingSlice";
import { getBooks } from "../../features/booksSlice/booksSlice";
import { getPC } from "../../features/pcSlice/pcSlice";
import { getForHome } from "../../features/forHomeSlice/forHomeSlice";
import { getDiscount } from "../../features/discountsSlice/discountsSlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cartSlice.js/cartSlice";
import "@splidejs/react-splide/css";
import "./Deals.css";

export default function Deals() {
  const fashion = useSelector(getFashion);
  const wearing = useSelector(getWearing);
  const perfume = useSelector(getPerfume);
  const books = useSelector(getBooks);
  const forHome = useSelector(getForHome);
  const pc = useSelector(getPC);
  const discount = useSelector(getDiscount);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="deals">
      <div className="deals-first">
        <div className="deals-fashion size main-color">
          <h2>Shop deals in Fashion</h2>
          <div>
            {fashion.map((products) => {
              return (
                <div key={products.id} className="fashion">
                  <img src={products.img} alt={products.name} />
                  <br />
                  <span className="fashion-text">{products.name}</span>
                </div>
              );
            })}
          </div>
          <a href="#">See all deals</a>
        </div>
        <div className="deals-decor size main-color">
          <h2>Home décor under $50</h2>
          <img src="./accessories/decor.jpg" alt="" />
          <a href="#">Shop Now</a>
        </div>
        <div className="deals-lunar size main-color">
          <h2>Lunar New Year</h2>
          <img src="./accessories/lunar.jpg" alt="" />
          <a href="#">Shop Now</a>
        </div>
        <div className="deals-fashion size main-color">
          <h2>Fashion trends you like</h2>
          <div>
            {wearing.map((products) => {
              return (
                <div key={products.id} className="fashion">
                  <img src={products.img} alt={products.name} />
                  <br />
                  <span className="fashion-text">{products.name}</span>
                </div>
              );
            })}
          </div>
          <a href="#">Explore more</a>
        </div>
      </div>
      <div className="deals-second">
        <h2>Best Sellers in Perfume</h2>
        <Splide
          options={{
            perPage: 7,
            rewind: true,
            type: "slide",
          }}
        >
          {perfume.map((products) => {
            return (
              <SplideSlide key={products.id} className="splide-perfume">
                <img src={products.img} alt={products.name} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="deals-third">
        <h2>Best Sellers in Books</h2>
        <Splide
          options={{
            perPage: 7,
            rewind: true,
            type: "slide",
          }}
        >
          {books.map((products) => {
            return (
              <SplideSlide key={products.id} className="splide-books">
                <img src={products.img} alt={products.name} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="deals-fourth">
        {forHome.map((deals) => {
          return (
            <div key={deals.id} className="deals-sport size main-color">
              <h2>{deals.name}</h2>
              <img src={deals.img} alt={deals.name} />
              <a href="#">{deals.link}</a>
            </div>
          );
        })}
      </div>
      <div className="deals-fifth">
        <h2>Best Sellers in PC Cases</h2>
        <Splide
          options={{
            perPage: 7,
            rewind: true,
            type: "slide",
          }}
        >
          {pc.map((products) => {
            return (
              <SplideSlide key={products.id} className="splide-books">
                <img src={products.img} alt={products.name} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="deals-sixth">
        <h2>Deals Under $25</h2>
        <Splide
          options={{
            perPage: 7,
            rewind: true,
            type: "slide",
          }}
        >
          {discount.map((products) => {
            return (
              <SplideSlide key={products.id} className="splide-deals">
                <FontAwesomeIcon
                  onClick={() => handleAddToCart(products)}
                  icon={faCartShopping}
                />
                <img src={products.img} alt={products.alt} />
                <div className="deals-bg">
                  <span>{products.text1}</span> {products.text2}
                </div>
                <br />
                <div className="deals-price">
                  {products.newprice}{" "}
                  <span>
                    List Price: <span>{products.oldprice}</span>
                  </span>
                </div>
                <div className="deals-name">
                  <span>{products.name}</span>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
        <div className="regrec">
          <hr />
          <div className="reg">
            <span>See personalized recommendations</span>
            <br />
            <Link to="/sign">Sign in</Link>
            <br />
            <div className="reg-text main-color">
              <span>
                New customer? <a href="#">Start here.</a>
              </span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
