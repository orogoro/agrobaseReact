import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import logo from '../../../assets/bootsplash_logo@2x.png';
// import email from '../../../assets/img/email.png';
import {
  catalogSelectors,
  // catalogOperations,
  // catalogActions,
} from '../../../redux/catalog';

import mobileBurger from '../../../assets/img/mobileBurger.png';
import MobileModal from './mobileModal/MobileModal';

import styles from './Navigation.module.scss';

function Navigation() {
  // const lang = useSelector(catalogSelectors.getLanguage);
  const idItem = useSelector(catalogSelectors.getLanguageById);
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <NavLink
            to="/"
            className={styles.logoLink}
            // className={({ isActive }) =>
            //   [styles.linkHome, isActive ? styles.activeHome : null]
            //     .filter(Boolean)
            //     .join(' ')
            // }
          >
            <img className={styles.logo} src={logo} alt="logo" />
          </NavLink>

          <NavLink
            to="Catalogs"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            {t('catalogsLabel')}
          </NavLink>

          <NavLink
            to={`Pesticides/${idItem}`}
            className={({ isActive }) =>
              [
                styles.link,
                isActive ? styles.active : null,
                // !lang ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            {t('dashboardProducts')}
          </NavLink>

          <NavLink
            to={`Insects/${idItem}`}
            className={({ isActive }) =>
              [
                styles.link,
                isActive ? styles.active : null,
                // !lang ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            {t('dashboardInsects')}
          </NavLink>

          <NavLink
            to={`Weeds/${idItem}`}
            className={({ isActive }) =>
              [
                styles.link,
                isActive ? styles.active : null,
                // !lang ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            {t('dashboardWeeds')}
          </NavLink>

          <NavLink
            to={`Diseases/${idItem}`}
            className={({ isActive }) =>
              [
                styles.link,
                isActive ? styles.active : null,
                // !lang ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            {t('dashboardDiseases')}
          </NavLink>
        </div>
        <div className={styles.container}>
          <p className={styles.contact}>{t('contactLabel')}</p>
          <a className={styles.link} href="mailto:support_email" target="blank">
            <div className={styles.img}></div>
          </a>
        </div>
        <div className={styles.burger}>
          <button
            className={styles.button}
            onClick={() => setModalActive(true)}
          >
            <img
              className={styles.imgB}
              src={mobileBurger}
              alt="mobileBurger"
            />
          </button>
        </div>
      </nav>
      <MobileModal active={modalActive} setActive={setModalActive} />
    </header>
  );
}

export default Navigation;
