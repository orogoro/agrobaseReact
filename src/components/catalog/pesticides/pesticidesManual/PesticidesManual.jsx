import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  catalogSelectors,
  catalogOperations,
  catalogActions,
} from '../../../../redux/catalog';
import { catalogAPI } from '../../../../API/APIcatalog';

import MainInformanion from './mainInformanion/MainInformanion';
import { Loader, DontFound } from '../../';

import styles from './PesticidesManual.module.scss';

function PesticidesManual() {
  const { itemName, idItem } = useParams();
  const { i18n } = useTranslation();
  const items = useSelector(catalogSelectors.getCatalog);
  const colectionsProdact = useSelector(catalogSelectors.getItemColections);
  const loader = useSelector(catalogSelectors.isLoading);
  const id = useSelector(catalogSelectors.getLanguageById);
  const dispatch = useDispatch();
  const [prodact, setProdact] = useState('');
  const [isFetched, setIsFetched] = useState(false);
  const [weed, setWeed] = useState([]);
  const [insects, setInsects] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [weedCatalog, setWeedCatalog] = useState([]);
  const [insectsCatalog, setInsectsCatalog] = useState([]);
  const [diseasesCatalog, setDiseasesCatalog] = useState([]);
  const category = useSelector(catalogSelectors.getCategory);

  const catalogArrayItems = [
    ...weedCatalog,
    ...insectsCatalog,
    ...diseasesCatalog,
  ];

  const weedArrayProdacts = weed.filter(item => item.product === prodact?.id);
  const insectsArrayProdacts = insects.filter(
    item => item.product === prodact?.id
  );
  const diseasesArrayProdacts = diseases.filter(
    item => item.product === prodact?.id
  );

  const catalogsItemsArray = [
    ...weedArrayProdacts,
    ...insectsArrayProdacts,
    ...diseasesArrayProdacts,
  ];

  useEffect(() => {
    if (items.length === 0) {
      dispatch(catalogOperations.fetchCatalog());
    }

    if (colectionsProdact.length === 0) {
      return;
    }

    if (!id && items.length !== 0) {
      const catalogDefault = items?.find(item => item?.id === Number(idItem));
      const { id, slug, language } = catalogDefault;
      dispatch(catalogActions.changeLanguage({ id, slug }));
      i18n.changeLanguage(language);
    }
  }, [dispatch, i18n, idItem, items, id, colectionsProdact]);

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

    dispatch(catalogOperations.fetchProductCatalog(idItem));
  }, [dispatch, idItem, items]);

  useEffect(() => {
    if (colectionsProdact.length === 0) {
      return;
    }

    const getOneProdact = () => {
      const prodactById = colectionsProdact.find(
        item => item.slug === itemName
      );

      if (!prodactById) {
        setIsFetched(true);
        return;
      }
      setProdact(prodactById);
      dispatch(catalogOperations.fetchManufacturersRequest());
      dispatch(catalogOperations.fetchActiveMaterialsRequest());
      dispatch(catalogOperations.fetchCategoryRequest());
      dispatch(catalogOperations.fetchCulturesRequest());

      (async () => {
        const data = await catalogAPI.getWeedItemsRequest(idItem);
        const { items } = await catalogAPI.getInsectsProductsRequest(idItem);
        const item = await catalogAPI.getDiseasesProductsRequest(idItem);
        const d = await catalogAPI.getWeedCatalogRequest(idItem);
        const i = await catalogAPI.getInsectsCatalogRequest(idItem);
        const it = await catalogAPI.getDiseasesCatalogRequest(idItem);
        setWeed(data.items);
        setInsects(items);
        setDiseases(item.items);
        setWeedCatalog(d.items);
        setInsectsCatalog(i.items);
        setDiseasesCatalog(it.items);
      })();
    };
    getOneProdact();
  }, [colectionsProdact, dispatch, idItem, itemName, items]);

  return (
    <div className={styles.container}>
      {!prodact && loader && <Loader />}
      {prodact && !loader && (
        <MainInformanion
          name={prodact?.name}
          registrationNumber={prodact?.registrationNumber}
          description={prodact?.description}
          manufacturer={prodact?.manufacturer}
          category={prodact?.category}
          date={prodact?.registrationUntil}
          itemsCategory={category}
          cultures={prodact?.cultures}
          activeMaterials={prodact?.activeMaterials}
          catalogItems={catalogsItemsArray}
          catalogArrayItems={catalogArrayItems}
          idItem={idItem}
        />
      )}
      {!prodact && isFetched && <DontFound />}
    </div>
  );
}

export default PesticidesManual;
