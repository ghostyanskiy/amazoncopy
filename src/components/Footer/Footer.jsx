import React, { useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="regrec">
        <hr />
        <div className="reg">
          <span>See personalized recommendations</span>
          <br />
          <button>Sign in</button>
          <br />
          <div className="reg-text main-color">
            <span>
              New customer? <a href="#">Start here.</a>
            </span>
          </div>
        </div>
        <hr />
      </div>
      <div className="backtotop">
        <button onClick={scrollToTop}>Back to top</button>
      </div>
      <div className="footer-content__first">
        <div className="footer-firstext">
          <div className="footer-first">
            <h3>Get to Know Us</h3>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </div>
          <div className="footer-second">
            <h3>Make Money with Us</h3>
            <a href="#">Sell products on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            <a href="#">Host an Amazon Hub</a>
            <a href="#">{">"} See More Make Money with Us</a>
          </div>
          <div className="footer-third">
            <h3>Amazon Payment Products</h3>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Amazon Currency Converter</a>
          </div>
          <div className="footer-fourth">
            <h3>Let Us Help You</h3>
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#">Amazon Assistant</a>
            <a href="#">Help</a>
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
              <td className="footertd">
                <a className="footer-links" href="#">
                  Amazon Music
                  <br />
                  <span>Stream millions</span>
                  <br />
                  <span> of songs</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Amazon Ads
                  <br />
                  <span>Reach customers</span>
                  <br />
                  <span>wherever they</span>
                  <br />
                  <span>spend their time</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  6pm
                  <br />
                  <span>Score deals</span>
                  <br />
                  <span>on fashion</span>
                  <br />
                  <span>brands</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  AbeBooks
                  <br />
                  <span>Books, art </span>
                  <br />
                  <span>& collectibles</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  ACX
                  <br />
                  <span>Audiobook Publishing</span>
                  <br />
                  <span>Made Easy</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Sell on Amazon
                  <br />
                  <span>Start a Selling</span>
                  <br />
                  <span>Account</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Amazon
                  <br />
                  Business
                  <br />
                  <span>Everything</span>
                  <br />
                  <span>For</span>
                  <br />
                  <span>Your</span>
                  <br />
                  <span>Business</span>
                </a>
              </td>
            </tr>
            <tr className="footer-underspace"></tr>
            <tr>
              <td className="footertd">
                <a className="footer-links" href="#">
                  AmazonGlobal
                  <br />
                  <span>Shop Order</span>
                  <br />
                  <span>Internationally</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Home Services
                  <br />
                  <span>Experienced Pros</span>
                  <br />
                  <span>Happiness</span>
                  <br />
                  <span>Guarantee</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Amazon Web
                  <br />
                  Services
                  <br />
                  <span>Scalable Cloud</span>
                  <br />
                  <span>Computing</span>
                  <br />
                  <span>Services</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Audible
                  <br />
                  <span>Listen to Books &</span>
                  <br />
                  <span>Original</span>
                  <br />
                  <span>Audio</span>
                  <br />
                  <span>Performances</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Box Office Mojo
                  <br />
                  <span>Find Movie</span>
                  <br />
                  <span>Box Office Data</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Goodreads
                  <br />
                  <span>Book Reviews</span>
                  <br />
                  <span>&</span>
                  <br />
                  <span>recommendations</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  IMDb
                  <br />
                  <span>Movies, TV</span>
                  <br />
                  <span>& Celebrities</span>
                </a>
              </td>
            </tr>
            <tr className="footer-underspace"></tr>
            <tr>
              <td className="footertd">
                <a className="footer-links" href="#">
                  IMDbPro
                  <br />
                  <span>Get Info</span>
                  <br />
                  <span>Entertainment</span>
                  <br />
                  <span>Professionals</span>
                  <br />
                  <span>Need</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Kindle Direct
                  <br />
                  Publishing
                  <br />
                  <span>Indie Digital &</span>
                  <br />
                  <span>Print Publishing</span>
                  <br />
                  <span>Made Easy</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Prime Video
                  <br />
                  Direct
                  <br />
                  <span>Video</span>
                  <br />
                  <span>Distribution</span>
                  <br />
                  <span>Made Easy</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Shopbop
                  <br />
                  <span>Designer</span>
                  <br />
                  <span>Fashion Brands</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Woot!
                  <br />
                  <span>Deals and</span>
                  <br />
                  <span>Shenanigans</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Zappos
                  <br />
                  <span>Shoes &</span>
                  <br />
                  <span>Clothing</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Ring
                  <br />
                  <span>Smart Home</span>
                  <br />
                  <span>Security</span>
                  <br />
                  <span>Systems</span>
                </a>
              </td>
            </tr>
            <tr className="footer-underspace"></tr>
            <tr>
              <td className="footertd footer-empty"></td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  eero WiFi
                  <br />
                  <span>Stream 4K Video</span>
                  <br />
                  <span>in Every Room</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Blink
                  <br />
                  <span>Smart Security</span>
                  <br />
                  <span>for Every</span>
                  <br />
                  <span>Home</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Neighbors App
                  <br />
                  <span>Real-Time Crime</span>
                  <br />
                  <span>& Safety Alerts</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  Amazon Subscription
                  <br />
                  Boxes
                  <br />
                  <span>Top subscription boxes</span>
                  <br />
                  <span>- right to your door</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd">
                <a className="footer-links" href="#">
                  PillPack
                  <br />
                  <span>Pharmacy</span>
                  <br />
                  <span>Simplified</span>
                </a>
              </td>
              <td className="footer-space"></td>
              <td className="footertd footer-empty"></td>
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
