import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Product from "./Product";
import SideNavigation from "./SideNavigation";
import { Link } from "react-router-dom";

function Page(props) {
  const values = props.value;
  return (
    <>
      <Navigation />
      <div class="page_flex">
        <SideNavigation value={values} />
        <div style={{ flex: 0.8 }}>
          <img
            class="banner_image"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/12/69579e19-c4a9-450b-870e-711112f0e1fa1610466658757-cat-fest-premium-watch-dk.jpg"
          ></img>

          <div class="grid_class">
            {values.map((u, index) => (
              <>
                <Link class="remove_underline" to="/product">
                  <Product product={u} />
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer arrivals={props.footer.data[0].arrivals} />
    </>
  );
}

export default Page;
