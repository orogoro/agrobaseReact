import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { catalogSelectors, catalogOperations } from '../../../redux/catalog';

import CatalogsItem from './catalogsItem/CatalogsItem';
import Filter from './filter/Filter';

import styles from './Catalogs.module.scss';

function Catalogs() {
  const { t } = useTranslation();
  const items = useSelector(catalogSelectors.getCatalog);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const onChangeFilter = value => {
    setFilter(value);
  };

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter?.toLowerCase();
    let filteredList = [...items];

    if (filter !== '') {
      filteredList = filteredList.filter(list =>
        list.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return filteredList;
  }, [filter, items]);

  useEffect(() => {
    dispatch(catalogOperations.fetchCatalog());
  }, [dispatch]);

  return (
    items.length > 0 && (
      <div className={styles.container}>
        <div className={styles.containerFilter}>
          <h1 className={styles.title}>{t('chooseCatalog')}</h1>
          <Filter onChange={onChangeFilter} />
        </div>
        {getVisibleContacts.map(({ id, name, language, slug }) => (
          <CatalogsItem
            key={id}
            name={name}
            id={id}
            language={language}
            slug={slug}
          />
        ))}
      </div>
    )
  );
}

export default Catalogs;
