import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import MainOffers from '../../components/main-offers/MainOffers';
import { fetchOffers } from '../../redux/features/offersSlice';
import { RootState } from '../../redux/rootReducer';


const Main: React.FC = () => {
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

  if (isPending) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {/* <CitiesList cities={cities} currentCity={currentCity} onChangeCity={onChangeCity}/>*/}

        {/* {offers.length > 0*/}
        <MainOffers offers={offers} />
        {/*  : <MainEmpty currentCity={currentCity}/>}*/}
      </main>
    </div>
  );
};

export default Main;
