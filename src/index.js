import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from "./components/app/app.tsx";

ReactDOM.render(
    <App name="76967896987"/>,
    document.querySelector(`#root`)
);
