import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ManualFilter from './manualFilter/ManualFilter';
import ProductsColectionsItem from './productsColectionsItem/ProductsColectionsItem';
import DiseasesManualItem from '../diseasesManualItem/DiseasesManualItem';

import styles from './MainInformanion.module.scss';

function MainInformanion({
  name,
  latinName,
  description,
  products,
  productsList,
  images,
  idItem,
}) {
  const { t } = useTranslation();
  const [valueRating, setValueRating] = useState(null);

  const allRating = products?.map(item => item.rating);
  const uniqueRating = allRating?.filter(
    (contact, index, array) => array.indexOf(contact) === index
  );
  const onChangeRating = value => {
    if (value === null) {
      setValueRating(null);
      return;
    }
    setValueRating(value.value);
  };

  const getVisiblePesticidesColections = useMemo(() => {
    if (!products) {
      return;
    }

    let filterList = [...products];

    if (valueRating !== null) {
      filterList = filterList?.filter(item => item.rating === valueRating);
    }

    return filterList;
  }, [products, valueRating]);

  function createMarkup() {
    return { __html: description };
  }

  return (
    <div className={styles.container}>
      <div className={styles.containterPesticidesText}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.latinName}>{latinName}</p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
      <DiseasesManualItem images={images} />
      {allRating?.length > 0 && (
        <div className={styles.containterPesticides}>
          <h2 className={styles.titlePesticides}>{t('pesticidesLabel')}</h2>
          <ManualFilter rating={uniqueRating} onChange={onChangeRating} />
          <div className={styles.containterProducts}>
            {getVisiblePesticidesColections?.map(({ id, product, rating }) => (
              <ProductsColectionsItem
                key={id}
                product={product}
                list={productsList}
                rating={rating}
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
  latinName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      disease: PropTypes.number,
      product: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      activeMaterials: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          amount: PropTypes.number.isRequired,
          activeMaterial: PropTypes.number.isRequired,
          amountUnit: PropTypes.string,
        })
      ),
      category: PropTypes.number.isRequired,
      cultures: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          bbchMax: PropTypes.number,
          bbchMin: PropTypes.number,
          culture: PropTypes.number,
          preharvestInterval: PropTypes.number,
          rateMax: PropTypes.number,
          rateMin: PropTypes.number,
          rateUnit: PropTypes.string,
        })
      ),
      description: PropTypes.string.isRequired,
      label: PropTypes.string,
      msds: PropTypes.string,
      registrationNumber: PropTypes.string,
      registrationUntil: PropTypes.string,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      manufacturer: PropTypes.number.isRequired,
    })
  ),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    })
  ),
  idItem: PropTypes.number.isRequired,
};
