import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/index.css";
import { App } from "./App";
import { initApp } from "./providers/ init/initApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();
initApp();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <App />
        </Provider>
      </SnackbarProvider>
    </QueryClientProvider>
  </StrictMode>
);
