import "./index.css";

import { SortContextProvider } from "@context";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SortContextProvider>
    <App />
  </SortContextProvider>
);
