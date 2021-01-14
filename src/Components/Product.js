import React, { useState } from "react";

function Product(props) {
  const [visible, setVisible] = useState("hidden");
  function makeVisible() {
    setVisible("visible");
  }
  function makehidden() {
    setVisible("hidden");
  }

  return (
    <div
      onMouseEnter={makeVisible}
      onMouseLeave={makehidden}
      style={{ backgroundColor: "white", paddingBottom: "0px" }}
      class="flex_product"
    >
      <span>
        <img
          height="300px"
          width="200px"
          src={props.product.product.image}
        ></img>
      </span>
      <hr width="50px"></hr>
      <p style={{ marginTop: "10px" }}>{props.product.product.brand}</p>
      <h3 style={{ marginTop: "10px", textTransform: "uppercase" }}>
        {props.product.product.name}
      </h3>
      <p style={{ marginTop: "10px" }}>${props.product.product.price}</p>

      <button style={{ visibility: visible }} class="button_cart">
        add to cart
      </button>
      <button style={{ visibility: visible }} class="button_wishlist">
        add to whishlist
      </button>
    </div>
  );
}

export default Product;
