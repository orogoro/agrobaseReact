import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import { fatchIPUsers } from '../../../API/APIcatalog';
import {
  catalogSelectors,
  catalogOperations,
  catalogActions,
} from '../../../redux/catalog';

import SelectSection from './selectSection/SelectSection';

import styles from './Home.module.scss';

function Home() {
  const { t, i18n } = useTranslation();
  const lang = useSelector(catalogSelectors.getLanguage);
  const id = useSelector(catalogSelectors.getLanguageById);
  const items = useSelector(catalogSelectors.getCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id || lang !== 'united-kingdom') {
      return;
    }
    // i18n.changeLanguage('en');

    if (items.length === 0) {
      dispatch(catalogOperations.fetchCatalog());
    }

    if (!id && items.length !== 0) {
      const catalogDefault = items?.find(
        item => item.slug === 'united-kingdom'
      );
      const { id, slug } = catalogDefault;
      dispatch(catalogActions.changeLanguage({ id, slug }));
      // return;
    }

    const currentIp = async () => {
      const response = await fatchIPUsers();
      // const response = undefined; //false await fatchIPUsers();

      // if (items.length !== 0) {
      //   const catalogDefault = items?.find(
      //     item => item.slug === 'united-kingdom'
      //   );

      //   const { id, slug } = catalogDefault;
      //   dispatch(catalogActions.changeLanguage({ id, slug }));
      // }

      if (!response) {
        return;
      }

      const currentLeng = items.find(
        item => item.slug === response.data.country.toLowerCase()
      );

      if (!currentLeng) {
        return;
      }

      const { id, slug } = currentLeng;
      dispatch(catalogActions.changeLanguage({ id, slug }));
      const lengCurrent = response.data.countryCode.toLowerCase();
      i18n.changeLanguage(lengCurrent);
    };
    currentIp();
  }, [dispatch, i18n, id, items, lang]);

  return (
    <div className={styles.container}>
      <div className={`${styles.selectSection} `}>
        <h2 className={styles.title}>
          {t('currentCatalog')}: <span className={styles.span}>{lang}</span>
        </h2>

        <SelectSection idItem={id} />
      </div>
    </div>
  );
}

export default Home;
