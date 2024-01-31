import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilters } from "../../features/filterSlice/filterSlice";
import Cart from "../../pages/Cart/Cart";
import Home from "../../pages/Home/Home";
import "./Navbar.css";

function Navbar() {
  const filters = useSelector(getFilters);
  return (
    <div className="header">
      <div className="nav-top">
        <div className="nav-left">
          <Link to="/" className="header__link">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
          <Link className="header__button">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              Deliver to <h4>Armenia</h4>
            </div>
          </Link>
        </div>
        <div className="nav-fill">
          <select name="filter" className="nav-filter">
            {filters.map((filter) => {
              return <option value={filter.value}>{filter.name}</option>;
            })}
          </select>
          <input
            type="text"
            className="nav-search"
            placeholder="Search Amazon"
            autoComplete="off"
          />
          <button className="nav-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="nav-right">
          <select name="lang" className="nav-lang">
            <option value="en">EN</option>
            <option value="am">ARM</option>
            <option value="de">DEU</option>
            <option value="ru">RU</option>
          </select>
          <Link to="/sign" className="nav-reg">
            Hello, sign in
            <h4>Account & Lists</h4>
          </Link>
          <Link href="#" className="nav-order">
            Returns
            <h4>& Orders</h4>
          </Link>
          <Link to="/cart" className="nav-cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <h4>Cart</h4>
          </Link>
        </div>
      </div>
      <div className="nav-bottom">
        <button className="nav-all">
          <FontAwesomeIcon icon={faBars} /> All
        </button>
        <button>Today's Deals</button>
        <button>Customer Service</button>
        <button>Registry</button>
        <button>Gift Cards</button>
        <button>Sell</button>
      </div>
    </div>
  );
}

export default Navbar;
