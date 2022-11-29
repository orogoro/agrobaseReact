import { useParams } from 'react-router-dom';

import error from '../../../assets/img/error.png';

import styles from './ErrorPage.module.scss';

function ErrorPage() {
  const { itemName } = useParams();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Not found <span className={styles.span}>{itemName}</span>
      </h1>
      <img className={styles.img} src={error} alt="error" />
    </div>
  );
}

export default ErrorPage;
