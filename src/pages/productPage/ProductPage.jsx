import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Pesticides, Loader } from '../../components/catalog';

import styles from './ProductPage.module.scss';
function ProductPage() {
  const { itemName } = useParams();

  return (
    <main className={styles.main}>
      {!itemName && <Pesticides />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default ProductPage;
