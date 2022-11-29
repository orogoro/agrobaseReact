import PropTypes from 'prop-types';

import InsectManualItemFotos from './insectManualItemFotos/InsectManualItemFotos';

import styles from './InsectManualItem.module.scss';

function InsectManualItem({ images }) {
  return (
    <div className={styles.containerImg}>
      <ul className={styles.listContainer}>
        {images?.map(({ id, thumb }) => (
          <li className={styles.listContainerItem} key={id}>
            <InsectManualItemFotos image={thumb} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InsectManualItem;

InsectManualItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    })
  ),
};
