import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { TRACKING_GTM_ID } from "./trackerKeys/keys.js";

//3 Tags
import TagManager from "react-gtm-module";

//3 Tags
const tagManagerArgs = {
  gtmId: TRACKING_GTM_ID,
};
TagManager.initialize = tagManagerArgs;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
