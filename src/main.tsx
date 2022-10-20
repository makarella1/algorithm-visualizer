import "./index.css";

import { ItemsContextProvider, SortContextProvider } from "@context";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SortContextProvider>
    <ItemsContextProvider>
      <App />
    </ItemsContextProvider>
  </SortContextProvider>
);
