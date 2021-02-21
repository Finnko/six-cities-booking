import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import Header from '../../components/Header/Header';
import MainOffers from '../../components/MainOffers/MainOffers';
import { fetchOffers } from '../../features/offers/offersSlice';
import { selectOffers } from '../../features/offers/selectors';


const Main: React.FC = () => {
  const dispatch = useDispatch();

  const {
    isPending,
    error: offersError,
  } = useSelector((state: RootState) => state.offers);
  // const offers = useSelector(selectOffers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        {isPending && <h3>Loading...</h3>}

        {offersError &&
        <div>
          <h1>Something went wrong...</h1>
          <div>{offersError.toString()}</div>
        </div>
        }

        {/* {!isPending && !offersError &&*/}
        {/* <>*/}
        {/*  /!* <CitiesList cities={cities} currentCity={currentCity} onChangeCity={onChangeCity}/>*!/*/}

        {/*  /!* {offers.length > 0*!/*/}
        {/*  <MainOffers offers={offers} />*/}
        {/*  /!*  : <MainEmpty currentCity={currentCity}/>}*!/*/}
        {/* </>*/}
        {/* }*/}


      </main>
    </div>
  );
};

export default Main;
