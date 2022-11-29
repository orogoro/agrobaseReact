import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SelectItem.module.scss';

function SelectItem({ path, img, name }) {
  return (
    <Link to={path} className={styles.item}>
      <img className={styles.img} src={img} alt={img} />
      <h2 className={styles.title}>{name}</h2>
    </Link>
  );
}

export default SelectItem;

SelectItem.propTypes = {
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
