import CityCard from '../../components/city-card/city-card';
import { PathRoutes } from '../../data/routes';
import { Link } from 'react-router-dom';
import { Offer } from '../../data/types/offer';

type GroupProps = {
    cityName: string;
    offerlist: Offer[];
  }

function FavoritePageGroup({cityName, offerlist}:GroupProps): JSX.Element{
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={PathRoutes.MAIN}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offerlist.map(
          (offerItem)=>
            (
              <CityCard
                offer={offerItem}
                key={offerItem.id}
                baseClass={'cities'}
                imageSize={{
                  width: '260',
                  height: '200'
                }}
              />)
        )};
      </div>
    </li>
  );
}

export default FavoritePageGroup;