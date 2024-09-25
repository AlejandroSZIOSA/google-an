import React from "react";
import ReactGa from "react-ga4";
import { TRACKING_GTM_ID } from "./trackerKeys/keys";

//4- Event Listener
ReactGa.initialize(TRACKING_GTM_ID);

export default function Home() {
  function handleClick() {
    //4 Event Listener :)
    ReactGa.event({
      category: "Button",
      action: "Clicked Submit",
      label: "Submit Button",
    });
  }

  return (
    <>
      <h2>Home</h2>
      <button onClick={handleClick}>Read more</button>
    </>
  );
}
