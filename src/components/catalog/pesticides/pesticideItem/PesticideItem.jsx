import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { catalogSelectors } from '../../../../redux/catalog';

import styles from './PesticideItem.module.scss';

function PesticideItem({ name, link, manufacturer, category }) {
  const items = useSelector(catalogSelectors.getCategory);

  const getManufacture = items.manufacturer.find(
    item => item.id === manufacturer
  );

  const getCategory = items.category.find(item => item.id === category);

  return (
    <Link to={link} className={styles.link}>
      <div>
        <h2 className={styles.title}>{name}</h2>
        <p>{getManufacture?.name}</p>
      </div>
      <p className={styles.nameCategory}>{getCategory?.name}</p>
    </Link>
  );
}

export default PesticideItem;

PesticideItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  manufacturer: PropTypes.number.isRequired,
  category: PropTypes.number.isRequired,
};
