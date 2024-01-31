import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="nav-top">
        <div className="nav-left">
          <a className="header__link" href="#">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </a>
          <button className="header__button">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              Deliver to <h4>Armenia</h4>
            </div>
          </button>
        </div>
        <div className="nav-fill">
          <select name="filter" className="nav-filter">
            <option value="all">All Departaments</option>
            <option value="arts">Arts & Crafts</option>
            <option value="auto">Automotive</option>
            <option value="baby">Baby</option>
            <option value="beauty">Beauty & Personal Care</option>
            <option value="book">Books</option>
            <option value="fashion">Boy's fashion</option>
            <option value="computer">Computers</option>
            <option value="deals">Deals</option>
            <option value="music">Digital Music</option>
            <option value="elec">Electronics</option>
            <option value="gfashion">Girl's fashion</option>
            <option value="health">Health & Household</option>
            <option value="home">Home & Kitchen</option>
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
          <a href="#" className="nav-reg">
            Hello, sign in
            <h5>Accounts & Lists</h5>
          </a>
          <a href="#" className="nav-order">
            Returns
            <h4>& Orders</h4>
          </a>
          <div className="nav-cart">
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </div>
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
