import React from "react";
import { useSelector } from "react-redux";
import { getFashion } from "../../features/fashionSlice/fashionSlice";
import { getPerfume } from "../../features/perfumeSlice/perfumeSlice";
import { getWearing } from "../../features/wearingSlice/wearingSlice";
import { getBooks } from "../../features/booksSlice/booksSlice";
import { getForHome } from "../../features/forHomeSlice/forHomeSlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Deals.css";

export default function Deals() {
  const fashion = useSelector(getFashion);
  const wearing = useSelector(getWearing);
  const perfume = useSelector(getPerfume);
  const books = useSelector(getBooks);
  const forHome = useSelector(getForHome);
  return (
    <div className="deals">
      <div className="deals-first">
        <div className="deals-fashion size main-color">
          <h2>Shop deals in Fashion</h2>
          <div>
            {fashion.map((products) => {
              return (
                <div id="key" className="fashion">
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
              <SplideSlide className="splide-perfume">
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
              <SplideSlide className="splide-books">
                <img src={products.img} alt={products.name} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="deals-fourth">
        {forHome.map((deals) => {
          return (
            <div className="deals-sport size main-color">
              <h2>{deals.name}</h2>
              <img src={deals.img} alt={deals.name} />
              <span>{deals.link}</span>
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
          <SplideSlide className="splide-books">
            <img src="./pcparts/thermaltake.jpg" alt="thermaltake" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/deepcool.jpg" alt="deepcool" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/define.webp" alt="define" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/bitfenix.jpg" alt="bitfenix" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/gigabyte.jpg" alt="gigabyte" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/fulltower.jpg" alt="fulltower" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/corsair.jpg" alt="corsair" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/razer.webp" alt="razer" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/master.webp" alt="master" />
          </SplideSlide>{" "}
          <SplideSlide className="splide-books">
            <img src="./pcparts/corsaircc.jpg" alt="corsaircc" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/commander.jpg" alt="commander" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/z3.jpg" alt="z3" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/comrade.png" alt="comrade" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/one.jpg" alt="one" />
          </SplideSlide>
          <SplideSlide className="splide-books">
            <img src="./pcparts/crown.png" alt="crown" />
          </SplideSlide>
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
          <SplideSlide className="splide-deals">
            <img src="./deals/about.jpg" alt="about" />
            <div className="deals-bg">
              <span>30% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $13.98{" "}
              <span>
                List Price: <span>$19.95</span>
              </span>
            </div>
            <div className="deals-name">
              <span>The Miracle Morning (Updated)</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/shapers.webp" alt="shapers" />
            <div className="deals-bg">
              <span>7% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $12.85{" "}
              <span>
                List Price: <span>$13.84</span>
              </span>
            </div>
            <div className="deals-name">
              <span>SHAPERS - 4MM Laminated Lock</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/alpine.jpeg" alt="define" />
            <div className="deals-bg">
              <span>22% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $15.63{" "}
              <span>
                List Price: <span>$19.99</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Alpine Swiss - RFID Protected</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/funko.jpg" alt="bitfenix" />
            <div className="deals-bg">
              <span>37% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $17.33{" "}
              <span>
                List Price: <span>$27.32</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Funko POP! Rides The Batman</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/curl.jpg" alt="gigabyte" />
            <div className="deals-bg">
              <span>15% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $10.19{" "}
              <span>
                List Price: <span>$12.00</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Pacifica Beauty Curl Enhanced</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/coins.jpg" alt="fulltower" />
            <div className="deals-bg">
              <span>20% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $14.36{" "}
              <span>
                List Price: <span>$17.95</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Guide Book of US Coins 2022</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/prism.webp" alt="corsair" />
            <div className="deals-bg">
              <span>35% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $9.70{" "}
              <span>
                List Price: <span>$14.99</span>
              </span>
            </div>
            <div className="deals-name">
              <span>TOPS 5 x 8 Legal Pads</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/pets.jpg" alt="razer" />
            <div className="deals-bg">
              <span>29% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $24.99{" "}
              <span>
                List Price: <span>$34.99</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Pillow Pets Disney - Mickey</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/profoot.jpg" alt="master" />
            <div className="deals-bg">
              <span>Deal</span>
            </div>
            <br />
            <div className="deals-price">$7.99 </div>
            <div className="deals-name">
              <span>ProFoot Original Miracle Insole</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/bulk.jpg" alt="corsaircc" />
            <div className="deals-bg">
              <span>28% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $17.69{" "}
              <span>
                List Price: <span>$24.46</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Quality Park Bulk Dab</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/hydro.webp" alt="commander" />
            <div className="deals-bg">
              <span>13% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $34.95{" "}
              <span>
                List Price: <span>$39.95</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Hydro Flask Travel Tumblers</span>
            </div>
          </SplideSlide>
          <SplideSlide className="splide-deals">
            <img src="./deals/fluke.webp" alt="z3" />
            <div className="deals-bg">
              <span>10% off</span> Deal
            </div>
            <br />
            <div className="deals-price">
              $438.92{" "}
              <span>
                List Price: <span>$487.74</span>
              </span>
            </div>
            <div className="deals-name">
              <span>Fluke 233AKIT Remote Display</span>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
