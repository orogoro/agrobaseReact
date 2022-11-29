import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import {
  catalogSelectors,
  catalogOperations,
  catalogActions,
} from '../../../redux/catalog';

import WeedsItem from './weedsItem/WeedsItem';
import { Loader, DontFound } from '../';

import styles from './Weeds.module.scss';

function Weeds() {
  const { idItem } = useParams();
  const { i18n } = useTranslation();
  const items = useSelector(catalogSelectors.getCatalog);
  const colections = useSelector(catalogSelectors.getColectionsItems);
  const idCatalog = useSelector(catalogSelectors.getLanguageById);
  const loader = useSelector(catalogSelectors.isLoading);
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(catalogOperations.fetchCatalog());
    }

    if (colections.length === 0) {
      return;
    }

    if (!idCatalog && items.length !== 0) {
      const catalogDefault = items?.find(item => item?.id === Number(idItem));
      const { id, slug, language } = catalogDefault;
      dispatch(catalogActions.changeLanguage({ id, slug }));
      i18n.changeLanguage(language);
    }
  }, [colections, dispatch, i18n, idCatalog, idItem, items]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const policies = items?.find(item => item?.id === Number(idItem));

    if (!policies) {
      setIsFetched(true);
      return;
    }

    dispatch(catalogOperations.fetchWeedCatalog(idItem));
  }, [dispatch, idItem, items]);

  return (
    <div className={styles.container}>
      {colections.length === 0 && loader && <Loader />}
      {colections.length > 0 && (
        <>
          {!loader &&
            colections?.map(({ id, name, latinName, images, slug }) => (
              <WeedsItem
                key={id}
                name={name}
                latinName={latinName}
                img={images && images[0]?.thumb}
                link={slug}
              />
            ))}
        </>
      )}
      {!idCatalog && isFetched && <DontFound />}
    </div>
  );
}

export default Weeds;
