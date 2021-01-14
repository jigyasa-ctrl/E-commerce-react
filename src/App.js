import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Hero from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Product from "./Components/Product.js";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";

function App() {
  const reducer = useSelector((state) => state.stateValue);
  const data = reducer[0];
  const [type, setType] = useState("products");

  function changeTypetoarrival() {
    setType("arrivals");
  }
  
  function changeTypetoFeatured() {
    setType("products");
  }
  return (
    <>
      <div style={{ backgroundColor: "rgb(241, 239, 239)" }}>
        <Navigation />
        <Hero hero={data} />
        <span class="flex_class">
          <p onClick={changeTypetoFeatured}>
            <strong>featured</strong>
          </p>
          <p onClick={changeTypetoarrival}>arrivals</p>
        </span>
        <h4>we have over 2000 products in our shop</h4>
      </div>
      <div class="grid_class">
        {type == "products"
          ? data.data[0].products.map((u, index) => (
              <>
                <Link class="remove_underline" to="/product">
                  <Product product={u} />
                </Link>
              </>
            ))
          : data.data[0].arrivals.map((u, index) => <Product product={u} />)}
      </div>
      <p class="paragraph">+ load more items</p>
      <div class="signup">
        <div class="signup_inner">
          <h3>signup to our newsletter</h3>
          <p>and get s30 coupon</p>
        </div>
        <div class="signup_input">
          <input placeholder="ENTER HERE YOUR EMAIL"></input>
          <button>SIGN UP</button>
        </div>
      </div>
      <div class="grid_again">
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/12/69579e19-c4a9-450b-870e-711112f0e1fa1610466658757-cat-fest-premium-watch-dk.jpg"></img>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/12/b3498799-a52c-4eca-a7ce-8ef28067cb4a1610466589425-cat-fest-jeans-dk.jpg"></img>
      </div>

      <div>
        <p class="paragraph">from our blog</p>
        <div class="footer_container">
          <div class="footer">
            <span>
              <img
                height="200px"
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg"
              ></img>
            </span>
            <span class="footer_span">
              <h3 style={{ marginTop: "10px" }}>big sales coming soon</h3>
              <p style={{ marginTop: "10px" }}>12 Jan 2020</p>
              <p style={{ marginTop: "10px" }}>lorem bcbhjgfgfwubcbmxcb</p>
              <p style={{ marginTop: "10px" }}>2 comments</p>
            </span>
          </div>
          <div class="footer">
            <span>
              <img
                height="200px"
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg"
              ></img>
            </span>
            <span class="footer_span">
              <h3 style={{ marginTop: "10px" }}>new fashion models</h3>
              <p style={{ marginTop: "10px" }}>12 Jan 2020</p>
              <p style={{ marginTop: "10px" }}>lorem bcbhjgfgfwubcbmxc</p>
              <p style={{ marginTop: "10px" }}>2 comments</p>
            </span>
          </div>
        </div>
      </div>
      <Footer arrivals={data.data[0].arrivals} />
    </>
  );
}

export default App;
