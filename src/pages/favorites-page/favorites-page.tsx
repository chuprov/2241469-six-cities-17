import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { Offer } from '../../data/types/offer';
import FavoritePageGroup from './favorites-page-group';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/slices/offer-slice/offer-selector';


function GroupByCity(offers: Offer[]): Record<string, Offer[]> {
  return offers.reduce((grouped: Record<string, Offer[]>, offer) => {
    const cityName = offer.city.name;
    if (!grouped[cityName]) {
      grouped[cityName] = [];
    }
    grouped[cityName].push(offer);
    return grouped;
  }, {});
}


function FavoritesPage():JSX.Element{
  const offers = useAppSelector(getFavoriteOffers);
  const favoritesGroups: Record<string, Offer[]> = GroupByCity(offers);

  return (

    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {Object.entries(favoritesGroups).map(
                ([city, offerlist]) => <FavoritePageGroup cityName={city} offerlist={offerlist} key={city} />
              )}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}


export default FavoritesPage;
