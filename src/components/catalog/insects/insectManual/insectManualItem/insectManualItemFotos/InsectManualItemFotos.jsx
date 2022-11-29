import PropTypes from 'prop-types';

import dontFound from '../../../../../../assets/img/no-pictures.png';

import styles from './InsectManualItemFotos.module.scss';

function InsectManualItemFotos({ image }) {
  return (
    <img
      className={styles.image}
      onError={e => {
        e.target.src = dontFound;
      }}
      src={image}
      alt="foto"
    />
  );
}

export default InsectManualItemFotos;

InsectManualItemFotos.propTypes = {
  image: PropTypes.string.isRequired,
};
