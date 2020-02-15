import React from "react";
import PropTypes from 'prop-types';
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  const {data} = props;

  return (
    <MainPage data={data}/>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  }))
};

export default App;
