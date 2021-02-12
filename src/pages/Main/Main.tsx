import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {fetchOffers} from '../../redux/features/offersSlice';
import { RootState} from '../../redux/rootReducer';


const Main = () => {
  const dispatch = useDispatch();

  const {
    offers,
    isPending,
    error: offersError,
  } = useSelector((state: RootState) => state.offers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (offersError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{offersError.toString()}</div>
      </div>
    );
  }

  const renderedList = isPending ? (
    <h3>Loading...</h3>
  ) : (
    offers.map((offer, i) => <h3 key={i}>{offer.title}</h3>)
  );

  return (
    <div className="page page--gray page--main">
      {/* <Header/>*/}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {renderedList}
        {/* <CitiesList cities={cities} currentCity={currentCity} onChangeCity={onChangeCity}/>*/}
        {/* {currentOffers.length > 0*/}
        {/*  ? <MainOffers currentCity={currentCity} currentOffers={currentOffers}/>*/}
        {/*  : <MainEmpty currentCity={currentCity}/>}*/}
      </main>
    </div>
  );
};

export default Main;
