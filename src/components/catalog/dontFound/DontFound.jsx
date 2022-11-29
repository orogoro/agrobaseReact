import { useTranslation } from 'react-i18next';

import styles from './DontFound.module.scss';

function DontFound() {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container}`}>
      <p className={styles.text}>{t('dontFound')}</p>
    </div>
  );
}

export default DontFound;
