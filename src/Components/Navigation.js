import React from "react";
import "../App.css";
import Image from "../logo.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div class="navigation">
      <img class="navigation_img" src={Image}></img>
      <div class="navigation_container1">
        <span class="navigation_span">
          <img src="https://img.icons8.com/windows/32/000000/user-lock--v1.png" />
          <p>
            welcome, you can <strong>login</strong> or <strong>register</strong>
          </p>
        </span>
        <span class="navigation_span">
          <img src="https://img.icons8.com/android/24/000000/like.png" />
          wishlist: 2
          <img src="https://img.icons8.com/fluent-systems-regular/24/000000/favorite-cart.png" />
          cart: 3
        </span>
      </div>
      <div class="navigation_container">
        <span class="navigation_span">
          <span class="navigation_span">
            <img src="https://img.icons8.com/windows/32/000000/user-lock--v1.png" />
            <p>
              hotline : <strong>+81313234534</strong>
            </p>
          </span>
        </span>
        <span class="navigation_span">
          <input type="text" placeholder="SEARCH"></input>
        </span>
      </div>

      <span class="space">
        <Link class="remove_underline" to="/">
          <strong>
            <p class="p_class">Jackets</p>
          </strong>
        </Link>
        <Link class="remove_underline" to="/Sweaters">
          <strong>
            <p class="p_class">sweaters</p>
          </strong>
        </Link>
        <Link class="remove_underline" to="/Dresses">
          <strong>
            <p class="p_class">dresses</p>
          </strong>
        </Link>
        <Link class="remove_underline" to="/Skirts">
          <strong>
            <p class="p_class">skirts</p>
          </strong>
        </Link>
        <Link class="remove_underline" to="/Pants">
          <strong>
            <p class="p_class">pants</p>
          </strong>
        </Link>
        <Link class="remove_underline" to="/Shorts">
          <strong>
            <p class="p_class">shorts</p>
          </strong>
        </Link>
      </span>
    </div>
  );
}

export default Navigation;
