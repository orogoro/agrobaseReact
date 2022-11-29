import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Diseases, Loader } from '../../components/catalog';

import styles from './DiseasesPage.module.scss';

function DiseasesPage() {
  const { itemName } = useParams();

  return (
    <main className={styles.main}>
      {!itemName && <Diseases />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default DiseasesPage;
