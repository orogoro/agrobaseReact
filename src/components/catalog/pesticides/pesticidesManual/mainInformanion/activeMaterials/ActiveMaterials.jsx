import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { catalogSelectors } from '../../../../../../redux/catalog';

import ActiveMaterialsItem from './activeMaterialsItem/ActiveMaterialsItem';

import styles from './ActiveMaterials.module.scss';

function ActiveMaterials({ data }) {
  const { t } = useTranslation();

  const category = useSelector(catalogSelectors.getCategory);
  return (
    <div className={styles.containet}>
      <h2 className={styles.titlePesticides}>{t('ActiveMaterialLabel')}</h2>
      <ul className={styles.list}>
        {data.map(({ id, activeMaterial, amount, amountUnit }) => (
          <ActiveMaterialsItem
            key={id}
            name={activeMaterial}
            amount={amount}
            amountUnit={amountUnit}
            category={category.activeMaterial}
          />
        ))}
      </ul>
      <div className={styles.space}></div>
    </div>
  );
}

export default ActiveMaterials;
