import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import noPhoto from '../../../../assets/img/no-pictures.png';

import styles from './DiseasesItem.module.scss';

function DiseasesItem({ name, latinName, img, link }) {
  return (
    <Link to={`${link}`} className={styles.link}>
      <img
        className={styles.img}
        onError={e => {
          e.target.src = noPhoto;
        }}
        src={img ? img : noPhoto}
        alt={name}
      />
      <div className={styles.containerText}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.text}>{latinName}</p>
      </div>
    </Link>
  );
}

export default DiseasesItem;

DiseasesItem.propTypes = {
  name: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string.isRequired,
};
