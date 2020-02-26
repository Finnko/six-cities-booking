import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from './mocks/offers';

ReactDOM.render(
    <App data={offers}/>,
    document.querySelector(`#root`)
);
