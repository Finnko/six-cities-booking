import React from "react";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  const {data} = props;

  return (
    <MainPage data={data}/>
  );
};

export default App;
