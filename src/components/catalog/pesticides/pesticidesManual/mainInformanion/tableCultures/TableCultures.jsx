// import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { catalogSelectors } from '../../../../../../redux/catalog';

import TableCulturesItem from './tableCulturesItem/TableCulturesItem';
// import Filter from './filter/Filter';

import styles from './TableCultures.module.scss';

function TableCultures({ data }) {
  const { t } = useTranslation();
  // const [filter, setFilter] = useState('');
  const category = useSelector(catalogSelectors.getCategory);

  // const onChangeFilter = value => {
  //   setFilter(value);
  // };

  // const getVisibleEffective = useMemo(() => {
  //   const normalizedFilter = filter?.toLowerCase();
  //   let filteredList = [...data];

  //   // const nameCulture = filteredList.filter(it => {
  //   //   return category?.cultures.find(item => {
  //   //   return  {...it,
  //   //   id: item.id === it.culture}
  //   //   });
  //   // });
  //   // console.log(nameCulture);

  //   // if (filter !== '') {
  //   //    const filterName = nameCulture.filter(list =>
  //   //      list.toLowerCase().includes(normalizedFilter)
  //   //   );

  //   if (filter !== '') {
  //     filteredList = filteredList.filter(list =>
  //       list.culture.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }

  //   return filteredList;
  // }, [filter, data]);

  return (
    <div className={styles.container}>
      <div className={styles.containerFilter}>
        <h2 className={styles.titlePesticides}>{t('culturesLabel')}</h2>
        {/* <Filter onChange={onChangeFilter} value={filter} /> */}
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>{t('cropsLabel')}</th>
            <th className={styles.th}>{t('BBCHLabel')}</th>
            <th className={styles.th}>{t('registeredNormLabel')}</th>
            <th className={styles.th}>{t('intervalLabel')}</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            ({
              id,
              preharvestInterval,
              rateMax,
              rateMin,
              bbchMax,
              bbchMin,
              culture,
            }) => (
              <TableCulturesItem
                key={id}
                interval={preharvestInterval}
                rateMax={rateMax}
                rateMin={rateMin}
                bbchMax={bbchMax}
                bbchMin={bbchMin}
                cultureID={culture}
                category={category?.cultures}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableCultures;

TableCultures.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      bbchMax: PropTypes.number,
      bbchMin: PropTypes.number,
      culture: PropTypes.number,
      id: PropTypes.number.isRequired,
      preharvestInterval: PropTypes.number,
      rateMax: PropTypes.number,
      rateMin: PropTypes.number,
      rateUnit: PropTypes.string,
    })
  ),
};
