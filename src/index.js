import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./root/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { productSlice } from "./features/redux/productSlice";
import { userSlice } from "./features/redux/usersSlice";
import { AuthProvider } from "./AuthContext/AuthProvider";
const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(productSlice.endpoints.getProducts.initiate());
store.dispatch(userSlice.endpoints.getUsers.initiate());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
      <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
