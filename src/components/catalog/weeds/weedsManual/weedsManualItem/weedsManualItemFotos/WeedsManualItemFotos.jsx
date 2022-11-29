import PropTypes from 'prop-types';

import noPhoto from '../../../../../../assets/img/no-pictures.png';

import styles from './WeedsManualItemFotos.module.scss';

function WeedsManualItemFotos({ image }) {
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

export default WeedsManualItemFotos;

WeedsManualItemFotos.propTypes = {
  image: PropTypes.string.isRequired,
};
