import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import logo from '../../../../assets/bootsplash_logo@2x.png';
import menuHome from '../../../../assets/img/menuHome.png';
import catalogMobile from '../../../../assets/img/catalogMobile.png';
import email from '../../../../assets/img/email.png';
import corseMobile from '../../../../assets/img/corseMobile.png';

import styles from './MobileModal.module.scss';

function MobileModal({ active, setActive }) {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.container} ${active ? styles.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.containerLogo}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p className={styles.text}>Agronomist</p>
      </div>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
          onClick={() => setActive(false)}
        >
          <img className={styles.menuImg} src={menuHome} alt="menuHome" />
          {t('menuMobileBtn')}
        </NavLink>
        <NavLink
          to="Catalogs"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
          onClick={() => setActive(false)}
        >
          <img
            className={styles.menuImg}
            src={catalogMobile}
            alt="catalogMobile"
          />
          {t('catalogsLabel')}
        </NavLink>
        <a className={styles.link} href="mailto:support_email" target="blank">
          <img className={styles.menuImg} src={email} alt="catalogMobile" />
          {t('contactLabel')}
        </a>

        <button className={styles.button} onClick={() => setActive(false)}>
          <img className={styles.imgB} src={corseMobile} alt="corseMobile" />
        </button>
      </div>
    </div>
  );
}

export default MobileModal;

MobileModal.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
