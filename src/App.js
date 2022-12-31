import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import products from "./assets/products";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";

function App() {
  const [savedCart] = useState(localStorage.getItem("savedCart"));
  const [cartItems, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [sidebar, setSidebar] = useState(false);
  const [cartTotal, setTotal] = useState(0);
  const [savedProduct] = useState(localStorage.getItem("savedProduct"));
  const [productSelection, setProductSelection] = useState(
    savedProduct ? JSON.parse(savedProduct) : null
  );

  function showSidebar() {
    setSidebar(!sidebar);
  }

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("stop-scroll");
    }
    if (!sidebar) {
      document.body.classList.remove("stop-scroll");
    }
  }, [sidebar]);

  useEffect(() => {
    localStorage.setItem("savedCart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("savedProduct", JSON.stringify(productSelection));
  }, [productSelection]);

  useEffect(() => {
    function closeCart(e) {
      if (
        e.path[0].className !== "menu-btn" &&
        e.path[0].className !== "menu-dots" &&
        e.path[0].className !== "checkout-btn" &&
        e.path[0].className !== "atc-btn click" &&
        e.path[0].className !== "qty-btn" &&
        e.path[0].className !== "cart-container cart-open" &&
        e.path[0].className !== "cart-prod-info" &&
        e.path[0].className !== "cart-item-box" &&
        e.path[0].className !== "cart-item-img" &&
        e.path[0].className !== "cart-footer" &&
        e.path[0].className !== "cart-checkout" &&
        e.path[0].className !== "incart"
      ) {
        setSidebar(false);
      }
    }
    document.body.addEventListener("click", closeCart);
    return () => document.body.removeEventListener("click", closeCart);
  }, []);

  useEffect(() => calculateCart());

  function calculateCart() {
    setTotal(
      cartItems.reduce((acc, prod) => {
        return acc + prod.price * prod.qty;
      }, 0)
    );
  }

  function addToCart(e) {
    e.preventDefault();
    //get clicked on product from products.js
    let selectedProduct = products.find(
      (product) => product.sku === e.target.id
    );
    // check if product already in cart state
    let productInCart = cartItems.find(
      (product) => product.sku === e.target.id
    );
    // if in cart increase qty of product
    if (productInCart) {
      productInCart.qty++;
      setCart([...cartItems]);
      calculateCart();
    }
    // if not in cart, add it to cart with 1 qty
    else {
      selectedProduct.qty = 1;
      setCart([...cartItems, selectedProduct]);
      calculateCart();
    }
    if (sidebar !== true) {
      showSidebar();
    }
  }

  function removeFromCart(e) {
    let selectedProduct = cartItems.find(
      (product) => product.sku === e.target.id
    );
    let productInCart = cartItems.find(
      (product) => product.sku === e.target.id
    );
    if (productInCart.qty > 1) {
      productInCart.qty--;
      setCart([...cartItems]);
      calculateCart();
    } else {
      cartItems.splice(cartItems.indexOf(selectedProduct), 1);
      setCart([...cartItems]);
      calculateCart();
    }
  }

  function selectProduct(e) {
    let selection = products.find((product) => product.sku === e.target.id);
    setProductSelection(selection);
  }

  return (
    <BrowserRouter>
      <div className={sidebar ? "app-container stop-scroll" : "app-container"}>
        <Header showSidebar={showSidebar} sidebar={sidebar} />
        <Cart
          cartItems={cartItems}
          showSidebar={showSidebar}
          sidebar={sidebar}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartTotal={cartTotal}
          calculateCart={calculateCart}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                sidebar={sidebar}
                addToCart={addToCart}
                selectProduct={selectProduct}
              />
            }
          />
          <Route
            path="product"
            element={
              <ProductPage
                sidebar={sidebar}
                addToCart={addToCart}
                productSelection={productSelection}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
