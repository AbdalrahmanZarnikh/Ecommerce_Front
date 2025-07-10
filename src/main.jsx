import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <Toaster />
      <Router />
    </Provider>
  </StrictMode>
);
