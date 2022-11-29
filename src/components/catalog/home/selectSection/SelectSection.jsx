import { useTranslation } from 'react-i18next';

import SelectItem from './selectItem/SelectItem';

import pesticides from '../../../../assets/img/Frame10.png';
import weeds from '../../../../assets/img/Frame9.png';
import insects from '../../../../assets/img/Frame11.png';
import diseases from '../../../../assets/img/Frame12.png';

import styles from './SelectSection.module.scss';

function SelectSection({ idItem }) {
  const { t } = useTranslation();

  return (
    <div className={styles.selectContainer}>
      <SelectItem
        path={`Pesticides/${idItem}`}
        img={pesticides}
        name={t('dashboardProducts')}
      />
      <SelectItem
        path={`Insects/${idItem}`}
        img={insects}
        name={t('dashboardInsects')}
      />
      <SelectItem
        path={`Weeds/${idItem}`}
        img={weeds}
        name={t('dashboardWeeds')}
      />
      <SelectItem
        path={`Diseases/${idItem}`}
        img={diseases}
        name={t('dashboardDiseases')}
      />

      <div className={styles.twirl}></div>
      <div className={styles.horizontal}></div>
    </div>
  );
}

export default SelectSection;
