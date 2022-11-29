import PropTypes from 'prop-types';

import noPhoto from '../../../../../../assets/img/no-pictures.png';

import styles from './DiseasesManualItemFotos.module.scss';

function DiseasesManualItemFotos({ image }) {
  return (
    <img
      className={styles.image}
      onError={e => {
        e.target.src = noPhoto;
      }}
      src={image}
      alt="foto"
    />
  );
}

export default DiseasesManualItemFotos;

DiseasesManualItemFotos.propTypes = {
  image: PropTypes.string.isRequired,
};
