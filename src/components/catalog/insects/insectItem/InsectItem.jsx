import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import noPhoto from '../../../../assets/img/no-pictures.png';

import styles from './InsectItem.module.scss';

function InsectItem({ name, latinName, img, link }) {
  return (
    <Link to={link} className={styles.link}>
      <img
        className={styles.img}
        src={img ? img : noPhoto}
        onError={e => {
          e.target.src = noPhoto;
        }}
        alt={name}
      />
      <div className={styles.containerText}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.text}>{latinName}</p>
      </div>
    </Link>
  );
}

export default InsectItem;

InsectItem.propTypes = {
  name: PropTypes.string.isRequired,
  latinName: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string.isRequired,
};
