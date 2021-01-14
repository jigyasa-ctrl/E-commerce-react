import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Product from "./Product";
import { Link } from "react-router-dom";

function ProductPage(props) {
  return (
    <div style={{ backgroundColor: "rgb(241, 239, 239)" }}>
      <Navigation />
      <div style={{ display: "flex" }}>
        <span class="product_page_images">
          <img
            height="100px"
            src="https://vignette.wikia.nocookie.net/dayz-standalone/images/7/74/Blue_Cargo_Pants_Model_(P-W).png/revision/latest?cb=20160207073840"
          ></img>
          <img
            height="100px"
            src="https://vignette.wikia.nocookie.net/dayz-standalone/images/7/74/Blue_Cargo_Pants_Model_(P-W).png/revision/latest?cb=20160207073840"
          ></img>
          <img
            height="100px"
            src="https://vignette.wikia.nocookie.net/dayz-standalone/images/7/74/Blue_Cargo_Pants_Model_(P-W).png/revision/latest?cb=20160207073840"
          ></img>
          <img
            height="100px"
            src="https://vignette.wikia.nocookie.net/dayz-standalone/images/7/74/Blue_Cargo_Pants_Model_(P-W).png/revision/latest?cb=20160207073840"
          ></img>
        </span>
        <div class="images_banner" style={{ flex: 0.8, display: "flex" }}>
          <img src="https://vignette.wikia.nocookie.net/dayz-standalone/images/7/74/Blue_Cargo_Pants_Model_(P-W).png/revision/latest?cb=20160207073840"></img>
          <div class="product_page_p" style={{ flex: "0.8" }}>
            <p>brand name</p>
            <h3>product name</h3>
            <h2>$454</h2>
            <p class="p_product_page">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
            <div>
              <button class="button_cart">Add to cart</button>
              <button class="button_wishlist">add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        You will also like
      </h2>
      <div class="product_page_overlay">
        {props.footer.data[0].arrivals.map((u) => (
          <span style={{ marginLeft: "20px" }}>
            <Link class="remove_underline" to="/product">
              <Product product={u} />
            </Link>
          </span>
        ))}
      </div>
      <Footer arrivals={props.footer.data[0].arrivals} />
    </div>
  );
}

export default ProductPage;
