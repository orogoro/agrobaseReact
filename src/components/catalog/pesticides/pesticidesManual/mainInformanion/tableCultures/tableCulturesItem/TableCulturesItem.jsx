import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './TableCulturesItem.module.scss';

function TableCulturesItem({
  cultureID,
  interval,
  rateMax,
  rateMin,
  bbchMax,
  bbchMin,
  category,
}) {
  const { t } = useTranslation();

  const nameCulture = category.find(item => item.id === cultureID);

  return (
    <tr className={styles.tr}>
      <td data-label={t('cropsLabel')} className={styles.td}>
        {nameCulture?.name}
      </td>
      <td
        data-label={t('BBCHLabel')}
        className={styles.td}
      >{`${bbchMin} - ${bbchMax}`}</td>
      <td
        data-label={t('registeredNormLabel')}
        className={styles.td}
      >{`${rateMin} - ${rateMax}`}</td>
      <td data-label={t('intervalLabel')} className={styles.td}>
        {interval ? interval : 'N/A'}
      </td>
    </tr>
  );
}

export default TableCulturesItem;

TableCulturesItem.propTypes = {
  cultureID: PropTypes.number.isRequired,
  interval: PropTypes.number,
  rateMax: PropTypes.number,
  rateMin: PropTypes.number,
  bbchMax: PropTypes.number,
  bbchMin: PropTypes.number,
  category: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string,
    })
  ),
};
