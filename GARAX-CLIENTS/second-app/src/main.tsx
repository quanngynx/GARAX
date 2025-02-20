import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import reportPerformance from "./utils/reportPerformance.ts";

import App from "./App";
import "./index.css";
import "./i18n";

const client = new QueryClient();
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Please ensure an element with id 'root' exists in your index.html.");
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// reportPerformance(console.log);
