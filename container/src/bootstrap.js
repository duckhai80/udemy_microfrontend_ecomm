import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";
// import "cart/CartIndex";
// import "products/ProductsIndex";

console.log("Container!");

mountProducts(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
