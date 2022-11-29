import HashLoader from 'react-spinners/HashLoader';
import styles from './Loader.module.scss';

function Loader() {
  return <HashLoader className={styles.loader} color="black" size={70} />;
}

export default Loader;
