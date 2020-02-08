import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTAL_OFFERS_COUNT: 310
};


ReactDOM.render(
    <App rentalOffersCount={Settings.RENTAL_OFFERS_COUNT}/>,
    document.querySelector(`#root`)
);
