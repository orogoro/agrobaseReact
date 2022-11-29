import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

function Filter({ onChange, value }) {
  return (
    <div className={styles.SearchForm}>
      <input
        className={styles.SearchFormInput}
        type="text"
        onChange={e => onChange(e.currentTarget.value)}
        name="value"
        value={value}
        autoComplete="off"
        autoFocus
        placeholder="Search crops"
      />

      <div type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </div>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
