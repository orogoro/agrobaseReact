import Select from 'react-select';
import PropTypes from 'prop-types';

import { getRatingStars } from '../../../../../../helpers/UIhelper';

import styles from './ManualFilter.module.scss';

function ManualFilter({ rating, onChange }) {
  const sortRating = rating?.sort();

  const arrayRating = sortRating?.map(item => {
    return { value: item, lable: getRatingStars(item) };
  });

  const options = arrayRating?.map(item => {
    return {
      value: item.value,
      label: item.lable.map((it, idx) => {
        if (item.value === 0) {
          return 'No rating';
        }

        return (
          <img className={styles.imgStars} key={idx} src={it} alt="rating" />
        );
      }),
    };
  });

  const handleInputChange = value => {
    onChange(value);
  };

  return (
    <Select
      className={styles.select}
      options={options}
      isClearable
      onChange={handleInputChange}
    />
  );
}

export default ManualFilter;

ManualFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.arrayOf(PropTypes.number),
};
