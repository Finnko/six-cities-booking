import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const mockData = [
  {title: `Beautiful & luxurious apartment at great location`},
  {title: `Wood and stone place`},
  {title: `Canal View Prinsengracht`},
  {title: `Nice, cozy, warm big bed apartment`},
];


ReactDOM.render(
    <App data={mockData}/>,
    document.querySelector(`#root`)
);
