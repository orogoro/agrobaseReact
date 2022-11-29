import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getRatingStars } from '../../../../../../helpers/UIhelper';
import dontFound from '../../../../../../assets/img/no-pictures.png';

import styles from './ProductsColectionsItem.module.scss';

function ProductsColectionsItem({ rating, id, array, currentLink, idItem }) {
  const getCurrentItem = array.find(item => item.id === id);

  return (
    <Link
      className={styles.link}
      to={`/${currentLink}/${idItem}/${getCurrentItem?.slug}`}
    >
      <img
        className={styles.img}
        src={
          getCurrentItem?.images[0].thumb
            ? getCurrentItem?.images[0].thumb
            : dontFound
        }
        onError={e => {
          e.target.src = dontFound;
        }}
        alt={getCurrentItem?.latinName}
      />
      <div className={styles.container}>
        <div className={styles.name}>{getCurrentItem?.name}</div>
        <div className={styles.reting}>
          <span className={styles.span}>{getCurrentItem?.latinName}</span>
          <div className={styles.starContainer}>
            {rating !== 0 &&
              getRatingStars(rating).map((item, idx) => (
                <img
                  className={styles.icon}
                  key={idx}
                  src={item}
                  alt={rating}
                />
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductsColectionsItem;

ProductsColectionsItem.propTypes = {
  idItem: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired,
        })
      ),
      latinName: PropTypes.string,
      description: PropTypes.string.isRequired,
      latinNameSynonyms: PropTypes.string,
      name: PropTypes.string.isRequired,
      nameSynonyms: PropTypes.string,
      slug: PropTypes.string.isRequired,
    })
  ),
};
