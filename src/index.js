import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreContextProvider } from "./Cstore/store-context";
import { Provider } from "react-redux";
import store from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <StoreContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </StoreContextProvider> */}
  </BrowserRouter>
);
