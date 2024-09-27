import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { TRACKING_GTM_ID } from "./trackerKeys/keys";

//2 Import ReactGa
import ReactGa from "react-ga4";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";

//2 USING ID FROM GOOGLE ANALYTICS
//Start Tracking
ReactGa.initialize(TRACKING_GTM_ID);

function App() {
  const location = useLocation();
  useEffect(() => {
    //Track and Send the location when location changes
    ReactGa.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}
export default App;
