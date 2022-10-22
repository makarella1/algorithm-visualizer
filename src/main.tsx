import "./index.css";

import { SortContextProvider } from "@context";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <SortContextProvider>
      <App />
    </SortContextProvider>
  </Provider>
);
