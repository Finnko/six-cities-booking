import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import Cities from '../../components/Cities/Cities';
import Header from '../../components/Header/Header';
import MainEmpty from '../../components/MainEmpty/MainEmpty';
import MainOffers from '../../components/MainOffers/MainOffers';
import { selectCurrentOffers } from '../../features/offers/selectors';
import { selectActiveCity } from '../../features/ui/uiSlice';


const Main: React.FC = () => {
  const {
    status,
    error,
  } = useSelector((state: RootState) => state.offers);
  const offers = useSelector(selectCurrentOffers);
  const city = useSelector(selectActiveCity);


  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        {status === 'pending' && <h3>Loading...</h3>}

        {error &&
          <div>
            <h1>Something went wrong...</h1>
          </div>
        }

        {status === 'succeeded' &&
          <>
            <Cities activeCity={city}/>

            {offers.length > 0
              ? <MainOffers offers={offers} activeCity={city}/>
              : <MainEmpty activeCity={city}/>
            }
          </>
        }
      </main>
    </div>
  );
};

export default Main;
