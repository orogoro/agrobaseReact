import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Insects, Loader } from '../../components/catalog';

import styles from './InsectsPage.module.scss';

function InsectsPage() {
  const { itemName } = useParams();

  return (
    <main className={styles.main}>
      {!itemName && <Insects />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default InsectsPage;
