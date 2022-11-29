import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import down from '../../../../../assets/img/down.png';
import up from '../../../../../assets/img/up.png';

import ProductsColectionsItem from './productsColectionsItem/ProductsColectionsItem';
import TableCultures from './tableCultures/TableCultures';
import ActiveMaterials from './activeMaterials/ActiveMaterials';

import styles from './MainInformanion.module.scss';

function MainInformanion({
  name,
  registrationNumber,
  description,
  manufacturer,
  category,
  date,
  itemsCategory,
  cultures,
  activeMaterials,
  catalogItems,
  catalogArrayItems,
  idItem,
}) {
  const { t } = useTranslation();
  const [currentLink, setCurrentLink] = useState('');
  const [active, setActive] = useState(false);
  const getManufacture = itemsCategory.manufacturer.find(
    item => item.id === manufacturer
  );
  const getCategory = itemsCategory.category.find(item => item.id === category);

  const findItemsCatalogDisease = catalogArrayItems.filter(item => {
    return catalogItems.find(it => it.disease === item.id);
  });
  const findItemsCatalogWeed = catalogArrayItems.filter(item => {
    return catalogItems.find(it => it.weed === item.id);
  });
  const findItemsCatalogInsects = catalogArrayItems.filter(item => {
    return catalogItems.find(it => it.pest === item.id);
  });

  const newMass = [
    ...findItemsCatalogDisease,
    ...findItemsCatalogWeed,
    ...findItemsCatalogInsects,
  ];

  const currentDate = new Date();
  const parseDate = Date.parse(date);
  const Difference_In_Time = parseDate - currentDate.getTime();

  useEffect(() => {
    if (findItemsCatalogWeed?.length > 0) {
      setCurrentLink('Weeds');
    } else if (findItemsCatalogDisease?.length > 0) {
      setCurrentLink('Diseases');
    } else if (findItemsCatalogInsects?.length > 0) {
      setCurrentLink('Insects');
    }
  }, [findItemsCatalogDisease, findItemsCatalogInsects, findItemsCatalogWeed]);

  function createMarkup() {
    return { __html: description };
  }

  const handleClick = () => {
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };

  return (
    <div className={styles.containerText}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.latinName}>
          {Difference_In_Time >= 0
            ? `registered until: ${date}`
            : 'registration expired'}
        </p>

        <div className={styles.containerCategory}>
          <p className={styles.latinName}>{getManufacture?.name}</p>
          <span className={styles.distance}>-</span>
          <p className={styles.latinName}>{getCategory?.name}</p>
        </div>

        {registrationNumber && (
          <p className={styles.latinName}>{registrationNumber}</p>
        )}
      </div>
      {description && (
        <div className={`${styles.containerDescriptions}`}>
          <div
            className={`${styles.description} ${active ? styles.active : ''}`}
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
          <div
            className={`${styles.buttonHidden} ${
              active ? styles.activeBTN : ''
            } `}
            onClick={handleClick}
          >
            {active ? (
              <img className={styles.down} src={up} alt="up" />
            ) : (
              <img className={styles.down} src={down} alt="down" />
            )}
          </div>
        </div>
      )}

      {cultures?.length > 0 && <TableCultures data={cultures} />}
      {activeMaterials?.length > 0 && (
        <ActiveMaterials data={activeMaterials} />
      )}
      {catalogItems?.length !== 0 && (
        <div className={styles.containterPesticides}>
          <h2 className={styles.titlePesticides}>{t('effectiveLabel')}</h2>
          <div className={styles.containterProducts}>
            {catalogItems?.map(item => (
              <ProductsColectionsItem
                key={item.id}
                id={item.disease || item.weed || item.pest}
                rating={item?.rating}
                array={newMass}
                currentLink={currentLink}
                idItem={idItem}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainInformanion;

MainInformanion.propTypes = {
  name: PropTypes.string.isRequired,
  registrationNumber: PropTypes.string,
  description: PropTypes.string,
  manufacturer: PropTypes.number,
  category: PropTypes.number,
  date: PropTypes.string,
  itemsCategory: PropTypes.shape({
    activeMaterial: PropTypes.array,
    category: PropTypes.array,
    cultures: PropTypes.array,
    manufacturer: PropTypes.array,
  }),
  cultures: PropTypes.arrayOf(
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
  activeMaterials: PropTypes.arrayOf(
    PropTypes.shape({
      activeMaterial: PropTypes.number,
      amount: PropTypes.number,
      id: PropTypes.number.isRequired,
      amountUnit: PropTypes.string,
    })
  ),
  catalogItems: PropTypes.arrayOf(
    PropTypes.shape({
      disease: PropTypes.number,
      product: PropTypes.number,
      id: PropTypes.number.isRequired,
      rating: PropTypes.number,
    })
  ),
  catalogArrayItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
          thumb: PropTypes.string.isRequired,
        })
      ),
      latinName: PropTypes.string,
      description: PropTypes.string.isRequired,
      latinNameSynonyms: PropTypes.string,
      name: PropTypes.string.isRequired,
      nameSynonyms: PropTypes.string,
      slug: PropTypes.string.isRequired,
    })
  ),
  idItem: PropTypes.string.isRequired,
};
