import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';

import { store } from './redux/stores';

import App from "./App";
import "./index.css";
import "./i18n";
import { ConfigProvider } from "antd";

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
          <Provider store={store}>
            <ConfigProvider
              theme={{
                components: {
                  Carousel: {
                    /* here is your component tokens */
                    // arrows offset to Carousel edge
                    arrowOffset: 10,
                    arrowSize: 24,
                  },
                },
                token: {
                  /* here is your global tokens */
                },
              }}
            >
              <App />
            </ConfigProvider>
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// reportPerformance(console.log);
