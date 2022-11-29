import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getRatingStars } from '../../../../../../helpers/UIhelper';

import styles from './ProductsColectionsItem.module.scss';

function ProductsColectionsItem({ product, rating, list, idItem }) {
  const pesticideItem = list?.find(item => item.id === product);

  return (
    <Link
      className={styles.link}
      to={`/Pesticides/${idItem}/${pesticideItem?.slug}`}
    >
      <p className={styles.name}>{pesticideItem?.name}</p>
      <p className={styles.reting}>
        <span className={styles.span}>intensity:</span>
        {getRatingStars(rating).map((item, idx) => (
          <img className={styles.icon} key={idx} src={item} alt={rating} />
        ))}
      </p>
    </Link>
  );
}

export default ProductsColectionsItem;

ProductsColectionsItem.propTypes = {
  rating: PropTypes.number.isRequired,
  product: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      activeMaterials: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          amount: PropTypes.number.isRequired,
          activeMaterial: PropTypes.number.isRequired,
          amountUnit: PropTypes.string,
        })
      ),
      category: PropTypes.number.isRequired,
      cultures: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          bbchMax: PropTypes.number,
          bbchMin: PropTypes.number,
          culture: PropTypes.number,
          preharvestInterval: PropTypes.number,
          rateMax: PropTypes.number,
          rateMin: PropTypes.number,
          rateUnit: PropTypes.string,
        })
      ),
      description: PropTypes.string.isRequired,
      label: PropTypes.string,
      msds: PropTypes.string,
      registrationNumber: PropTypes.string,
      registrationUntil: PropTypes.string,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      manufacturer: PropTypes.number.isRequired,
    })
  ),
  idItem: PropTypes.number.isRequired,
};
