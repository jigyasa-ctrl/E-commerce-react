import image from "./hero.jpg";
import pant from "./pant.png";
import skirt from "./skirt.png";
import jogger from "./jogger.png";
import jeans from "./jeans.png";
import suit from "./suit.png";
import tshirt from "./tshirt.png";
const initialState = {
  stateValue: [
    {
      data: [
        {
          heroImage: image,
          products: [
            {
              product: {
                image: skirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: pant,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: jogger,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: jeans,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: suit,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: tshirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: skirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: skirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
          arrivals: [
            {
              product: {
                image: pant,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: pant,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: skirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: jogger,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: tshirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: jeans,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: skirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: skirt,
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
          sweaters: [
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG39.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG21.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG23.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG23.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG26.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://vignette4.wikia.nocookie.net/warehouse-13-artifact-database/images/7/73/Sweater.png/revision/latest?cb=20141107001507",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://cdn.shopify.com/s/files/1/0979/3228/products/UKF_clothing_-_webstore_photography_20_1024x1024.png?v=1511366458",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG11.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
          pants: [
            {
              product: {
                image: "http://pluspng.com/img-png/png-hd-pants-for-1000.png",
                brand: "Calvin",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://www.freepnglogos.com/uploads/jeans-png/download-jeans-png-image-png-image-pngimg-29.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "http://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansblue-1421526362760kjplj.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "http://www.transparentpng.com/thumb/trouser/trouser-png-transparent-image--0.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://webstockreview.net/images/jeans-clipart-denim-17.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansmens-142152636340971a5m.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://cdn.shopify.com/s/files/1/0979/3228/products/UKF_clothing_-_webstore_photography_20_1024x1024.png?v=1511366458",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/jeans/jeans_PNG5745.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
          dresses: [
            {
              product: {
                image:
                  "https://www.freepngimg.com/thumb/dress/4-2-dress-png-hd.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/dress/dress_PNG149.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "http://pre07.deviantart.net/984b/th/pre/i/2013/061/3/c/gown_29_png_by_avalonsinspirational-d5wozzs.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "https://pngimg.com/uploads/dress/dress_PNG8.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "http://fc09.deviantart.net/fs71/f/2012/225/7/0/teal_ball_gown_png_by_vixen1978-d5b01hy.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://vignette4.wikia.nocookie.net/warehouse-13-artifact-database/images/7/73/Sweater.png/revision/latest?cb=20141107001507",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://cdn.shopify.com/s/files/1/0979/3228/products/UKF_clothing_-_webstore_photography_20_1024x1024.png?v=1511366458",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/dress/dress_PNG147.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
          shorts: [
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG39.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG21.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG23.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG23.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG26.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://vignette4.wikia.nocookie.net/warehouse-13-artifact-database/images/7/73/Sweater.png/revision/latest?cb=20141107001507",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://cdn.shopify.com/s/files/1/0979/3228/products/UKF_clothing_-_webstore_photography_20_1024x1024.png?v=1511366458",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG11.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
          skirts: [
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG39.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG21.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG23.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG23.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG26.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://vignette4.wikia.nocookie.net/warehouse-13-artifact-database/images/7/73/Sweater.png/revision/latest?cb=20141107001507",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image:
                  "https://cdn.shopify.com/s/files/1/0979/3228/products/UKF_clothing_-_webstore_photography_20_1024x1024.png?v=1511366458",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
            {
              product: {
                image: "http://pngimg.com/uploads/sweater/sweater_PNG11.png",
                brand: "Calvin Klien",
                name: "Skirt slim fit",
                price: "200",
              },
            },
          ],
        },
      ],
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default Reducer;
