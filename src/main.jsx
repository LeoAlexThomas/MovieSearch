import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MovieFilterProvider } from "./Context/movieContext.jsx";

createRoot(document.getElementById("root")).render(
  <MovieFilterProvider>
    <App />
  </MovieFilterProvider>
);
