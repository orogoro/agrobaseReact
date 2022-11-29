import PropTypes from 'prop-types';

import DiseasesManualItemFotos from './diseasesManualItemFotos/DiseasesManualItemFotos';

import styles from './DiseasesManualItem.module.scss';

function DiseasesManualItem({ images }) {
  return (
    <div className={styles.containerImg}>
      <ul className={styles.listContainer}>
        {images?.map(({ id, thumb }) => (
          <li className={styles.listContainerItem} key={id}>
            <DiseasesManualItemFotos image={thumb} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiseasesManualItem;

DiseasesManualItemFotos.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    })
  ),
};
