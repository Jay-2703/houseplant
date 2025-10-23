import React from 'react';
import { StoreProvider } from './contexts/StoreContext'; // <-- Change 'context' to 'contexts'
import LandingPage from './pages/LandingPage';
import ProductListingPage from "./Pages/ProductListingPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import "./assets/styles.css";

export default function App() {
  const [page, setPage] = React.useState("landing");

  React.useEffect(() => {
    const handleHashChange = () => setPage(window.location.hash.slice(1) || "landing");
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <StoreProvider>
      {page === "landing" && <LandingPage />}
      {page === "products" && <ProductListingPage />}
      {page === "cart" && <ShoppingCartPage />}
    </StoreProvider>
  );
}
