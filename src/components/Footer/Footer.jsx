import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFirstFooter } from "../../features/firstFooterSlice/firstFooterSlice";
import { getFooter } from "../../features/footerSlice/footerSlice";
import "./Footer.css";

export default function Footer() {
  const firstFooter = useSelector(getFirstFooter);
  const footer = useSelector(getFooter);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="backtotop">
        <button onClick={scrollToTop}>Back to top</button>
      </div>
      <div className="footer-content__first">
        <div className="footer-firstext">
          <div className="footer-first">
            <h3>Get to Know Us</h3>
            {firstFooter.first.map((value) => {
              return <a href="#">{value.text}</a>;
            })}
          </div>
          <div className="footer-second">
            <h3>Make Money with Us</h3>
            {firstFooter.second.map((value) => {
              return <a href="#">{value.text}</a>;
            })}
          </div>
          <div className="footer-third">
            <h3>Amazon Payment Products</h3>
            {firstFooter.third.map((value) => {
              return <a href="#">{value.text}</a>;
            })}
          </div>
          <div className="footer-fourth">
            <h3>Let Us Help You</h3>
            {firstFooter.fourth.map((value) => {
              return <a href="#">{value.text}</a>;
            })}
          </div>
        </div>
        <hr />
        <div className="footer-line">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
          <div className="footer-options">
            <select name="lang">
              <option value="eng">English</option>
              <option value="arm">Armenian</option>
              <option value="deu">Deutsch</option>
              <option value="ru">Russian</option>
            </select>
            <button>$ USD - U.S. Dollar</button>
            <button>
              <img src="./flag.png" /> United States
            </button>
          </div>
        </div>
      </div>
      <div className="footer-final">
        <table className="footertable">
          <tbody>
            <tr>
              {footer.first.map((value) => {
                return (
                  <td className="footertd">
                    <a href="#" className="footer-links">
                      {value.name}
                      <br />
                      <span>{value.text}</span>
                    </a>
                  </td>
                );
              })}
            </tr>
            <tr className="footer-underspace"></tr>
            <tr>
              {footer.second.map((value) => {
                return (
                  <td className="footertd">
                    <a href="#" className="footer-links">
                      {value.name}
                      <br />
                      <span>{value.text}</span>
                    </a>
                  </td>
                );
              })}
            </tr>
            <tr className="footer-underspace"></tr>
            <tr>
              {footer.third.map((value) => {
                return (
                  <td className="footertd">
                    <a href="#" className="footer-links">
                      {value.name}
                      <br />
                      <span>{value.text}</span>
                    </a>
                  </td>
                );
              })}
            </tr>
            <tr className="footer-underspace"></tr>
            <tr className="fourth-tr">
              {footer.fourth.map((value) => {
                return (
                  <td className="footertd">
                    <a href="#" className="footer-links">
                      {value.name}
                      <br />
                      <span>{value.text}</span>
                    </a>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
        <div className="footer-lasttext">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
        <h2 className="lasttext">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </h2>
      </div>
    </div>
  );
}
