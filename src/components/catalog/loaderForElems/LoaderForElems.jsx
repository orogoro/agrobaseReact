import ScaleLoader from 'react-spinners/ScaleLoader';
import styles from './LoaderForElems.module.scss';

function LoaderForElems() {
  return <ScaleLoader className={styles.loader} color="black" size={70} />;
}

export default LoaderForElems;
