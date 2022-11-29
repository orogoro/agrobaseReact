import Select from 'react-select';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { catalogSelectors } from '../../../../redux/catalog';
import styles from './Filter.module.scss';

function Filter({ onChangeFilter }) {
  const items = useSelector(catalogSelectors.getCategory);

  const categoryOptions = items.category?.map(item => {
    return {
      value: item.id,
      label: item.name,
      name: 'category',
    };
  });
  const manufacturersOptions = items.manufacturer?.map(item => {
    return {
      value: item.id,
      label: item.name,
      name: 'manufacturers',
    };
  });

  // const culturesOptions = items.cultures?.map(item => {
  //   return {
  //     value: item.id,
  //     label: item.name,
  //     name: 'cultures',
  //   };
  // });

  const activeMaterialsOptions = items.activeMaterial?.map(item => {
    return {
      value: item.id,
      label: item.name,
      name: 'activeMaterials',
    };
  });

  return (
    <form className={styles.form}>
      <Select
        className={styles.select}
        options={categoryOptions}
        // isClearable
        onChange={onChangeFilter}
        placeholder="Category"
        name="category"
      />
      <Select
        className={styles.select}
        options={manufacturersOptions}
        // isClearable
        onChange={onChangeFilter}
        placeholder="Manufacturers"
        name="manufacturers"
      />
      {/* <Select
        className={styles.select}
        options={culturesOptions}
        // isClearable
        onChange={onChangeFilter}
        placeholder="Cultures"
        name="cultures"
      /> */}
      <Select
        className={styles.select}
        options={activeMaterialsOptions}
        // isClearable
        onChange={onChangeFilter}
        placeholder="Active materials"
        name="activeMaterials"
      />
    </form>
  );
}

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  materialsRequest: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
  cultures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
  category: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
};
