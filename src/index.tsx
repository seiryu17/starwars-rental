import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import CombineProviders from "./store/CombineProviders";
import { CartProvider } from "./store/CartContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-indiana-drag-scroll/dist/style.css";

const providers = [<CartProvider />];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CombineProviders providers={providers}>
      <App />
    </CombineProviders>
  </React.StrictMode>
);
