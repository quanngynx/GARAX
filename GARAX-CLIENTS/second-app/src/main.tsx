import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

// import reportPerformance from "./utils/reportPerformance.ts";

import { Provider } from "react-redux";
import { store } from "./redux/stores/index.tsx";
import App from "./App";
import "./index.css";
import "./i18n";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Please ensure an element with id 'root' exists in your index.html.");
}

createRoot(rootElement).render(
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

// reportPerformance(console.log);
