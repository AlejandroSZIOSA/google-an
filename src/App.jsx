import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import { TRACKING_G_ID } from "./trackerKeys/keys";

//2 Import ReactGa
import ReactGa from "react-ga4";

//2 USING ID FROM GOOGLE ANALYTICS
//Start Tracking
ReactGa.initialize(TRACKING_G_ID);

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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
