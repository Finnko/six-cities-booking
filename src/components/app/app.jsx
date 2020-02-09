import React from "react";
import MainScreen from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentalOffersCount} = props;

  return (
    <MainScreen rentalOffersCount={rentalOffersCount}/>
  );
};

export default App;
