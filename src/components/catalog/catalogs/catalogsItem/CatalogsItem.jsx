import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { catalogActions } from '../../../../redux/catalog';

import styles from './CatalogsItem.module.scss';

function CatalogsItem({ name, id, language, slug }) {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const handleClick = () => {
    dispatch(catalogActions.changeLanguage({ id, slug }));
    i18n.changeLanguage(language);
  };

  return (
    <Link to={'/'} className={styles.link} onClick={handleClick}>
      {name}
    </Link>
  );
}

export default CatalogsItem;

CatalogsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  language: PropTypes.string,
  slug: PropTypes.string.isRequired,
};
