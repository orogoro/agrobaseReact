import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  catalogSelectors,
  catalogOperations,
  catalogActions,
} from '../../../../redux/catalog';
import MainInformanion from './mainInformanion/MainInformanion';
import { Loader, DontFound } from '../../';

import styles from './InsectManual.module.scss';

function InsectManual() {
  const { itemName, idItem } = useParams();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const products = useSelector(catalogSelectors.getItem);
  const data = useSelector(catalogSelectors.getColectionsItems);
  const colections = useSelector(catalogSelectors.getItemColections);
  const loader = useSelector(catalogSelectors.isLoading);
  const id = useSelector(catalogSelectors.getLanguageById);
  const items = useSelector(catalogSelectors.getCatalog);
  const [isFetched, setIsFetched] = useState(false);
  const [DiseasesCatalogItem, setDiseasesCatalogItem] = useState(null);

  const product = products?.filter(it => it.pest === DiseasesCatalogItem?.id);
  const productsList = colections?.filter(item => {
    return product?.find(it => it.product === item.id);
  });
  // console.log(products);
  useEffect(() => {
    if (items.length === 0) {
      dispatch(catalogOperations.fetchCatalog());
    }

    if (data.length === 0) {
      return;
    }

    if (!id && items.length !== 0) {
      const catalogDefault = items?.find(item => item?.id === Number(idItem));
      const { id, slug, language } = catalogDefault;
      dispatch(catalogActions.changeLanguage({ id, slug }));
      i18n.changeLanguage(language);
    }
  }, [dispatch, i18n, idItem, items, id, data]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const policies = items.find(item => item?.id === Number(idItem));

    if (!policies) {
      setIsFetched(true);
      return;
    }

    // if (data.length !== 0) {
    //   return;
    // }
    dispatch(catalogOperations.fetchInsectsCatalog(idItem));
    dispatch(catalogOperations.fetchInsectsProducts(idItem));
    dispatch(catalogOperations.fetchProductCatalog(idItem));
  }, [dispatch, idItem, items]);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    (() => {
      const oneItem = data?.find(it => it.slug === itemName);
      if (!oneItem) {
        setIsFetched(true);
        return;
      }
      setDiseasesCatalogItem(oneItem);
    })();
  }, [data, itemName]);

  return (
    <div className={styles.container}>
      {!DiseasesCatalogItem && loader && <Loader />}
      {DiseasesCatalogItem && (
        <>
          {!loader && (
            <MainInformanion
              name={DiseasesCatalogItem?.name}
              latinName={DiseasesCatalogItem?.latinName}
              description={DiseasesCatalogItem?.description}
              products={product}
              productsList={productsList}
              images={DiseasesCatalogItem?.images}
              idItem={id}
            />
          )}
        </>
      )}
      {!DiseasesCatalogItem && isFetched && <DontFound />}
    </div>
  );
}

export default InsectManual;
