import PropTypes from 'prop-types';

import WeedsManualItemFotos from './weedsManualItemFotos/WeedsManualItemFotos';

import styles from './WeedsManualItem.module.scss';

function WeedsManualItem({ images }) {
  return (
    <div className={styles.containerImg}>
      <ul className={styles.listContainer}>
        {images?.map(({ id, thumb }) => (
          <li className={styles.listContainerItem} key={id}>
            <WeedsManualItemFotos image={thumb} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeedsManualItem;

WeedsManualItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    })
  ),
};
