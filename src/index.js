import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from './mocks/offers';
import reviews from './mocks/reviews';

ReactDOM.render(
    <App data={offers} reviews={reviews}/>,
    document.querySelector(`#root`)
);
