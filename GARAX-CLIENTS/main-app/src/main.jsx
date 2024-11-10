import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import reportPerformance from "./utils/reportPerformance.js";

import { Provider } from "react-redux";
import { store } from "./redux/stores/index.jsx";
import App from "./App";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

reportPerformance(console.log);
