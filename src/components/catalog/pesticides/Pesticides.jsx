import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import {
  catalogSelectors,
  catalogOperations,
  catalogActions,
} from '../../../redux/catalog';

import { Loader, DontFound } from '../';
import Filter from './filter/Filter';
import ScrollToTop from './scrollToTop/ScrollToTop';
import PesticideItem from './pesticideItem/PesticideItem';

import styles from './Pesticides.module.scss';

function Pesticides() {
  const { idItem } = useParams();
  const { i18n } = useTranslation();
  const pesticides = useSelector(catalogSelectors.getItemColections);
  const loader = useSelector(catalogSelectors.isLoading);
  const items = useSelector(catalogSelectors.getCatalog);
  // const colections = useSelector(catalogSelectors.getColectionsItems);
  const idCatalog = useSelector(catalogSelectors.getLanguageById);
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [manufacturers, setManufacturers] = useState('');
  // const [cultures, setCultures] = useState('');
  const [activeMaterials, setActiveMaterials] = useState('');

  const onChangeFilter = value => {
    if (value === null) {
      setManufacturers([]);
      // setCultures([]);
      setActiveMaterials([]);
      setCategory([]);
      return;
    }

    switch (value.name) {
      case 'category':
        setCategory(value.value);
        break;

      case 'manufacturers':
        setManufacturers(value.value);
        break;

      // case 'cultures':
      //   setCultures(value.value);
      //   break;

      case 'activeMaterials':
        setActiveMaterials(value.value);
        break;

      default:
        return;
    }
  };

  const getVisibleProdacts = useMemo(() => {
    let filteredList = [...pesticides];

    if (category !== '') {
      filteredList = filteredList.filter(list => list.category === category);
    }

    if (manufacturers !== '') {
      filteredList = filteredList.filter(
        list => list.manufacturer === manufacturers
      );
    }

    // if (cultures !== '') {
    //   filteredList = filteredList.filter(list => {
    //     return list.cultures.find(item => item.id === cultures);
    //   });
    // }

    if (activeMaterials !== '') {
      filteredList = filteredList.filter(list => {
        return list.activeMaterials.find(
          item => item.activeMaterial === activeMaterials
        );
      });
    }

    return filteredList;
  }, [activeMaterials, category, pesticides, manufacturers]);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(catalogOperations.fetchCatalog());
    }

    if (pesticides.length === 0) {
      return;
    }

    if (!idCatalog && items.length !== 0) {
      const catalogDefault = items?.find(item => item?.id === Number(idItem));
      const { id, slug, language } = catalogDefault;
      dispatch(catalogActions.changeLanguage({ id, slug }));
      i18n.changeLanguage(language);
    }
  }, [dispatch, i18n, idCatalog, idItem, items, pesticides]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const policies = items?.find(item => item?.id === Number(idItem));

    if (!policies) {
      setIsFetched(true);
      return;
    }
    dispatch(catalogOperations.fetchProductCatalog(idItem));

    dispatch(catalogOperations.fetchActiveMaterialsRequest());
    dispatch(catalogOperations.fetchCategoryRequest());
    // dispatch(catalogOperations.fetchCulturesRequest());
    dispatch(catalogOperations.fetchManufacturersRequest());
  }, [dispatch, idItem, items]);

  return (
    <div className={styles.containerMain}>
      {pesticides.length === 0 && loader && <Loader />}
      {pesticides.length > 0 && (
        <>
          <div className={styles.container}>
            {!loader &&
              getVisibleProdacts?.map(
                ({ id, name, slug, manufacturer, category }) => (
                  <PesticideItem
                    key={id}
                    id={id}
                    name={name}
                    link={slug}
                    manufacturer={manufacturer}
                    category={category}
                  />
                )
              )}
          </div>
          <div className={styles.containerFilter}>
            <Filter onChangeFilter={onChangeFilter} />
          </div>
          <ScrollToTop />
        </>
      )}

      {!idCatalog && isFetched && <DontFound />}
    </div>
  );
}

export default Pesticides;
