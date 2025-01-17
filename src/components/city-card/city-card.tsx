import { Offer } from '../../data/types/offer';

type Props = {
  offer: Offer ;
  baseClass: string;
  imageSize: {
    width: number | string;
    height: number | string;
  };
  onHandleChangeActiveCard?: (id: string | null)=>void;
}


function CityCard({offer, baseClass, imageSize, onHandleChangeActiveCard}: Props):JSX.Element{
  return (

    <article className={`${baseClass}__card place-card`}
      onMouseEnter={() => onHandleChangeActiveCard && onHandleChangeActiveCard(offer.id)}
      onMouseLeave={() => onHandleChangeActiveCard && onHandleChangeActiveCard(null)}
    >

      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${baseClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            style={{ ...imageSize }}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title} </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default CityCard;
